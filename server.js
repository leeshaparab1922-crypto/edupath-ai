require("dotenv").config();
const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();
app.use(cors());
app.use(express.json());

console.log("API KEY LOADED:", process.env.OPENROUTER_API_KEY ? "YES ✓" : "NO ✗");

app.post("/career", async (req, res) => {
  const { interest } = req.body;

  if (!interest || interest.trim().length < 10) {
    return res.status(400).json({ error: "Please describe your interests in more detail." });
  }

  const prompt = `You are an expert career counselor helping students make informed decisions.

Student's interests and background:
${interest}

Provide a structured career guidance response with:
1. Top 3 Suitable Careers - with brief explanation for each
2. Required Skills - technical and soft skills for each career
3. Free Learning Resources - specific websites, YouTube channels, or platforms
4. 6-Month Learning Roadmap - month-by-month actionable steps
5. Recommended Certifications - free or affordable ones
6. Internship/Entry-Level Opportunities - where to find them

Keep the tone encouraging and practical.`;

  const body = JSON.stringify({
    model: "deepseek/deepseek-r1-0528",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }]
});
  const options = {
    hostname: "openrouter.ai",
    path: "/api/v1/chat/completions",
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "EduPath AI"
    }
  };

  const apiReq = https.request(options, (apiRes) => {
    let data = "";
    apiRes.on("data", (chunk) => data += chunk);
    apiRes.on("end", () => {
      try {
        const parsed = JSON.parse(data);
        if (parsed.error) {
          return res.status(500).json({ error: parsed.error.message });
        }
        const text = parsed.choices[0].message.content;
        res.json({ response: text });
      } catch (e) {
        res.status(500).json({ error: "Failed to parse response." });
      }
    });
  });

  apiReq.on("error", (err) => {
    console.error("Request error:", err);
    res.status(500).json({ error: "Network error. Please try again." });
  });

  apiReq.write(body);
  apiReq.end();
});

app.use(express.static("."));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});