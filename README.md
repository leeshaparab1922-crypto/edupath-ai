# 🎓 EduPath AI — Intelligent Career Guidance Assistant

> **Empowering students with personalized AI-driven career roadmaps — aligned with UN SDG 4: Quality Education**

---

## 🌍 The Problem We're Solving

Every year, millions of students in India and across developing nations make critical career decisions **without proper guidance**. Professional career counseling costs thousands of rupees and is simply unavailable in Tier 2 cities, rural schools, and government colleges.

The result?
- Students pick careers based on peer pressure, not passion
- Graduates enter the workforce underprepared and misaligned
- India's skills gap widens year after year

**EduPath AI changes that — for free, for everyone, instantly.**

---

## 💡 What is EduPath AI?

EduPath AI is a **web-based career guidance assistant** powered by Generative AI. A student types their interests in plain language and receives a complete, personalized career roadmap in seconds — no sign-up, no fees, no waiting.

```
Student types their interests
          ↓
  EduPath AI analyzes them
          ↓
  Instant personalized output:
  ✅ Top 3 matching careers
  ✅ Skills required
  ✅ Free learning resources
  ✅ 6-month roadmap
  ✅ Certifications to pursue
  ✅ Internship opportunities
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 Career Recommendations | Top 3 careers matched to the student's unique interests and strengths |
| 🛠️ Skills Roadmap | Both technical and soft skills clearly listed for each career path |
| 📚 Free Resources | Curated links to free platforms — Coursera, YouTube, Khan Academy, NPTEL |
| 🗓️ 6-Month Action Plan | Month-by-month structured learning schedule to go from beginner to job-ready |
| 🏅 Certification Guidance | Free and affordable industry certifications recommended for each path |
| 💼 Internship Opportunities | Guidance on where and how to find real-world experience |
| ⚡ Instant Results | AI response generated in seconds with no delay |
| 📱 Responsive Design | Works on desktops, tablets, and mobile browsers |

---



## 🏗️ How It Works

```
┌─────────────────────────────────────┐
│         Student (Browser)           │
│   Types interests → Clicks button   │
└──────────────┬──────────────────────┘
               │ HTTP POST /career
               ▼
┌─────────────────────────────────────┐
│      Node.js + Express Backend      │
│   Validates input, builds prompt    │
└──────────────┬──────────────────────┘
               │ REST API Call
               ▼
┌─────────────────────────────────────┐
│     OpenRouter AI (LLaMA 3.1)       │
│   Processes prompt, generates       │
│   personalized career guidance      │
└──────────────┬──────────────────────┘
               │ JSON Response
               ▼
┌─────────────────────────────────────┐
│   Formatted output shown to student │
└─────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | HTML5, CSS3, JavaScript | User interface and interaction |
| Backend | Node.js, Express.js | Server and API handling |
| | Generative AI | DeepSeek R1 via OpenRouter | Career guidance generation |
| API Layer | REST / HTTPS | Secure communication |
| Config | dotenv | Secure API key management |
| Version Control | Git + GitHub | Source code management |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- A free [OpenRouter](https://openrouter.ai) account

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/career-guide-ai.git
cd career-guide-ai
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up your API key**

Create a `.env` file in the root folder:
```
OPENROUTER_API_KEY=sk-or-your_key_here
```

Get your free key at 👉 [https://openrouter.ai/keys](https://openrouter.ai/keys)

**4. Start the server**
```bash
node server.js
```

**5. Open in browser**
```
http://localhost:3000
```

That's it. No database, no complex setup, no paid subscriptions.

---

## 📁 Project Structure

```
career-guide-ai/
│
├── index.html        # Main frontend UI
├── style.css         # Styling and responsive layout
├── script.js         # Frontend logic and API calls
├── server.js         # Node.js backend server
├── package.json      # Project dependencies
├── .env              # API key (not pushed to GitHub)
├── .gitignore        # Ignores node_modules and .env
└── screenshots/      # App screenshots for documentation
```

---

## 🌱 UN SDG Alignment

This project directly supports **SDG 4 — Quality Education**:

> *"Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all"*

EduPath AI addresses this by:
- Making expert career guidance **free and accessible** to all students
- Reaching students in **rural and underserved areas** through a simple web interface
- Recommending **free learning resources** so cost is never a barrier to upskilling
- Helping students make **informed decisions** that lead to meaningful employment

---

## 🔮 Future Scope

- 📄 **Resume Analyzer** — Upload a PDF resume and get AI feedback on improvements
- 🎤 **Mock Interview Generator** — Practice with AI-generated role-specific questions
- 🌐 **Multilingual Support** — Hindi, Tamil, Telugu, and other Indian languages
- 📱 **Mobile App** — Android and iOS versions for smartphone-only users
- 📊 **Skill Gap Quiz** — Interactive assessment to personalize the roadmap further
- 🏫 **College Finder** — Suggest colleges, entrance exams, and courses in India
- 📈 **Progress Tracker** — Save roadmaps and track learning milestones over time

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [your-linkedin](https://linkedin.com/in/yourprofile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [OpenRouter](https://openrouter.ai) — for providing free access to open-source AI models
- - [DeepSeek](https://deepseek.com) — for the DeepSeek R1 open-source reasoning model
- [United Nations](https://sdgs.un.org) — for the SDG framework guiding this project

---

<div align="center">

**⭐ If this project helped you or inspired you, please give it a star!**

*Built with purpose | Aligned with SDG 4 | Made for every student*

</div>