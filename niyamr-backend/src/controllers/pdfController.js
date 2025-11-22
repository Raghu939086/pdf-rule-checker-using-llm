const { extractPDFText } = require("../services/pdfExtractor");
const { processRulesWithLLM } = require("../services/llmServices");

exports.handlePDFCheck = async (req, res) => {
  try {
    const pdfBuffer = req.file.buffer;
    const rules = JSON.parse(req.body.rules);

    const text = await extractPDFText(pdfBuffer);

    const results = await processRulesWithLLM(text, rules);

    res.json(results);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message
    });
  }
};
