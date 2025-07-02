const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.processDocumentWithLLM = async (inputText) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'Extract structured data and key points from this document:' },
      { role: 'user', content: inputText }
    ]
  });

  return completion.choices[0].message.content;
};