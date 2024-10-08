// src/pages/Resume.tsx

import React from 'react';
import { FaDownload, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';


const Resume: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={`${process.env.PUBLIC_URL}/images/path-to-your-photo.jpg`} // Replace with the actual path to your profile picture
            alt="Richard K"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold mb-2 text-white">Richard K</h1>
        <p className="text-xl text-gray-300">
          Business Analyst | Data Analyst | Machine Learning - Data Scientist | Operations Research | Risk Analyst
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="mailto:richardkabiru6@gmail.com" className="text-gray-300 hover:text-white">
            <FaEnvelope size={24} />
          </a>
          <a href="tel:+254728436981" className="text-gray-300 hover:text-white">
            <FaPhoneAlt size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-k-8a6128135/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Ric-Royal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-200">
          Hi, I’m Richard K, a passionate data professional with over five years of experience in the industry. My career is rooted in transforming complex data into actionable insights, helping organizations optimize their operations, drive growth, and make data-driven decisions.
        </p>
        <p className="text-gray-200 mt-4">
          I specialize in areas such as data analysis, machine learning, and predictive modeling, leveraging these skills to solve real-world problems in sectors like telecommunications, finance, and security.
        </p>
        <p className="text-gray-200 mt-4">
          Outside of work, I enjoy mentoring upcoming data professionals and contributing to the global conversation on data science through presentations and publications. I’m also passionate about continuing education, particularly in artificial intelligence and machine learning.
        </p>
      </section>

      {/* Download Resume */}
      <div className="text-center mb-12">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </a>
      </div>

      {/* Professional Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-purple-600 inline-block text-white">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {/* Job 1 */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Financial (AML) Analyst</h3>
            <p className="text-gray-300">Financial Reporting Centre, Nairobi | Dec 2021 - Present</p>
            <ul className="list-disc list-inside mt-4 text-gray-200 space-y-2">
              <li>
                Developed risk-based monitoring systems, ensuring adherence to AML laws and regulations and improvement in risk mitigation measures.
              </li>
              <li>
                Employed information extraction techniques and advanced analytics, including anomaly detection, for identifying and investigating suspicious activities, reducing the time taken to review and assign reports to analysts.
              </li>
              <li>
                Actively monitored accounts to detect suspicious activity, leading necessary analyses and investigations.
              </li>
              <li>
                Created automated processes using predictive models for monitoring and detecting unusual patterns, enhancing risk management efficiency.
              </li>
              <li>
                Authored and revised AML policies and guidelines, ensuring compliance with regulatory requirements.
              </li>
              <li>
                Developed AML/CFT policies and guidelines, leading to a 37% increase in registered entities with the Centre.
              </li>
              <li>
                Analyzed data meticulously to pinpoint and scrutinize high-risk suspicious reports and transactions.
              </li>
              <li>
                Conducted procurement fraud identification and support document verification.
              </li>
              <li>
                Promoted change management for the adoption of new technologies for risk management and anomaly detection.
              </li>
              <li>
                Introduced natural language processing into the analysis process for handling complex text data.
              </li>
              <li>
                Experienced in tax evasion detection, comprehensive reporting, and financial record analysis.
              </li>
              <li>
                Developed dashboards using Power BI for monitoring performance indicators.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Analyst</h3>
            <p className="text-gray-300">Milago Human Resource Company, Nairobi | Jan 2020 - Nov 2021</p>
            <ul className="list-disc list-inside mt-4 text-gray-200 space-y-2">
              <li>
                Collaborated with teams to resolve data issues, achieving a 13% increase in data accuracy.
              </li>
              <li>
                Undertook ad-hoc operational analysis, delivering insights that enhanced efficiency and led to cost savings.
              </li>
              <li>
                Analyzed and visualized extensive network-related datasets, contributing to a 6% rise in actionable reports.
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Data Analyst – Operations</h3>
            <p className="text-gray-300">Ahadi Wireless, Nairobi | Aug 2019 - Dec 2019</p>
            <ul className="list-disc list-inside mt-4 text-gray-200 space-y-2">
              <li>
                Conducted a comprehensive survey to estimate household numbers and evaluate building conditions.
              </li>
              <li>
                Analyzed data to provide insights for introducing affordable internet services to the community.
              </li>
              <li>
                Utilized Power BI for data visualization and presented findings to stakeholders.
              </li>
              <li>
                Executed geo-spatial analysis to understand demographics and infrastructure.
              </li>
            </ul>
          </div>

          {/* Job 4 */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Engineering Operations Intern</h3>
            <p className="text-gray-300">Ahadi Wireless, Nairobi | May 2019 - Jul 2019</p>
            <ul className="list-disc list-inside mt-4 text-gray-200 space-y-2">
              <li>
                Developed a system for managing equipment and tool inventory.
              </li>
              <li>
                Contributed to setting up the company’s first wireless network infrastructure.
              </li>
              <li>
                Ensured smooth internet connectivity and prompt resolution of connectivity issues.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-purple-600 inline-block text-white">
          Education & Certifications
        </h2>
        <div className="space-y-12">
          {/* Education 1 */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Master of Science in Data Science and Analytics</h3>
            <p className="text-gray-300">Strathmore University (2022 - 2025)</p>
          </div>
          {/* Education 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Bachelor of Science in Industrial Mathematics</h3>
            <p className="text-gray-300">Jomo Kenyatta University of Agriculture and Technology (2015 - 2019)</p>
          </div>
          {/* Certification */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Certificate in Data Science</h3>
            <p className="text-gray-300">Moringa School (2021) </p>
            <p className="text-gray-200 mt-2">
              Intensive program covering data analysis, visualization, and introductory machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-300 mt-12">
        <p>&copy; {new Date().getFullYear()} Richard K. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;
