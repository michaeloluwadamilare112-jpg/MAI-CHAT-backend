import { getAIResponse } from "../services/openaiService.js";

export const chat = async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await getAIResponse(message);

    console.log("Reply:", reply);

    res.json({ reply });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ reply: "Backend crash" });
  }
};
