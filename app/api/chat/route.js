import OpenAI from "openai";

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    // ⚠️ IMPORTANT: key check
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        reply: "API key missing. Check .env.local"
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const systemPrompt = `
You are Shiv Branding AI Assistant.

Company:
- Branding Agency
- Helps businesses grow

Services:
Branding, Website, Marketing, 3D, Content, Video

Rules:
- Be friendly
- Short replies
- Suggest services
- Ask user needs
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...(history || []).map(m => ({
          role: m.role === "bot" ? "assistant" : "user",
          content: m.text
        })),
        { role: "user", content: message }
      ],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });

  } catch (err) {
    console.error(err);
    return Response.json({
      reply: "Server error (check console)"
    });
  }
}