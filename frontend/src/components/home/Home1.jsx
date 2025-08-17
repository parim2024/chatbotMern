import React, { useState, useEffect } from "react";

const positiveQuotes = [
  "You are stronger than you think 💪",
  "Every day is a fresh start 🌸",
  "Your feelings are valid 🌈",
  "Healing takes time, and that's okay 💙",
  "Small steps lead to big changes ✨",
  "Happiness is not something ready-made, it comes from your own actions 💫",
  "Believe you can, and you're halfway there 🚀",
  "Difficult roads often lead to beautiful destinations 🌄",
  "Stay patient and trust the journey 🌻",
  "Positivity always wins 🦋",
];

const motivationalQuotes = [
  "Push yourself, because no one else is going to do it for you 🔥",
  "Great things never come from comfort zones ⚡",
  "Dream it. Wish it. Do it 🌟",
  "Success doesn’t come to you, you go to it 🏆",
  "Your only limit is your mind 🧠",
  "Don’t stop until you’re proud 🌟",
  "The harder you work for something, the greater you’ll feel when you achieve it 💯",
  "Work hard in silence, let success be your noise 🎯",
  "Doubt kills more dreams than failure ever will 🚪",
  "Don’t wait for opportunity, create it ✨",
];

const Home1 = () => {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("positive");

  // pick random quote based on category
  const getRandomQuote = (type = "positive") => {
    const data = type === "positive" ? positiveQuotes : motivationalQuotes;
    const random = data[Math.floor(Math.random() * data.length)];
    setQuote(random);
    setCategory(type);
  };

  useEffect(() => {
    getRandomQuote("positive"); // default category
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center -mt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          A Safe Space for Positivity & Growth
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Express freely, find balance, and take small steps toward better mental well-being.
        </p>

        {/* Quote Card */}
        <div className="mt-10 bg-white/80 backdrop-blur-md text-gray-900 px-8 py-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <p className="text-xl italic text-purple-700">
            💡 {category === "positive" ? "Positive Thought" : "Motivational Thought"} of the Day:
          </p>

          <p className="font-semibold mt-4 text-lg">"{quote}"</p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-6">
  <button
    onClick={() => getRandomQuote("positive")}
    className="px-5 py-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-medium rounded-lg shadow hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
  >
    🌸 Positive
  </button>

  <button
    onClick={() => getRandomQuote("motivational")}
    className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
  >
    🚀 Motivational
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Home1;
