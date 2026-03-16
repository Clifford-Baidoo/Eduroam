import { Monitor, Globe, Search, Download, User, Settings, CheckCircle2, ShieldCheck, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function WindowsGuide() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-umat-green selection:text-white pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-b-[3rem] shadow-xl overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10 flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="bg-white/10 hover:bg-white/20 transition-all p-2 rounded-xl backdrop-blur-sm text-white group">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Monitor className="w-6 h-6" /> Windows Setup Guide
            </h1>
            <p className="text-blue-100 text-sm font-medium">Step-by-step visual instructions</p>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 mb-8 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full flex-shrink-0">
            <Monitor className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Connecting your Windows Device</h2>
            <p className="text-slate-600">
              Follow these images carefully to securely configure your Windows laptop or PC for the UMaT eduroam network. Ensure you have your <strong>username@umat.edu.gh</strong> credentials ready.
            </p>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="space-y-12 relative">

          {/* Connecting Line */}
          <div className="absolute top-8 bottom-8 left-[27px] md:left-1/2 md:-translate-x-px w-0.5 bg-blue-200 -z-10 hidden md:block"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/windows-step1.jpg" alt="Download eduroam installer" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">1</div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" /> Download Installer
                </h3>
                <p className="text-slate-600 mb-4">
                  Open any web browser and visit <strong>https://cat.eduroam.org</strong>. Click on the button to download your eduroam installer and search for <strong>University of Mines and Technology</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-start">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/windows-step2.jpg" alt="Run Installer as Administrator" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pr-8 md:pl-0 text-left md:text-right">
              <div className="absolute left-0 md:left-auto md:-right-[20px] top-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">2</div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 md:ml-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2 md:justify-end">
                  <Download className="w-5 h-5 text-blue-600" /> Run the Installer
                </h3>
                <p className="text-slate-600 mb-4">
                  Locate the downloaded file (e.g., <strong>eduroam-W10-UMaT-EDUROAM.exe</strong>) in your Downloads folder. Right-click on it and select <strong>Run as administrator</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/windows-step3.jpg" alt="Complete Installation Wizard" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">3</div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" /> Complete Installation
                </h3>
                <p className="text-slate-600 mb-4">
                  Follow the setup wizard by clicking <strong>Next</strong>. Make sure to read and accept the terms of use presented during the installation process.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-start">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/windows-step4.jpg" alt="Enter Credentials" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pr-8 md:pl-0 text-left md:text-right">
              <div className="absolute left-0 md:left-auto md:-right-[20px] top-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">4</div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 md:ml-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2 md:justify-end">
                  <User className="w-5 h-5 text-blue-600" /> Enter Credentials
                </h3>
                <p className="text-slate-600 mb-3 md:text-left">
                  A window will pop up prompting for your details. Enter your full academic email address (<strong>username@umat.edu.gh</strong>) and password. Click <strong>Install</strong> or <strong>OK</strong> to proceed.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/windows-step5.jpg" alt="Connect Automatically" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">5</div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" /> Connect Automatically
                </h3>
                <p className="text-slate-600 mb-4">
                  Once the installation completes, the eduroam profile is saved in your system. Whenever you are in range of the campus network, Windows will connect to <strong>eduroam</strong> automatically. Check your Wi-Fi system tray icon to verify the connection.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="mt-16 text-center">
          <Link to="/" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Main Setup Page
          </Link>
        </div>

      </main>
    </div>
  );
}

export default WindowsGuide;
