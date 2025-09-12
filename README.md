<div align="center">

# nEigent8

*AI-Powered Data Leak Prevention Agent - Secure Your Digital Assets*

![last commit](https://img.shields.io/github/last-commit/Jyotibrat/nEigent8?style=flat-square&color=blue) ![TypeScript](https://img.shields.io/badge/TypeScript-95.1%25-blue?style=flat-square) ![JavaScript](https://img.shields.io/badge/JavaScript-4.9%25-yellow?style=flat-square) ![languages](https://img.shields.io/github/languages/count/Jyotibrat/nEigent8?style=flat-square&color=green)

Built with cutting-edge tools and technologies:

![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Vscode](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>


## Table of Contents

- [🚀 Overview](#-overview)
- [✨ Features](#-features)
- [🎯 Problem Statement](#-problem-statement)
- [💡 Solution](#-solution)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Getting Started](#-getting-started)
- [📋 Prerequisites](#-prerequisites)
- [⚙️ Installation](#️-installation)
- [🔧 Configuration](#-configuration)
- [📊 Monitoring Dashboard](#-monitoring-dashboard)
- [🎥 Demo](#-demo)
- [📄 License](#-license)
- [👥 Team](#-team)
- [🏆 Hackathon](#-hackathon)

## 🚀 Overview

**nEigent8** is an intelligent Data Leak Prevention (DLP) AI agent designed to protect organizations from sensitive data breaches across multiple platforms. Built for the HackSecure Hackathon, this project leverages n8n workflow automation to continuously monitor and analyze files across Discord, Slack, GitHub, and Google Drive for potential data leaks.

## ✨ Features

🔍 **Multi-Platform Scanning**
- Discord server monitoring
- Slack workspace analysis  
- GitHub repository scanning
- Google Drive file inspection

🤖 **AI-Powered Detection**
- Advanced pattern recognition for sensitive data
- Machine learning algorithms for anomaly detection
- Real-time threat assessment

📊 **Comprehensive Dashboard**
- Live monitoring interface
- Detailed analytics and reports
- Risk assessment metrics
- Historical data tracking

⚡ **Real-Time Alerts**
- Instant notifications for detected threats
- Customizable alert thresholds
- Multi-channel notification support

🔒 **Enterprise Security**
- End-to-end encryption
- Secure data processing
- Compliance-ready architecture

## 🎯 Problem Statement

In today's digital workspace, sensitive information is scattered across multiple platforms - from code repositories to chat applications. Organizations face significant challenges:

- **Data Sprawl**: Critical information exists across Discord servers, Slack workspaces, GitHub repos, and cloud storage
- **Human Error**: Employees accidentally share sensitive data like API keys, credentials, or confidential documents
- **Limited Visibility**: No centralized monitoring across all communication and storage platforms
- **Reactive Detection**: Most breaches are discovered after damage is done

## 💡 Solution

nEigent8 provides a proactive, AI-driven approach to data leak prevention:

🎯 **Centralized Monitoring**: Single dashboard for all your platforms
🧠 **Intelligent Detection**: AI algorithms trained to identify sensitive data patterns
⚡ **Real-Time Response**: Instant alerts and automated remediation options
📈 **Continuous Learning**: System improves detection accuracy over time

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Data Sources  │    │   n8n Workflows  │    │  AI Processing  │
│                 │    │                  │    │                 │
│ • Discord       │────│ • File Scanner   │────│ • Pattern Match │
│ • Slack         │    │ • Data Extractor │    │ • ML Analysis   │
│ • GitHub        │    │ • Alert Engine   │    │ • Risk Scoring  │
│ • Google Drive  │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Monitoring Dashboard                         │
│                                                                 │
│  📊 Analytics  │  🚨 Alerts  │  📋 Reports  │  ⚙️ Settings    │
└─────────────────────────────────────────────────────────────────┘
```

## 🛠️ Technologies Used

### **Backend & Automation**
- **n8n**: Workflow automation and orchestration
- **Node.js**: Server-side runtime environment

### **Frontend & UI**
- **React**: Modern UI framework for the dashboard
- **HTML5 & CSS3**: Structure and styling
- **JavaScript**: Interactive functionality

### **Infrastructure & Deployment**
- **Vercel**: Frontend deployment and hosting

### **Development Tools**
- **VS Code**: Primary development environment
- **Git**: Version control and collaboration

## 🚀 Getting Started

Follow these steps to set up nEigent8 on [n8n.io](https://n8n.io/).

### 📋 Prerequisites

- **Node.js** (v16 or higher)
- **Git** (latest version)

### ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jyotibrat/nEigent8.git
   cd nEigent8
   ```
   
   or 

   Install the JSON Workflow

   [Click Here to Download](https://drive.google.com/uc?export=download&id=1_TOAskw3ss4Y6KGPhuN-SqzomQ3_lGfV)

2. **Make Account on n8n and copy paste the JSON file or Click on Import from File**
   
3. **Set up Configurations for the Workflow**
   
4. **Use these resources for configurations**
   - Google Config: [Click to View Video](https://youtube.com/shorts/d5I08v-GviE?si=4NVC2UbowBQNgNAP)
   - Discord Config: [Click to View Video](https://youtu.be/u_NSPbOclqY?si=beoPmMBA2CcKqltz)
   - Slack Config: [Click to View Video](https://youtu.be/xNZUk1Oo30A?si=YkB6u7i4O-Xb5ZYX)
   - GitHub Config: [Click to View Video](https://youtu.be/nOJGkHYpRmI?si=SVQBPGe5qltctxSM)

5. **Click on Execute Workflow to run the DLP automation**
   
6. **Check Mail for Data Leak Reports**

### Dashboard Features

- **📊 Analytics**: View scan statistics and trends
- **🚨 Active Alerts**: Monitor ongoing threats
- **📋 Scan History**: Review past detections
- **⚙️ Configuration**: Manage settings and rules

## 🔧 Configuration

### Required Environment Variables

- Google Client ID
- Google Client Secret
- Discord Bot Token
- Discord Channel ID
- GitHub Username
- GitHub Repository Name
- GitHub Token (classic)
- Slack Bot Token
- Slack Channel ID

## 📊 Monitoring Dashboard

The nEigent8 dashboard provides comprehensive visibility into your data security:

### Key Metrics
- **Total Scans**: Number of files/messages scanned
- **Threats Detected**: Count of potential data leaks found
- **Risk Score**: Overall security assessment
- **Platform Coverage**: Active monitoring across platforms

### Alert Management
- **Real-time Notifications**: Instant alerts for high-risk detections
- **Alert Prioritization**: Categorized by severity (Low, Medium, High, Critical)
- **Response Actions**: Quick remediation options
- **False Positive Management**: Mark and learn from incorrect detections

## 🎥 Demo

🎬 **Watch the Demo**: [nEigent8 in Action](https://youtu.be/FOyjmtEQIdw?si=hpVkQZF4FN82fby_)

🌐 **Official Website**: [n-eigent8.vercel.app](https://n-eigent8.vercel.app/)

Experience nEigent8's capabilities through our interactive demo showcasing:
- Real-time threat detection across multiple platforms
- Dashboard analytics and reporting features  
- Alert management and response workflows
- Configuration and customization options

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

<div align="center">
  <a href="https://github.com/Jyotibrat">
    <img src="./public/assets/Jyotibrat.jpg" alt="Bindupautra Jyotibrat" style="border-radius: 50%; margin: 5px; width: 100px; height: 100px;">
  </a>
  <a href="https://github.com/imroot811">
    <img src="./public/assets/Moos.png" alt="Sanjith Moos" style="border-radius: 50%; margin: 5px; width: 100px; height: 100px;">
  </a>
  <a href="https://github.com/mayankjhn">
    <img src="https://github.com/mayankjhn.png" alt="Mayank Agarwal" style="border-radius: 50%; margin: 5px; width: 100px; height: 100px;">
  </a>
  <a href="https://github.com/HimanshuK21444">
    <img src="https://github.com/HimanshuK21444.png" alt="Himanshu Kesarwani" style="border-radius: 50%; margin: 5px; width: 100px; height: 100px;">
  </a>
  <a href="https://github.com/Kunalji01">
    <img src="./public/assets/kunal.jpg" alt="Kunal Kumar" style="border-radius: 50%; margin: 5px; width: 100px; height: 100px;">
  </a>
</div>

**Project Lead**: [Jyotibrat](https://github.com/Jyotibrat)

Connect with us:
- 🐙 GitHub: [github.com/Jyotibrat/nEigent8](https://github.com/Jyotibrat/nEigent8)
- 🌐 Website: [n-eigent8.vercel.app](https://n-eigent8.vercel.app/)
- 🎥 Demo Video: [YouTube](https://youtu.be/FOyjmtEQIdw?si=hpVkQZF4FN82fby_)
- ✉️ Mail: [bjyotibrat@gmail.com](mailto:bjyotibrat@gmail.com)

## 🏆 Hackathon

**HackSecure Hackathon Project**

nEigent8 was developed as part of the HackSecure Hackathon, focusing on innovative cybersecurity solutions. This project demonstrates the power of AI-driven automation in preventing data leaks and securing digital assets across multiple platforms.

### Hackathon Goals Achieved ✅
- ✅ Multi-platform data monitoring
- ✅ AI-powered threat detection  
- ✅ Real-time alerting system
- ✅ User-friendly dashboard
- ✅ Scalable architecture
- ✅ Comprehensive documentation

---

<div align="center">

**🔒 Secure Your Data. Protect Your Future. 🔒**

*Made for a safer digital world*

[⭐ Star this repository](https://github.com/Jyotibrat/nEigent8) | [🐛 Report Bug](https://github.com/Jyotibrat/nEigent8/issues)

</div>