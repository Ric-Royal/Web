// src/pages/Portfolio.tsx

import React from 'react';

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const projects: Project[] = [
//   {
    // title: 'Customer Churn Prediction Model',
    // description:
    //   'Developed a predictive model that significantly reduced churn rates by 20% for a major ISP in Kenya. By identifying at-risk customers and providing actionable insights, this model empowered the company to improve customer retention strategies, leading to measurable business growth.',
    // image: '/images/churn-prediction.jpg', // Replace with your image path
    // link: '#', // Replace with your project link if available
//   },
  {
    title: 'Data Warehouse Implementation',
    description:
      'Led the design and implementation of a comprehensive data warehouse for a leading financial institution. This project streamlined data management and accessibility, enabling the institution to efficiently consolidate and utilize its data, resulting in more accurate and timely business decisions.',
    image: 'images/data-warehouse.jpg',
    link: 'https://medium.com/@Ric_Royal/understanding-data-warehouses-exploring-data-structures-and-indexing-methods-f713f783f78a?source=user_profile_page---------4-------------2bfb597f684a---------------',
  },
  {
    title: 'AI-Driven Decision Making Research',
    description:
      'Presented research on AI-driven decision-making at international conferences, focusing on how AI and machine learning can be integrated into business processes to enhance operational efficiency and drive strategic innovation.',
    image: 'images/ai-research.jpg',
    link: 'https://medium.com/@Ric_Royal/data-driven-decision-making-in-aml-cft-cpf-a-case-study-of-kenya-b9f38b38c187?source=user_profile_page---------0-------------2bfb597f684a---------------',
  },
  {
    title: 'Machine Learning-Based Solutions',
    description:
      'Built machine learning models to optimize marketing campaigns and designed algorithms for financial forecasting. These solutions have helped businesses across various sectors to predict trends, automate processes, and make data-driven decisions.',
    image: 'images/ml-solutions.jpg',
    link: 'https://github.com/Ric-Royal/Code-Concepts/tree/main/Code',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
      <p className="text-lg leading-relaxed mb-12 text-center">
        Over the years, I’ve worked on a variety of projects that showcase my expertise in data science, machine learning, analytics, data management, risk analytics. My portfolio reflects a broad range of experiences, from predictive modeling to data infrastructure implementation, and highlights how data-driven solutions can transform organizations.
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-base leading-relaxed text-gray-300 mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-purple-500 hover:text-purple-400 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
