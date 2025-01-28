import React, { useState } from 'react';

const Journey = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');

  // Function to open the popup and set the description
  const openPopup = (step) => {
    const descriptions = {
      School: 'I completed my schooling in 2019, where I scored 73% in my 12th grade in Science.',

      College: 'I completed my B.Sc. General degree in 2022 with a 66.20% from a government college (MDU Rohtak). I was honored to be the top student in my class, which earned me a scholarship along with a monetary reward. I actively participated in various exhibitions, where I was awarded certificates for my contributions. My college experience enriched my knowledge and practical skills.',

      Institute: 'In June 2024, I successfully completed a Diploma in Web Development and Web Designing from NIIT Institute, affiliated with NIIT, Delhi, where I scored 79% marks and earned certificates for my achievements. During the course, I gained hands-on experience and honed my skills in web development, which have been instrumental in shaping my technical expertise.',

      Internship: 'After completing my studies, I undertook a 2-month remote unpaid internship with Zidio Dev, where I had the opportunity to work in a collaborative team environment. During this internship, I developed new skills and explored MERN stack development, which significantly increased my interest in the technology. As a top performer, I received both monetary rewards and a certificate for my contributions. I worked on two major projects: a real-time chat application and a feedback collection system, both of which were team-based projects. These experiences allowed me to apply my skills practically and enhance my understanding of full-stack development.',

      Current: 'I am currently focused on enhancing my skills and continuously learning new technologies while actively applying them to real-world projects. Alongside development, I am also preparing for Data Structures and Algorithms (DSA) using JavaScript to strengthen my problem-solving abilities. I am seeking a job opportunity where I can contribute my expertise, collaborate with a dynamic team, and continue growing as a developer. My goal is to work in an environment that fosters learning, innovation, and teamwork, allowing me to make a meaningful impact while advancing my career.',
    };

    setCurrentDescription(descriptions[step]);
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
    setCurrentDescription(''); // Reset the description
  };

  return (
    <div className="text-center absolute">
      <h2 className="text-4xl font-bold my-8 text-white">Journey</h2>

      <div className="relative max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

        <div className="relative flex flex-col items-center space-y-10">
          {["School", "College", "Institute", "Internship", "Current"].map((step, index) => (
            <div key={index} className="flex items-center w-full">
              <div className="flex flex-col items-center justify-center w-1/2 text-right pr-4">
                {index % 2 === 0 && (
                  <h3
                    className="text-lg font-semibold text-gray-800 cursor-pointer"
                    onClick={() => openPopup(step)} // Pass the step name to openPopup
                  >
                    {step}
                  </h3>
                )}
              </div>

              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full border-4 border-white shadow-md">
                {index + 1}
              </div>

              <div className="flex flex-col items-center justify-center w-1/2 text-left pl-4">
                {index % 2 !== 0 && (
                  <h3
                    className="text-lg font-semibold text-gray-800 cursor-pointer"
                    onClick={() => openPopup(step)} // Pass the step name to openPopup
                  >
                    {step}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup model */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
          onClick={closePopup} 
        >
          <div
            className="bg-white text-gray-800 p-4 rounded-lg w-1/3"
            onClick={(e) => e.stopPropagation()} 
          >
            <p className="mt-4">{currentDescription}</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journey;
