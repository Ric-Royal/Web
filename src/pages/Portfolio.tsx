// src/pages/Portfolio.tsx

import React from 'react';

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  isPrivate?: boolean;
  outcome: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: 'MediMesh - HIPAA-Compliant Medical Data Platform',
    description:
      'Enterprise medical data management system with comprehensive security and compliance features.',
    outcome: '98% system completion with full HIPAA compliance, supporting 3 user roles (Doctor, Nurse, Admin) with comprehensive audit trails and field-level encryption.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Keycloak', 'Redis'],
    image: 'images/hero-background.jpg',
    link: 'https://github.com/Ric-Royal/MediMesh---Update',
    isPrivate: true,
  },
  {
    title: 'CIVILBOT - AI-Powered Legislative Assistant',
    description:
      'Intelligent WhatsApp bot for civic engagement using NLP and knowledge graphs for real-time bill tracking.',
    outcome: 'Multi-language support (English/Swahili/French), automated bill parsing, and comprehensive citizen engagement platform with real-time notifications.',
    techStack: ['Neo4j', 'Ollama AI', 'Twilio', 'FastAPI', 'PostgreSQL'],
    image: 'images/ai-research.jpg',
    link: 'https://github.com/Ric-Royal/Public-Participation',
  },
  {
    title: 'AML Graph Network Analysis with LLM',
    description:
      'Advanced money laundering detection system using graph network analysis and large language models.',
    outcome: 'Interactive visualization with suspicious transaction pattern detection, automated network metrics analysis, and comprehensive compliance reporting for financial institutions.',
    techStack: ['NetworkX', 'Ollama', 'Streamlit', 'PyVis', 'Python'],
    image: 'images/data-warehouse.jpg',
    link: 'https://github.com/Ric-Royal/AML-Graph-Network-Analysis-with-LLM',
  },
  {
    title: 'Agri-Insights - Agricultural Market Analytics Platform',
    description:
      'Comprehensive agricultural market analytics platform with ML-powered price predictions and weather impact analysis.',
    outcome: 'Real-time commodity monitoring with seasonal pattern detection, interactive dashboards for informed farming decisions, and weather correlation tracking.',
    techStack: ['FastAPI', 'PostgreSQL', 'React', 'ML Models', 'Redis'],
    image: 'images/ml-solutions.jpg',
    link: 'https://github.com/Ric-Royal/saas/tree/main/services',
  },
  {
    title: 'Advanced Algorithmic Trading System',
    description:
      'Sophisticated trading bots with GPT-4 integration, featuring multiple strategies and comprehensive risk management.',
    outcome: 'Improved win rates from 11.1% to 50-65% through emergency fixes and proper risk management (5.5x ATR stops). Real-time performance tracking with emergency safety protocols.',
    techStack: ['Python', 'MetaTrader 5', 'GPT-4', 'Multi-timeframe Analysis'],
    image: 'images/hero-background.jpg',
    link: 'https://github.com/Ric-Royal/single_tweak_bot',
    isPrivate: true,
  },
  {
    title: 'SaaS Microservices Platform',
    description:
      'Complete enterprise SaaS platform with 5 interconnected services for civic engagement and content management.',
    outcome: 'Full Docker/Kubernetes orchestration, advanced monitoring with Prometheus/Grafana, comprehensive security hardening, and scalable microservices architecture.',
    techStack: ['Microservices', 'Docker', 'Kubernetes', 'FastAPI', 'MongoDB'],
    image: 'images/data-warehouse.jpg',
    link: 'https://github.com/Ric-Royal/saas',
  },
  {
    title: 'Machine Learning Code Concepts Repository',
    description:
      'Comprehensive collection of ML solutions spanning multiple industries with production-ready implementations.',
    outcome: 'Documented Jupyter notebooks, Streamlit applications, and implementations across finance, telecommunications, and security sectors. Includes anomaly detection, credit risk modeling, and NLP classification.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Jupyter'],
    image: 'images/ml-solutions.jpg',
    link: 'https://github.com/Ric-Royal/Code-Concepts/tree/main/Code',
  },
  {
    title: 'Task Tracker with Smart Notifications',
    description:
      'Modern task management application with SMS notifications and comprehensive tracking capabilities.',
    outcome: 'Automated 15-minute check intervals, responsive web interface, comprehensive logging for improved productivity, and real-time SMS notifications via Twilio.',
    techStack: ['Node.js', 'SQLite', 'Twilio', 'Express', 'JavaScript'],
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
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500"
          >
            {project.image && (
              <div className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} - Project interface screenshot`}
                  className="w-full h-48 object-cover"
                />
                {project.isPrivate && (
                  <div className="absolute top-3 right-3 bg-yellow-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Private Repository
                  </div>
                )}
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-white">{project.title}</h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Outcomes Section */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Key Outcomes</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} ${project.isPrivate ? 'related code' : 'source code'} on GitHub`}
                  >
                    {project.isPrivate ? 'View Related Work' : 'View Code'} &rarr;
                  </a>
                )}
                <a
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white font-semibold rounded-md transition-colors duration-200"
                  aria-label={`Discuss ${project.title} project details`}
                >
                  Discuss Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced Call to Action Section */}
      <div className="mt-16 bg-gradient-to-r from-purple-900 to-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build Something Amazing?</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
          I specialize in developing scalable, secure solutions across healthcare, fintech, civic tech, and AI/ML domains. 
          From HIPAA-compliant medical platforms to sophisticated trading algorithms, let's discuss how I can help bring your vision to life.
        </p>
        
        {/* Services Offered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
          <div className="text-center">
            <div className="text-purple-400 font-semibold">Healthcare Tech</div>
            <div className="text-gray-400">HIPAA Compliance</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-semibold">FinTech Solutions</div>
            <div className="text-gray-400">AML & Trading Systems</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-semibold">AI/ML Integration</div>
            <div className="text-gray-400">LLM & Analytics</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-semibold">Enterprise SaaS</div>
            <div className="text-gray-400">Microservices</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            aria-label="Contact Richard to start your project"
          >
            Start Your Project
          </a>
          <a
            href="/resume"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white font-bold rounded-full transition-colors duration-300"
            aria-label="Download Richard's resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;