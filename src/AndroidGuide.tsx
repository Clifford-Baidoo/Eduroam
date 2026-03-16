import { ShieldCheck, Smartphone, Search, Download, User, CheckCircle2, ArrowLeft, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

function AndroidGuide() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-umat-green selection:text-white pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-br from-emerald-600 to-green-700 rounded-b-[3rem] shadow-xl overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-emerald-400 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10 flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="bg-white/10 hover:bg-white/20 transition-all p-2 rounded-xl backdrop-blur-sm text-white group">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Smartphone className="w-6 h-6" /> Android Setup Guide
            </h1>
            <p className="text-emerald-100 text-sm font-medium">Step-by-step visual instructions</p>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 mb-8 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
          <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full flex-shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Connecting your Android Device</h2>
            <p className="text-slate-600">
              Follow these images carefully to securely configure your Android phone or tablet for the UMaT eduroam network. Ensure you have your <strong>username@umat.edu.gh</strong> credentials ready.
            </p>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="space-y-12 relative">

          {/* Connecting Line */}
          <div className="absolute top-8 bottom-8 left-[27px] md:left-1/2 md:-translate-x-px w-0.5 bg-emerald-100 -z-10 hidden md:block"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/step1.jpg" alt="Search for geteduroam in Play Store" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">1</div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5 text-emerald-600" /> Search for the App
                </h3>
                <p className="text-slate-600 mb-4">
                  Open the <strong>Google Play Store</strong> on your device and use the search bar to look for <strong>"geteduroam"</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-start">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/step2.jpg" alt="Install geteduroam app" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pr-8 md:pl-0 text-left md:text-right">
              <div className="absolute left-0 md:left-auto md:-right-[20px] top-6 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">2</div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 md:ml-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2 md:justify-end">
                  <Download className="w-5 h-5 text-emerald-600" /> Install the App
                </h3>
                <p className="text-slate-600 mb-4">
                  Locate the correct app published by <strong>SURF B.V.</strong> and tap the <strong>Install</strong> button to download it.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/step3.jpg" alt="Search for your organization" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">3</div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-emerald-600" /> Find Your Organization
                </h3>
                <p className="text-slate-600 mb-4">
                  Launch the app. Tap the search bar provided to begin searching for your institution's profile.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-start">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/step4.jpg" alt="University of Mines and Technology selected" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pr-8 md:pl-0 text-left md:text-right">
              <div className="absolute left-0 md:left-auto md:-right-[20px] top-6 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">4</div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 md:ml-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2 md:justify-end">
                  <Search className="w-5 h-5 text-emerald-600" /> Select UMaT
                </h3>
                <p className="text-slate-600 mb-3 md:text-left">
                  Carefully type <strong>"University of Mines and Technology"</strong> in the search entry. Tap the resulting entry that appears below it.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex md:justify-end">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 max-w-sm w-full transform transition hover:scale-[1.02]">
                <img src="/step5.jpg" alt="Accept Terms and Connect" className="rounded-xl w-full object-cover" />
              </div>
            </div>

            <div className="md:w-1/2 relative pl-12 md:pl-8">
              <div className="absolute left-0 md:-left-[20px] top-6 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50 z-10">5</div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-600" /> Connect and Authenticate
                </h3>
                <p className="text-slate-600 mb-4">
                  Tap <strong>Agree</strong> to the Terms of Use when prompted. Then, enter your full UMaT email address and password, and tap <strong>Connect</strong>.
                </p>
                <div className="bg-white rounded-xl p-3 text-sm flex items-start gap-2 text-slate-500 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  Your device should now securely connect to eduroam automatically.
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

export default AndroidGuide;
