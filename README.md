# Eduroam Documentation Hub

**Modern, responsive documentation site for eduroam setup, troubleshooting & best practices**

This project aims to become a clean, user-friendly web-based guide for students, staff and IT teams who need to connect to **eduroam** networks — especially in universities across Ghana, Africa and worldwide.

Built with:  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## 🎯 Current Status

Early development / skeleton stage  
→ Currently a basic Vite + React + TypeScript + Tailwind starter  
→ Planned content: eduroam connection guides, common issues & fixes, certificate explanations, mobile & laptop configuration walkthroughs, Ghana-specific tips, etc.

## ✨ Planned Features

- Step-by-step connection guides (Windows, macOS, Linux, Android, iOS)
- Explanation of EAP methods (PEAP-MSCHAPv2, TTLS, TLS)
- How to handle certificate validation & trust issues
- Anonymous outer identity best practices
- Troubleshooting (wrong password, certificate expired, VLAN restrictions, etc.)
- University-specific settings (University of Mines and Technology, UG, KNUST, UCC, etc.)
- Dark/light mode support
- Searchable FAQ section
- Printable PDF cheat-sheets (future)

## 🚀 Quick Start (Development)

```bash
# 1. Clone the repo
git clone https://github.com/Clifford-Baidoo/Eduroam.git
cd Eduroam

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → open http://localhost:5173
