import React from 'react';
import Navbar from '../navbar/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <section className="mt-[5rem] min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
        <div className="text-center p-10 rounded-xl shadow-lg bg-white/90 backdrop-blur-md max-w-2xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-700">
            Hi! I&apos;m <span className="font-semibold text-gray-900">Paridhi Mittal</span>, a passionate full-stack developer specializing in MERN stack development. I enjoy building interactive and user-friendly web applications, solving complex problems, and continuously learning new technologies.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This project is a testament to my skills in React, Node.js, Express, MongoDB, and modern frontend design using Tailwind CSS. I&apos;m committed to creating clean, efficient, and maintainable code.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Always eager to explore new challenges and push the boundaries of web development!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
