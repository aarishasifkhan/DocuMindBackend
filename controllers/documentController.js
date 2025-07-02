const { processDocumentWithLLM } = require('../services/llmService');

exports.extractDataFromDocument = async (req, res) => {
  try {
    const text = req.file.buffer.toString('utf-8');
    const result = await processDocumentWithLLM(text);

    res.json({ success: true, extracted: result });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ success: false, error: 'The LLM Processing has Failed.' });
  }
};