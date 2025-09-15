# 🌐 MindSpace – Mental Health & Wellness Platform

MindSpace is a **full-stack MERN application** that provides a safe digital space for mental wellness.  
It helps users track moods, share anonymous thoughts, and engage with an **AI-powered chatbot** for emotional support.  

---

## ✨ Features

- 🧠 **AI Chatbot (Gemini API)** – Engage in supportive, human-like conversations.  
- 👩‍⚕️ **Static Therapist Option** – Choose to interact with a predefined virtual therapist for guided responses.  
- 📝 **Anonymous Feel-Better Posts** – Share thoughts and experiences without revealing identity.  
- 📊 **Mood Tracking Dashboard** – Visualize mood patterns and emotional trends over time.  
- 🔒 **Secure Authentication** – JWT-based login/signup flow.  

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT  
**AI Integration:** Google Gemini API  

---

## 📂 Project Structure

MindSpace/
├── backend/ # Node.js + Express API
├── frontend/ # React.js + Tailwind UI
├── README.md # Documentation
└── package.json


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/parim2024/chatbotMern.git
cd mindspace


2️⃣ Install dependencies

Backend:
cd backend
npm install

Frontend:
cd ../frontend
npm install


3️⃣ Add Environment Variables
Create a .env file inside the backend folder:

env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key


4️⃣ Run the app
Backend:
cd backend
npm run dev

Frontend:
cd ../frontend
npm run dev



