import React from 'react';
import { Server, Cloud, Zap, Shield } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">System Architecture</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on n8n automation platform with Gemini AI for scalable, reliable secret detection
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-gray-600">
            <img
              src="/assets/System Arch.png"
              alt="nEigent Architecture Diagram"
              className="w-full h-auto max-h-[600px] object-contain rounded-xl mb-8"
              loading="lazy"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-900 rounded-xl">
                <Server className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">n8n Platform</h3>
                <p className="text-sm text-gray-300">Workflow automation engine</p>
              </div>
              
              <div className="text-center p-4 bg-purple-900 rounded-xl">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Gemini AI</h3>
                <p className="text-sm text-gray-300">Advanced content analysis</p>
              </div>
              
              <div className="text-center p-4 bg-green-900 rounded-xl">
                <Cloud className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Multi-platform</h3>
                <p className="text-sm text-gray-300">Discord, Slack, GitHub, Drive</p>
              </div>
              
              <div className="text-center p-4 bg-orange-900 rounded-xl">
                <Shield className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Email Alerts</h3>
                <p className="text-sm text-gray-300">Secure notification system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;