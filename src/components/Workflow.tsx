import React from 'react';
import { ArrowRight, Upload, Scan, AlertTriangle, Mail } from 'lucide-react';

const Workflow: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: 'File Upload Detection',
      description: 'Monitors Discord, Slack, GitHub, and Drive for new file uploads',
      color: 'bg-blue-500',
    },
    {
      icon: Scan,
      title: 'AI Content Analysis',
      description: 'Gemini AI scans content using structured prompts for secret patterns',
      color: 'bg-purple-500',
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Evaluates findings and categorizes severity levels with context',
      color: 'bg-orange-500',
    },
    {
      icon: Mail,
      title: 'Alert Notification',
      description: 'Sends masked alerts via email to the user with actionable details',
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How nEigent Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A streamlined workflow that transforms file uploads into actionable security intelligence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.color} rounded-2xl mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-8 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-500 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Visual workflow diagram */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 border-2 border-dashed border-gray-600">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">n8n Workflow Canvas</h3>
            <div className="bg-gray-700 rounded-xl p-6 shadow-inner">
              <img
                src="/assets/n8n workflow.png"
                alt="n8n Workflow Visualization"
                className="w-full h-auto max-h-[600px] object-contain rounded-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-400 text-center mt-4">
                Interactive n8n workflow showing the complete automation pipeline
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workflow;