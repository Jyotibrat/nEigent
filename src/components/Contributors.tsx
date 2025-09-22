import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface Contributor {
  name: string;
  role: string;
  github: string;
  avatar: string;
  contributions: string[];
  linkedin?: string;
  email?: string;
}

const Contributors: React.FC = () => {
  const contributors: Contributor[] = [
    {
      name: 'Bindupautra Jyotibrat',
      role: 'Lead Developer',
      github: 'https://github.com/Jyotibrat',
      linkedin: 'https://www.linkedin.com/in/bindupautra-jyotibrat/',
      avatar: '/assets/Jyotibrat.jpg',
      contributions: ['Project Architecture', 'n8n Workflow Design', 'Gemini Integration'],
    },
    {
      name: 'Kunal Kumar',
      role: 'Backend Developer',
      github: 'https://github.com/Kunalji01',
      linkedin: 'https://www.linkedin.com/in/kunal-kumar-54aa82251/',
      avatar: '/assets/kunal.jpg',
      contributions: ['Slack Integration', 'GitHub Scanner', 'Email System'],
    },
    {
      name: 'Sanjith Moos',
      role: 'Integration Specialist',
      github: 'https://github.com/imroot811',
      linkedin: 'https://www.linkedin.com/in/sanjith-moos-559517376/',
      avatar: '/assets/Moos.png',
      contributions: ['Discord Bot', 'Drive Pipeline', 'API Connections'],
    },
    {
      name: 'Mayank Agarwal',
      role: 'AI Specialist',
      github: 'https://github.com/mayankjhn',
      avatar: 'https://github.com/mayankjhn.png',
      linkedin: 'https://www.linkedin.com/in/mayankjhn/',
      contributions: ['Gemini Prompting', 'Content Analysis', 'ML Optimization'],

    },
    {
      name: 'Himanshu Kesarwani',
      role: 'Frontend Developer',
      github: 'https://github.com/HimanshuK21444',
      avatar: 'https://github.com/HimanshuK21444.png',
      contributions: ['Deployment', 'UI/UX', 'System Monitoring'],
    },
  ];

  return (
    <section id="contributors" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The talented developers behind nEigent's innovative security solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <img
                  src={contributor.avatar}
                  alt={`${contributor.name} avatar`}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{contributor.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{contributor.role}</p>

                <div className="flex justify-center space-x-3 mb-6">
                  <a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    aria-label={`${contributor.name}'s GitHub`}
                  >
                    <Github className="w-5 h-5 text-gray-300" />
                  </a>
                  {contributor.linkedin && (
                    <a
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                      aria-label={`${contributor.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-gray-300" />
                    </a>
                  )}
                  {contributor.email && (
                    <a
                      href={`mailto:${contributor.email}`}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                      aria-label={`Email ${contributor.name}`}
                    >
                      <Mail className="w-5 h-5 text-gray-300" />
                    </a>
                  )}
                </div>

                <div className="mb-4">
                  <div className="space-y-2">
                    {contributor.contributions.map((contribution, contribIndex) => (
                      <span
                        key={contribIndex}
                        className="inline-block px-3 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded-full mr-2 mb-2"
                      >
                        {contribution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Jyotibrat/nEigent/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>View all contributions on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contributors;