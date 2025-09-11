import React from 'react';
import { Play, Download, Shield, Zap, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {/* Animated particles - respectful of prefers-reduced-motion */}
          <div className="motion-reduce:hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              nEigent8
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
              AI DLP Agent for real-time secret leak prevention
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('demo')}
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1_TOAskw3ss4Y6KGPhuN-SqzomQ3_lGfV"
              download
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 border border-white/20"
            >
              <Download className="w-5 h-5" />
              <span>Get Workflow JSON</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Monitoring</h3>
              <p className="text-blue-200 text-sm">
                Continuously scans Discord, Slack, GitHub, and Drive uploads
              </p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <Eye className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Context-aware Detection</h3>
              <p className="text-blue-200 text-sm">
                Gemini AI analyzes content for secrets with advanced understanding
              </p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Low-noise Alerts</h3>
              <p className="text-blue-200 text-sm">
                Smart filtering reduces false positives with masked key notifications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 motion-reduce:hidden">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;