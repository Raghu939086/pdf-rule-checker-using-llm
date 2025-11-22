const pdfParse = require("pdf-parse");

exports.extractPDFText = async (buffer) => {
  const data = await pdfParse(buffer);
  return data.text;
};
