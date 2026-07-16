const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

/**
 * Validates and compiles Mermaid code to SVG and PNG using @mermaid-js/mermaid-cli
 * @param {string} mmdCode - The raw mermaid code
 * @param {string} outputDir - Directory to save the compiled images
 * @param {string} baseFilename - Base name for the output files (without extension)
 * @returns {Promise<{success: boolean, error?: string, files?: {mmd: string, svg: string, png: string}}>}
 */
async function compileMermaid(mmdCode, outputDir, baseFilename) {
  const mmdPath = path.join(outputDir, `${baseFilename}.mmd`);
  const svgPath = path.join(outputDir, `${baseFilename}.svg`);
  const pngPath = path.join(outputDir, `${baseFilename}.png`);

  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Clean up mermaid code (remove backticks if LLM hallucinated them)
    mmdCode = mmdCode.replace(/^```mermaid\\n/, '').replace(/\\n```$/, '').trim();

    // Write .mmd file
    await fs.writeFile(mmdPath, mmdCode, 'utf8');

    // Run mmdc for SVG
    await runMmdc(mmdPath, svgPath);
    
    // Run mmdc for PNG (with transparent background)
    await runMmdc(mmdPath, pngPath, true);

    return {
      success: true,
      files: {
        mmd: mmdPath,
        svg: svgPath,
        png: pngPath
      }
    };
  } catch (error) {
    // If compilation fails, we can read the error message to feed back to LLM
    return {
      success: false,
      error: error.message
    };
  }
}

function runMmdc(inputPath, outputPath, isPng = false) {
  return new Promise((resolve, reject) => {
    // We use npx to run mmdc from local node_modules
    // --puppeteerConfigFile can be used if we need sandbox flags for linux, 
    // but on windows/mac default usually works.
    let cmd = `npx mmdc -i "${inputPath}" -o "${outputPath}"`;
    if (isPng) {
      cmd += ` -b transparent`;
    }

    exec(cmd, { timeout: 30000 }, (error, stdout, stderr) => {
      if (error) {
        // Syntax error or timeout
        reject(new Error(stderr || stdout || error.message));
        return;
      }
      resolve();
    });
  });
}

module.exports = {
  compileMermaid
};
