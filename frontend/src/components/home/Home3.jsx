import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const features = [
  {
    name: "Mental Health Assessment",
    description:
      "Check your mental wellbeing with a quick and confidential assessment.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Write Personal Journals",
    description:
      "Track your mood and thoughts in a secure, private journal for self-reflection.",
    icon: LockClosedIcon,
  },
  {
    name: "1:1 Chat with AI Therapist",
    description:
      "Get 24/7 support from an AI therapist to manage your mental health.",
    icon: ArrowPathIcon,
  },
  {
    name: "Share Stories",
    description:
      "Post your experiences anonymously, inspire others, and build a supportive community.",
    icon: FingerPrintIcon,
  },
];

const Home3 = () => {
  return (
    <div className="relative bg-gradient-to-tr from-blue-50 via-white to-indigo-50">
      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 opacity-50"></div>

      {/* Features Section */}
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unlocking well-being excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A website to keep track of your mental health, write journals,
              share stories anonymously and get a personalized result based on
              your quiz.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-md">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-800">🌸 MindSpace</h2>
              <p className="text-sm text-gray-600 mt-2">
                Building a safe and supportive mental health community.
              </p>
            </div>

            {/* Middle Links */}
            <div className="flex gap-6 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-indigo-600">About</a>
              <a href="#" className="hover:text-indigo-600">Features</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </div>

            {/* Right Social Icons */}
            <div className="flex gap-4 mt-6 md:mt-0 text-gray-600 text-xl">
              <a href="#" className="hover:text-indigo-600"><FaTwitter /></a>
              <a href="#" className="hover:text-indigo-600"><FaInstagram /></a>
              <a href="#" className="hover:text-indigo-600"><FaLinkedin /></a>
              <a href="#" className="hover:text-indigo-600"><FaGithub /></a>
            </div>
          </div>

          {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
  © {new Date().getFullYear()} MindSpace. All rights reserved.
  <br />
  <span className="text-gray-700">Made with ❤️ by <span className="font-semibold">Paridhi Mittal</span></span>
</div>
        </div>
      </footer>
    </div>
  );
};

export default Home3;
