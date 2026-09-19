const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['node_modules/sarvamai/dist/cjs/index.js'],
  bundle: true,
  outfile: 'sarvamai.bundle.js',
  format: 'iife',
  globalName: 'SarvamAI',
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.version': '"v20.0.0"',
    'process.cwd': '(() => "")',
    'process.versions.node': '"20.0.0"',
    'process': '{"env":{}}'
  }
}).then(() => console.log('Bundled successfully!')).catch(() => process.exit(1));
