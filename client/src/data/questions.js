// Central question bank for TenseTutor
// Each tense contains beginner-level questions
// Structure is scalable for future difficulty levels

export const questions = {
  Present: [
    {
      id: "P1",
      tense: "Present",
      difficulty: "Beginner",
      pattern: "present_continuous",
      english: "I am going to school.",
      correctHindi: [
        "मैं स्कूल जा रहा हूँ",
        "मैं स्कूल जा रही हूँ",
        "मैं स्कूल जा रहा हूं",
        "मैं स्कूल जा रही हूं"
      ]
    },
    {
      id: "P2",
      tense: "Present",
      difficulty: "Beginner",
      pattern: "simple_present",
      english: "I go to college every day.",
      correctHindi: [
        "मैं हर दिन कॉलेज जाता हूँ",
        "मैं हर दिन कॉलेज जाती हूँ",
        "मैं रोज कॉलेज जाता हूँ",
        "मैं रोज कॉलेज जाती हूँ",
        "मैं रोज कॉलेज जाता हूं",
        "मैं रोज कॉलेज जाती हूं"
      ]
    }
  ],

  Past: [
    {
      id: "PA1",
      tense: "Past",
      difficulty: "Beginner",
      pattern: "simple_past",
      english: "I went to school.",
      correctHindi: [
        "मैं स्कूल गया था",
        "मैं स्कूल गई थी"
      ]
    },
    {
      id: "PA2",
      tense: "Past",
      difficulty: "Beginner",
      pattern: "past_continuous",
      english: "She was reading a book.",
      correctHindi: [
        "वह किताब पढ़ रही थी",
        "वह किताब पढ़ रहा था"
      ]
    }
  ],

  Future: [
    {
      id: "F1",
      tense: "Future",
      difficulty: "Beginner",
      pattern: "simple_future",
      english: "I will go to school.",
      correctHindi: [
        "मैं स्कूल जाऊँगा",
        "मैं स्कूल जाऊंगी",
        "मैं स्कूल जाऊंगा",
        "मैं स्कूल जाऊंगी"
      ]
    },
    {
      id: "F2",
      tense: "Future",
      difficulty: "Beginner",
      pattern: "going_to_future",
      english: "She is going to cook food.",
      correctHindi: [
        "वह खाना बनाने वाली है",
        "वह खाना बनाने वाला है"
      ]
    }
  ]
};
