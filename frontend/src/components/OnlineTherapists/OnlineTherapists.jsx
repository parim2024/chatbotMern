import React from "react";
import Navbar from "../navbar/Navbar"; // make sure the path is correct

const therapists = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialty: "Clinical Psychologist",
    experience: "8 years",
    rating: 4.9,
    price: "₹1200/session",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    specialty: "Relationship Counselor",
    experience: "6 years",
    rating: 4.8,
    price: "₹1000/session",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 3,
    name: "Dr. Priya Verma",
    specialty: "Child Psychologist",
    experience: "5 years",
    rating: 4.7,
    price: "₹1100/session",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Dr. Karan Singh",
    specialty: "Cognitive Behavioral Therapist",
    experience: "7 years",
    rating: 4.8,
    price: "₹1300/session",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Dr. Meera Joshi",
    specialty: "Stress Management",
    experience: "9 years",
    rating: 4.9,
    price: "₹1250/session",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 6,
    name: "Dr. Arjun Kapoor",
    specialty: "Marriage Counselor",
    experience: "10 years",
    rating: 4.6,
    price: "₹1400/session",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

export default function OnlineTherapists() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Spacer to avoid overlap if Navbar is fixed */}
      <div className="mt-18 px-6">
        {/* Line separator */}
        <hr className="border-gray-300 mb-6" />

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Book Best Online Therapists Session
        </h1>

        {/* Therapist cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition"
            >
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-center text-gray-800">
                {therapist.name}
              </h2>
              <p className="text-center text-gray-600">{therapist.specialty}</p>
              <p className="text-center text-gray-500">
                {therapist.experience} experience
              </p>
              <p className="text-center text-yellow-600 font-medium">
                ⭐ {therapist.rating}
              </p>
              <p className="text-center text-green-700 font-semibold mt-2">
                {therapist.price}
              </p>
              <button
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition"
                onClick={() =>
                  alert("This is a static demo. Booking not available.")
                }
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




