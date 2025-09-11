import React from 'react';
import { ExternalLink, MessageSquare, Github, HardDrive } from 'lucide-react';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See nEigent8 in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how our AI DLP agent detects and prevents secret leaks across multiple platforms
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl mb-12">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/FOyjmtEQIdw"
                title="nEigent8 Demo Video"
                className="w-full h-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-700 rounded-xl p-8 shadow-lg border border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <Github className="w-6 h-6 text-gray-300" />
                <HardDrive className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-platform Sources</h3>
              <p className="text-gray-300">
                Monitors uploads across Discord, Slack, GitHub repositories, and Google Drive with seamless integration
              </p>
            </div>

            <div className="bg-gray-700 rounded-xl p-8 shadow-lg border border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <span className="text-xl font-bold text-purple-600">AI</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Gemini Analysis</h3>
              <p className="text-gray-300">
                Advanced AI processes content through structured JSON analysis for precise secret detection
              </p>
            </div>

            <div className="bg-gray-700 rounded-xl p-8 shadow-lg border border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Alerts</h3>
              <p className="text-gray-300">
                Instant email notifications with masked sensitive keys to protect while informing
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://github.com/Jyotibrat/nEigent8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;