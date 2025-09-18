// src/pages/Portfolio.tsx

import React from 'react';

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'MediMesh - HIPAA-Compliant Medical Data Platform',
    description:
      'Developed a comprehensive medical data management system with enterprise-grade security. Features include role-based access control, field-level encryption, Keycloak authentication, and microservices architecture. Built with React, Node.js, PostgreSQL, and Docker orchestration for 16+ services.',
    image: 'images/hero-background.jpg',
    link: 'https://github.com/Ric-Royal/MediMesh---Update',
  },
  {
    title: 'CIVILBOT - AI-Powered Legislative Assistant',
    description:
      'Created an intelligent WhatsApp bot for civic engagement using NLP and knowledge graphs. Features multi-language support, real-time bill tracking, and automated notifications. Integrates Neo4j, Ollama AI, and Twilio for comprehensive public participation in legislative processes.',
    image: 'images/ai-research.jpg',
    link: 'https://github.com/Ric-Royal/Public-Participation',
  },
  {
    title: 'AML Graph Network Analysis with LLM',
    description:
      'Built an advanced money laundering detection system using graph network analysis and large language models. Features interactive visualization, suspicious transaction pattern detection, and natural language analysis powered by Ollama. Includes comprehensive network metrics and automated reporting.',
    image: 'images/data-warehouse.jpg',
    link: 'https://github.com/Ric-Royal/AML-Graph-Network-Analysis-with-LLM',
  },
  {
    title: 'Agri-Insights - Agricultural Market Analytics Platform',
    description:
      'Developed a comprehensive agricultural market analytics platform with ML-powered price predictions, weather impact analysis, and real-time commodity monitoring. Features interactive dashboards, seasonal pattern detection, and trading volume analysis using FastAPI, PostgreSQL, and React.',
    image: 'images/ml-solutions.jpg',
    link: 'https://github.com/Ric-Royal/saas/tree/main/services',
  },
  {
    title: 'Advanced Algorithmic Trading System',
    description:
      'Created multiple sophisticated trading bots with GPT-4 integration, including momentum, mean reversion, and news-based strategies. Features comprehensive risk management, MetaTrader 5 integration, multi-timeframe analysis, and real-time performance tracking with emergency safety protocols.',
    image: 'images/hero-background.jpg',
    link: 'https://github.com/Ric-Royal/single_tweak_bot',
  },
  {
    title: 'SaaS Microservices Platform',
    description:
      'Architected a complete enterprise SaaS platform with 5 interconnected services for civic engagement, agricultural insights, and content management. Features Docker/Kubernetes orchestration, advanced monitoring with Prometheus/Grafana, and comprehensive security hardening.',
    image: 'images/data-warehouse.jpg',
    link: 'https://github.com/Ric-Royal/saas',
  },
  {
    title: 'Machine Learning Code Concepts Repository',
    description:
      'Comprehensive collection of ML solutions including anomaly detection, credit risk modeling, time series analysis, and NLP text classification. Features documented Jupyter notebooks, Streamlit applications, and production-ready implementations across multiple industries.',
    image: 'images/ml-solutions.jpg',
    link: 'https://github.com/Ric-Royal/Code-Concepts/tree/main/Code',
  },
  {
    title: 'Task Tracker with Smart Notifications',
    description:
      'Built a modern task management application with SMS notifications via Twilio. Features priority levels, status tracking, automatic scheduling, responsive web interface, and comprehensive logging. Includes real-time notifications and phone number validation.',
    image: 'images/ai-research.jpg',
    link: 'https://github.com/Ric-Royal/tasktracker',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
      <p className="text-lg leading-relaxed mb-12 text-center">
        My portfolio showcases expertise across multiple domains including healthcare technology, civic engagement platforms, agricultural analytics, financial systems, and AI-powered solutions. From HIPAA-compliant medical platforms to sophisticated trading algorithms and government transparency tools, these projects demonstrate my ability to architect scalable, secure, and impactful solutions that drive real-world change.
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