import { Apple, Globe, Search, Download, User, Settings, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function IosGuide() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-umat-green selection:text-white pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-br from-slate-700 to-slate-900 rounded-b-[3rem] shadow-xl overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-slate-600 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10 flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="bg-white/10 hover:bg-white/20 transition-all p-2 rounded-xl backdrop-blur-sm text-white group">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Apple className="w-6 h-6" /> iOS Setup Guide
            </h1>
            <p className="text-slate-300 text-sm font-medium">Step-by-step visual instructions</p>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 mb-8 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
          <div className="bg-slate-100 text-slate-700 p-4 rounded-full flex-shrink-0">
            <Apple className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Connecting your iOS Device</h2>
            <p className="text-slate-600">
              Follow these images carefully to securely configure your iPhone or iPad for the UMaT eduroam network. Ensure you have your <strong>username@umat.edu.gh</strong> credentials ready.
            </p>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="space-y-12 relative">

          {/* Connecting Line */}
          <div className="absolute top-8 bottom-8 left-[27px] md:left-1/2 md:-translate-x-px w-0.5 bg-slate-200 -z-10 hidden md:block"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/ios-step1.jpg" alt="Visit eduroam CAT website" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">1</div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-slate-600" /> Visit eduroam CAT
                </h3>
                <p className="text-slate-600 mb-4">
                  Open <strong>Safari</strong> on your device and navigate to <strong>https://cat.eduroam.org</strong>. Tap the button that says "Click here to download your EDUROAM installer".
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-start">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/ios-step2.jpg" alt="Find University of Mines and Technology" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pr-8 md:pl-0 text-left md:text-right">
              <div className="absolute left-0 md:left-auto md:-right-[20px] top-6 w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">2</div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 md:ml-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2 md:justify-end">
                  <Search className="w-5 h-5 text-slate-600" /> Find Your University
                </h3>
                <p className="text-slate-600 mb-4">
                  Use the search box to find <strong>"University of Mines and Technology"</strong>. Tap on the correct entry once it appears in the list.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/ios-step3.jpg" alt="Download Profile" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">3</div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5 text-slate-600" /> Download Profile
                </h3>
                <p className="text-slate-600 mb-4">
                  Tap the <strong>iOS download</strong> option. Wait for the "Profile Downloaded" pop-up message to appear, indicating the configuration file has been saved.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-start">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/ios-step4.jpg" alt="Install Profile in Settings" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pr-8 md:pl-0 text-left md:text-right">
              <div className="absolute left-0 md:left-auto md:-right-[20px] top-6 w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">4</div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 md:ml-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2 md:justify-end">
                  <Settings className="w-5 h-5 text-slate-600" /> Install the Profile
                </h3>
                <p className="text-slate-600 mb-3 md:text-left">
                  Open your iPhone's <strong>Settings</strong> app. Navigate to <strong>General → VPN & Device Management</strong>. Select the downloaded eduroam profile and tap <strong>Install</strong> in the top right corner.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/ios-step5.jpg" alt="Enter Credentials and Connect" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">5</div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-slate-600" /> Enter Credentials & Connect
                </h3>
                <p className="text-slate-600 mb-4">
                  During installation, you will be prompted to enter your username (<strong>username@umat.edu.gh</strong>) and password. Make sure to enter them correctly.
                </p>
                <div className="bg-white rounded-xl p-3 text-sm flex items-start gap-2 text-slate-500 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  Once installed, your device will automatically connect to eduroam whenever you are on campus. You can verify this in <strong>Settings → Wi-Fi</strong>.
                </div>
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

export default IosGuide;
