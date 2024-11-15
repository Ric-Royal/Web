// src/pages/About.tsx

import React, { useState } from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

      {/* Introduction Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hi, I’m <span className="font-bold">Richard K</span>, a passionate data professional with over five years of experience in the industry. My career is rooted in transforming complex data into actionable insights, helping organizations optimize their operations, drive growth, and make data-driven decisions.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I specialize in areas such as data analysis, machine learning, and predictive modeling, leveraging these skills to solve real-world problems in sectors like telecommunications, finance, and security.
        </p>
        <p className="text-lg leading-relaxed">
          Outside of work, I enjoy mentoring upcoming data professionals and contributing to the global conversation on data science through presentations and publications. I’m also passionate about continuing education, particularly in artificial intelligence and machine learning.
        </p>
      </section>

      <hr className="border-t border-gray-700 mb-10" />

      {/* Professional Journey Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Professional Journey</h2>
        <Timeline />
      </section>

      <hr className="border-t border-gray-700 mb-10" />

      {/* Education & Certifications Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Education & Certifications</h2>
        <EducationAccordion />
      </section>
    </div>
  );
};

export default About;

/* Timeline Component */
const Timeline: React.FC = () => {
  const experiences = [
    {
      title: 'Financial (AML) Analyst',
      company: 'Financial Reporting Centre, Nairobi',
      duration: 'Dec 2021 - Present',
      responsibilities: [
        'Developed risk-based monitoring systems, ensuring adherence to AML laws and regulations and improvement in risk mitigation measures.',
        'Employed information extraction techniques and advanced analytics, including anomaly detection, for identifying and investigating suspicious activities, reducing the time taken to review and assign reports to analysts.',
        'Actively monitored accounts to detect suspicious activity, leading necessary analyses and investigations.',
        'Created automated processes using predictive models for monitoring and detecting unusual patterns, enhancing risk management efficiency.',
        'Authored and revised AML policies and guidelines, ensuring compliance with regulatory requirements.',
        'Developed AML/CFT policies and guidelines, leading to a 37% increase in registered entities with the Centre.',
        'Analyzed data meticulously to pinpoint and scrutinize high-risk suspicious reports and transactions.',
        'Conducted procurement fraud identification and support document verification.',
        'Promoted change management for the adoption of new technologies for risk management and anomaly detection.',
        'Introduced natural language processing into the analysis process for handling complex text data.',
        'Experienced in tax evasion detection, comprehensive reporting, and financial record analysis.',
        'Developed dashboards using Power BI for monitoring performance indicators.',
      ],
    },
    {
      title: 'Analyst',
      company: 'Milago Human Resource Company, Nairobi',
      duration: 'Jan 2020 - Nov 2021',
      responsibilities: [
        'Collaborated with teams to resolve data issues, achieving a 13% increase in data accuracy.',
        'Undertook ad-hoc operational analysis, delivering insights that enhanced efficiency and led to cost savings.',
        'Analyzed and visualized extensive network-related datasets, contributing to a 6% rise in actionable reports.',
      ],
    },
    {
      title: 'Data Analyst – Operations',
      company: 'Ahadi Wireless, Nairobi',
      duration: 'Aug 2019 - Dec 2019',
      responsibilities: [
        'Conducted a comprehensive survey to estimate household numbers and evaluate building conditions.',
        'Analyzed data to provide insights for introducing affordable internet services to the community.',
        'Utilized Power BI for data visualization and presented findings to stakeholders.',
        'Executed geo-spatial analysis to understand demographics and infrastructure.',
      ],
    },
    {
      title: 'Engineering Operations Intern',
      company: 'Ahadi Wireless, Nairobi',
      duration: 'May 2019 - Jul 2019',
      responsibilities: [
        'Developed a system for managing equipment and tool inventory.',
        'Contributed to setting up the company’s first wireless network infrastructure.',
        'Ensured smooth internet connectivity and prompt resolution of connectivity issues.',
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="border-l-2 border-purple-500 absolute h-full left-4 top-0"></div>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 pl-8 relative">
          <div className="absolute left-[-0.6rem] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
          <p className="text-lg text-gray-500 mb-2">
            {exp.duration} | {exp.company}
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed">
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

/* EducationAccordion Component */
const EducationAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const education = [
    {
      degree: 'Master of Science in Data Science and Analytics',
      institution: 'Strathmore University',
      details: 'Focused on advanced data analytics, machine learning, and big data technologies.',
    },
    {
      degree: 'Bachelor of Science in Industrial Mathematics',
      institution: 'Jomo Kenyatta University of Agriculture and Technology',
      details: 'Specialized in statistical modeling, operational research, and applied mathematics.',
    },
    {
      degree: 'Certificate in Data Science',
      institution: 'Moringa School',
      details: 'Intensive program covering data analysis, visualization, and introductory machine learning.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 border border-gray-700 rounded">
          <button
            className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 focus:outline-none flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold">
              {edu.degree} - {edu.institution}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 bg-gray-900">
              <p className="text-base leading-relaxed">{edu.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};