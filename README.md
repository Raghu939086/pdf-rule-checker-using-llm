### PDF Rule Checker Using LLM

A full-stack application that allows users to:
Upload a PDF
Enter 3 custom rules
Automatically check if the document satisfies those rules using an LLM (AI model)
Display results such as:
PASS / FAIL
Evidence sentence
Reasoning
Confidence score (0–100)
This project was built as part of the NIYAMR AI Full-Stack Developer Assignment.

### 📌 Features
✔ Upload any PDF (2–10 pages)
✔ Enter 3 rules (ex: “Document must mention a date”)
✔ Extract PDF text using backend
✔ Analyze the text using OpenAI LLM
✔ Return clean structured output:

{
  "rule": "Document must mention a date.",
  "status": "pass",
  "evidence": "Found in page 1: 'Published 2024'",
  "reasoning": "Document includes a publication year.",
  "confidence": 92
}
✔ Display results in a frontend table
✔ Clean, modular, and scalable folder structure


### Frontend Setup (React + Vite)
1️⃣ Navigate to frontend folder:
cd niyamy-frontend

2️⃣ Install dependencies:
npm install

3️⃣ Start the frontend:
npm run dev

✔ Frontend runs on:

👉 http://localhost:5173/

🔧 Backend Setup (Node.js + Express)
1️⃣ Navigate to backend folder:
cd niyamr-backend

2️⃣ Install dependencies:
npm install

3️⃣ Configure OpenAI API Key
Add your key inside:
src/config/openai.js
Example:

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY_HERE"
});

module.exports = { openai };

4️⃣ Start backend:
node src/server.js

✔ Backend runs on:

👉 http://localhost:5000/

### API Endpoint
POST /check

Request Format (multipart/form-data):

Field	Type	Description
pdf	File	The PDF document
rules	JSON array	List of 3 rules

Example Request Body:
pdf: (selected file)
rules: ["The document must have a date.","Must include a title.","Must mention purpose."]

Example Response:

[
  {
    "rule": "Document must mention a date.",
    "status": "pass",
    "evidence": "Found in page 1: 'Published 2024'",
    "reasoning": "A valid date is present.",
    "confidence": 92
  }
]

🧠 Tech Stack
Frontend
React (Vite)
Axios
Modular component architecture
Backend
Node.js
Express
Multer (PDF upload)
pdf-parse (Extract text from PDF)
OpenAI LLM

### 📝 How It Works (Flow)

1️⃣ User uploads PDF
2️⃣ User enters 3 rules
3️⃣ Backend extracts text from PDF
4️⃣ Backend sends text + rules to LLM
5️⃣ AI returns pass/fail for each rule
6️⃣ Frontend displays results in a table