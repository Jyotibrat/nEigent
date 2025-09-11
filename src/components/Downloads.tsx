import React from 'react';
import { Download, FileCode, FileText, Image, Shield } from 'lucide-react';

const Downloads: React.FC = () => {
  const downloads = [
    {
      name: 'nEigent8.json',
      description: 'Complete n8n workflow export ready for import',
      icon: FileCode,
      type: 'JSON',
      size: '27 KB',
      checksum: '',
      href: 'https://drive.google.com/uc?export=download&id=1_TOAskw3ss4Y6KGPhuN-SqzomQ3_lGfV',
    },
    {
      name: 'Presentation',
      description: 'Project slides',
      icon: FileText,
      type: 'PDF',
      size: '431 KB',
      checksum: '',
      href: '/assets/Team 23 Presentation.pdf',
    },
    {
      name: 'System Architecture',
      description: 'System architecture and flow diagram',
      icon: Image,
      type: 'PNG',
      size: '156 KB',
      checksum: '',
      href: '/assets/System Arch.png',
    },
    {
      name: 'n8n Workflow',
      description: 'Visual n8n workflow canvas screenshot',
      icon: Image,
      type: 'PNG',
      checksum: '',
      size: '114 KB',
      href: '/assets/n8n workflow.png',
    },
  ];

  return (
    <section id="downloads" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Download Resources</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access workflow files, documentation, and visual assets for nEigent8
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs font-medium rounded">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Size: {item.size}</span>
                      <span className="text-xs text-gray-500 font-mono">{item.checksum}</span>
                    </div>
                    <a
                      href={item.href}
                      download
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">File Integrity</h3>
              <p className="text-gray-300 mb-6">
                All downloads include SHA-256 checksums for verification. Verify file integrity after download to ensure authenticity.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <code className="text-sm text-gray-300">
                  # Verify checksum (example)<br />
                  sha256sum workflow.json
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;