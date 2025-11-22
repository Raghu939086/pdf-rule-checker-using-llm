const { openai } = require("../config/openai");

exports.processRulesWithLLM = async (text, rules) => {
  const results = [];

  for (const rule of rules) {
    if (!rule.trim()) continue;

    const prompt = `
Check if the following document satisfies this rule.

RULE: "${rule}"

DOCUMENT:
${text}

Return JSON in this format:
{
 "rule": "",
 "status": "pass" or "fail",
 "evidence": "",
 "reasoning": "",
 "confidence": number
}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    const parsed = JSON.parse(response.choices[0].message.content);
    results.push(parsed);
  }

  return results;
};
