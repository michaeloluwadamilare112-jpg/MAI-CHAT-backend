export const getAIResponse = async (message) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are MAICHAT, a helpful AI assistant."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    // 🔥 SAFETY CHECK (THIS FIXES YOUR ERROR)
    if (!data.choices || !data.choices[0]) {
      console.log("OpenAI response error:", data);
      return "AI error: invalid response from OpenAI";
    }

    return data.choices[0].message.content;

  } catch (err) {
    console.error("OpenAI request failed:", err);
    return "AI service error";
  }
};
