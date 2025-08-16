import React, { useState, useEffect } from "react";

const positiveQuotes = [
  "You are stronger than you think 💪",
  "Every day is a fresh start 🌸",
  "Your feelings are valid 🌈",
  "Healing takes time, and that's okay 💙",
  "Small steps lead to big changes ✨",
];

const Home1 = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Random quote generator
    const randomIndex = Math.floor(Math.random() * positiveQuotes.length);
    setQuote(positiveQuotes[randomIndex]);
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Hero section */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center -mt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          A Safe Space for Positivity & Growth
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
         Express freely, find balance, and take small steps toward better mental well-being.
        </p>

        {/* Positive Quote Section */}
        <div className="mt-8 bg-purple-100 text-purple-800 px-6 py-4 rounded-xl shadow">
          <p className="text-lg italic">💡 Positive Thought of the Day:</p>
          <p className="font-semibold mt-2">{quote}</p>
        </div>

      </div>
    </div>
  );
};

export default Home1;
