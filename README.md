📘 TenseTutor – Voice-Based English to Hindi Translation Practice

TenseTutor is a voice-enabled web application that helps users practice English to Hindi sentence translation. The application displays an English sentence, and the user must speak the correct Hindi translation, which is evaluated in real time using speech recognition. The platform also tracks daily learning progress securely.

🔗 Live Demo

👉 https://tense-tutor.vercel.app

🎯 Problem Statement

Many learners understand English sentences but struggle to translate them accurately into Hindi while speaking. Existing tools often rely on text input and do not provide interactive voice-based practice or instant feedback.

💡 Solution

TenseTutor solves this problem by:

Displaying English sentences to users

Accepting Hindi translations through voice input

Comparing spoken Hindi with correct translations

Providing instant feedback

Tracking daily progress per tense

✨ Key Features
🔐 User Authentication

Secure Signup and Login using Firebase Authentication

Protected routes to ensure authorized access only

🎤 Voice-Based Translation

Users speak Hindi translations instead of typing

Uses Web Speech API (hi-IN) for Hindi recognition

Normalizes and evaluates spoken input

📊 Progress Tracking

Daily progress stored in Firebase Firestore

Score shown as correct / total sentences

Progress resets daily to avoid score inflation

🔁 Smart Practice Flow

Questions are shuffled for each session

Each sentence appears only once per practice session

Completion message shown after finishing all questions

🎨 Clean UI & UX

Responsive interface built with Tailwind CSS

Branded navbar with logo

Clear feedback messages (Correct / Wrong)

🛠️ Tech Stack
Category	Technology
Frontend	React (Vite)
Styling	Tailwind CSS
Authentication	Firebase Authentication
Database	Firebase Firestore
Voice Recognition	Web Speech API
Hosting	Vercel
Version Control	Git & GitHub
📁 Project Structure
TenseTutor/
├── client/
│   ├── public/
│   │   └── logo.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── PracticeCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── data/
│   │   │   └── questions.js
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md

⚙️ Environment Variables

Create a .env file inside the client directory:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


⚠️ .env is included in .gitignore to protect sensitive information.

🚀 Running the Project Locally
cd client
npm install
npm run dev


Open in browser:

http://localhost:5173

🌐 Deployment

The application is deployed on Vercel:

Root directory set to client

Environment variables configured in Vercel dashboard

Firebase domain authorized for authentication

🧪 Testing Checklist

✅ English sentence displayed correctly

✅ Hindi voice input captured

✅ Correct translation recognized

✅ Progress updates correctly

✅ Login & Signup work

✅ No score inflation

✅ Works after page refresh

🧠 Learning Outcomes

Implemented voice-based language translation evaluation

Gained hands-on experience with Web Speech API

Integrated Firebase Authentication and Firestore

Managed real-time user progress data

Deployed a secure React application using Vercel

Followed industry-level project structure

🚀 Future Enhancements (NLP Integration)
🔹 NLP-Based Semantic Evaluation

Integrate Natural Language Processing (NLP) to evaluate translations based on meaning, not exact sentence matching.

Accept grammatically correct variations of Hindi translations.

🔹 Intelligent Similarity Matching

Use tokenization, stemming, and lemmatization for Hindi text.

Apply cosine similarity or sentence embeddings to measure semantic closeness.

🔹 Grammar & Tense Analysis

Detect tense correctness using NLP techniques.

Provide detailed feedback such as:

Incorrect tense usage

Missing auxiliary verbs

Gender or number mismatches

🔹 AI-Powered Feedback

Generate context-aware suggestions like:

“Your translation is correct, but tense is incorrect.”

“Word order can be improved.”

🔹 Multilingual Support

Extend NLP pipeline for:

English → Telugu

English → Tamil

Advanced English → Hindi

🔹 Machine Learning Integration

Train models using user responses

Improve translation evaluation accuracy over time

👩‍💻 Author

Sneha Mudda
B.Tech CSE, IIIT RK Valley
Aspiring Full Stack Developer

📄 License

This project is developed for educational and learning purposes.
