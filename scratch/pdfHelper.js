async function extractTextFromPDF(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({data: arrayBuffer}).promise;
    let maxPages = pdf.numPages;
    let text = '';
    for (let i = 1; i <= maxPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      text += strings.join(' ') + '\\n';
    }
    return text;
  } catch (e) {
    console.error('PDF extraction failed', e);
    return null;
  }
}
