import React from 'react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-purple-500 absolute h-full left-4 top-0"></div>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 pl-8 relative">
          <div className="absolute left-[-0.6rem] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
          <h3 className="text-2xl font-bold mb-1 text-white">{exp.title}</h3>
          <p className="text-lg text-gray-400 mb-2">
            {exp.duration} | {exp.company}
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-300">
            {exp.responsibilities.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 