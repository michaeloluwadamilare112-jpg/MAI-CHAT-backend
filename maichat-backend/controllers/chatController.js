import { getAIResponse } from "../services/openaiService.js";

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await getAIResponse(message);

    res.json({ reply });

  } catch (error) {
    res.status(500).json({
      reply: "MAICHAT backend error"
    });
  }
};
