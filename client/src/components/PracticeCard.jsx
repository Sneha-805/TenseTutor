import { useEffect, useRef, useState } from "react";

function PracticeCard({ questions, saveProgress }) {
  const [shuffled, setShuffled] = useState([]);
  const [index, setIndex] = useState(0);
  const [spokenHindi, setSpokenHindi] = useState("");
  const [result, setResult] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  // Shuffle questions ONCE per tense
  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setShuffled(shuffledQuestions);
    setIndex(0);
    setSpokenHindi("");
    setResult("");
  }, [questions]);

  const question = shuffled[index];

  const normalize = (text) =>
    text.replace(/[।.,!?]/g, "").replace(/\s+/g, " ").trim();

  // Speech recognition setup
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "hi-IN";

    recognition.onresult = (e) => {
      setSpokenHindi(e.results[0][0].transcript);
      setListening(false);
    };

    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) return;
    setSpokenHindi("");
    setResult("");
    setListening(true);
    recognitionRef.current.start();
  };

  const checkAnswer = () => {
    if (!spokenHindi) return;

    const correct = question.correctHindi.some(
      (ans) => normalize(ans) === normalize(spokenHindi)
    );

    saveProgress(correct);
    setResult(correct ? "Correct ✅" : "Wrong ❌");

    setTimeout(() => {
      setResult("");
      setSpokenHindi("");
      setIndex((prev) => prev + 1);
    }, 1200);
  };

  // 🎉 Practice finished
  if (index >= shuffled.length) {
    return (
      <div className="text-center py-6">
        <h2 className="text-xl font-semibold mb-2">
          🎉 Practice Completed!
        </h2>
        <p className="text-gray-600">
          You have completed all questions for this tense.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="font-medium text-lg mb-2">
        {index + 1}. {question.english}
      </p>

      <button
        onClick={startListening}
        disabled={listening}
        className={`mt-3 w-full py-2 rounded text-white ${
          listening ? "bg-red-500 animate-pulse" : "bg-purple-600"
        }`}
      >
        {listening ? "Listening..." : "🎤 Speak Hindi"}
      </button>

      {spokenHindi && (
        <div className="mt-3 bg-gray-100 p-2 rounded">
          <strong>You said:</strong> {spokenHindi}
        </div>
      )}

      <button
        onClick={checkAnswer}
        disabled={!spokenHindi}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
      >
        Check Answer
      </button>

      {result && (
        <div className="mt-3 text-center font-semibold">
          {result}
        </div>
      )}
    </div>
  );
}

export default PracticeCard;
