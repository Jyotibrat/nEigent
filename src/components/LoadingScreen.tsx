import React from 'react';
import { Shield, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="w-20 h-20 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">nEigent</h1>
        <p className="text-blue-200 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          Initializing AI DLP Agent...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;