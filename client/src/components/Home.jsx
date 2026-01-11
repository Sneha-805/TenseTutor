import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import PracticeCard from "./PracticeCard";
import { auth } from "../firebase";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { questions } from "../data/questions";

function Home() {
  const [tenseMode, setTenseMode] = useState("Present");
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  // 🔴 Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };
const resetTenseProgress = async (tense) => {
  if (!user) return;

  const ref = doc(db, "users", user.uid, "progress", today);

  await setDoc(
    ref,
    {
      [tense]: { correct: 0 }
    },
    { merge: true }
  );

  setProgress((prev) => ({
    ...prev,
    [tense]: { correct: 0 }
  }));
};

 const saveProgress = async (isCorrect) => {
  if (!user) return;

  const ref = doc(db, "users", user.uid, "progress", today);
  const snap = await getDoc(ref);

  const data = snap.exists() ? snap.data() : {};
  const totalQuestions = questions[tenseMode].length;

  const previous = data[tenseMode] || { correct: 0 };

  // Increase correct only if not already maxed
  const updatedCorrect = isCorrect
    ? Math.min(previous.correct + 1, totalQuestions)
    : previous.correct;

  const updatedTenseData = {
    correct: updatedCorrect,
  };

  await setDoc(
    ref,
    { ...data, [tenseMode]: updatedTenseData },
    { merge: true }
  );

  setProgress((prev) => ({
    ...prev,
    [tenseMode]: updatedTenseData,
  }));
};


  // 📊 Load today's progress
  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return;

      const ref = doc(db, "users", user.uid, "progress", today);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProgress(snap.data());
      } else {
        setProgress({});
      }

      setLoading(false);
    };

    loadProgress();
  }, [user, today]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading dashboard...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">

        <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow">
  {/* Left: Logo + Title */}
  <div className="flex items-center gap-3">
    <img
      src="/logo.png"
      alt="TenseTutor Logo"
      className="w-40 h-40 cursor-pointer"
       onClick={() => navigate("/")}
    />
    <div>
      <h1 className="text-2xl font-bold">TenseTutor</h1>
      <p className="text-sm text-gray-500">
        Learn English tenses using voice 🎤
      </p>
    </div>
  </div>

  {/* Right: Logout */}
  <button
    onClick={handleLogout}
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Logout
  </button>
</div>


        {/* Tense Selector */}
        <div className="mb-6 bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Select Tense</h2>
          <div className="flex gap-3">
            {["Past", "Present", "Future"].map((tense) => (
              <button
                key={tense}
               onClick={async () => {
              setTenseMode(tense);
              await resetTenseProgress(tense);
            }}

                className={`px-4 py-2 rounded ${
                  tenseMode === tense
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {tense}
              </button>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6 bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">📊 Today’s Progress</h2>
          {progress[tenseMode] ? (
      <p>
              {progress[tenseMode]?.correct || 0} /{" "}
              {questions[tenseMode].length} correct
            </p>
          ) : (
            <p className="text-gray-500">No practice yet</p>
          )}
        </div>

        {/* Practice Card */}
        <div className="bg-white p-4 rounded-xl shadow">
          <PracticeCard
            tenseMode={tenseMode}
            questions={questions[tenseMode]}
            saveProgress={saveProgress}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
