import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">n8n</span>
              </div>
              <span className="text-xl font-bold">nEigent</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered Data Loss Prevention agent that monitors file uploads across multiple platforms 
              and prevents secret leaks with intelligent analysis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jyotibrat/nEigent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:bjyotibrat@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email Us"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#demo" className="hover:text-white transition-colors duration-200">
                  Watch Demo
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors duration-200">
                  Workflow
                </a>
              </li>
              <li>
                <a href="#contributors" className="hover:text-white transition-colors duration-200">
                  Contributors
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors duration-200">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/assets/workflow.json"
                  download
                  className="hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Workflow JSON</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="/assets/presentation.pdf"
                  download
                  className="hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Documentation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  About n8n
                </a>
              </li>
              <li>
                <a
                  href="https://ai.google.dev/gemini-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Gemini API
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <p>&copy; 2025 nEigent Team. All rights reserved.</p>
              <p>Licensed under MIT License</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;