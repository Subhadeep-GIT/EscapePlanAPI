# 🚀 EscapePlanAPI

**EscapePlanAPI** is a fun and quirky excuse generator API that delivers hilarious and surprisingly relatable excuses across multiple categories. Perfect for your next app or chatbot that needs a little spice and spontaneity!

---

## 📡 Base URL
https://escape-plan-api.vercel.app/excuses
---

## 📚 Available Routes

### 🔀 Get a Random Excuse
```http
GET /excuses/random

Response

JSON:
{
  "excuse": "My alarm decided to betray me ⏰😴"
}

🎯 Get Excuse by Category

GET /excuses/:category

Replace :category with any of the supported category names below.

Response :
JSON: {
  "category": "romantic",
  "excuse": "I was lost in your thoughts and forgot the time 😌"
}


⸻

❌ 404 - Invalid Category

If a category doesn’t exist, you’ll receive:
JSON: {
  "error": "Category not found"
}


✨ Want to Contribute?

Open a PR with more categories or new routes! Keep it fun, positive, and quirky 💜


📬 Contact

Made with ❤️ by Subhadeep Ghosh

⸻
⚡ Example Use Cases
	•	React Native apps (like Exit Code Red 🔴)
	•	Chatbots that need fun replies
	•	College assignment excuse generators 😎
	•	Custom keyboards/extensions