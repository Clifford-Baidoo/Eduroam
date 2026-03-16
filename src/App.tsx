import React from 'react';
import { Wifi, Phone, Lock, MonitorPlay, Image as ImageIcon, ExternalLink, ArrowRight, ShieldCheck, Smartphone, Apple, Monitor, Play, Search, Download, Settings, User, CheckCircle2, ChevronRight, Check, Globe, Italic } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-umat-green selection:text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-umat-green to-emerald-900 rounded-b-[4rem] shadow-2xl overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-umat-yellow opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <Wifi className="w-8 h-8 text-umat-green" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-emerald tracking-tight">UMaT Eduroam</h1>
            <p className="text-emerald-300 text-sm font-medium">Helpdesk Support</p>
          </div>
        </div>

        <a
          href="https://umat.edu.gh"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 transition-all py-2 px-4 rounded-full backdrop-blur-sm text-sm font-medium border border-white/20"
        >
          Back to Main Site <ExternalLink className="w-4 h-4" />
        </a>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 relative z-10 flex-grow pb-24">

        {/* Intro Card */}
        <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-8 md:p-12 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60"></div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
              Connect to <span className="text-umat-green">eduroam</span> Setup
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light">
              Follow these simple steps to securely connect your devices to the University of Mines and Technology eduroam network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prerequisites */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Prerequisites</h3>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-umat-green flex-shrink-0 mt-0.5" />
                  <span>Your eduroam login from UMaT Email: <strong className="text-slate-800">username@umat.edu.gh</strong></span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-umat-green flex-shrink-0 mt-0.5" />
                  <span>Wi-Fi or mobile data required for initial setup</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-umat-green flex-shrink-0 mt-0.5" />
                  <span>Google Play Store access to install the eduroam CAT app</span>
                </li>
              </ul>
            </div>

            {/* Set Password */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Set Your Password</h3>
              </div>
              <ol className="list-decimal list-inside space-y-3 text-slate-600 mb-8 flex-grow">
                <li>Click the button below to set your password</li>
                <li>When prompted, click <strong className="text-slate-800">"Forgot Password"</strong></li>
                <li>Enter your UMaT email <strong className="text-slate-800">username@umat.edu.gh</strong></li>
                <li>Check your email and change the password</li>
              </ol>

              <a
                href="https://selfservice.umat.edu.gh:8443/realms/umat/account/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex justify-center py-4 px-6 border border-transparent text-sm font-bold rounded-xl text-white bg-umat-green hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-umat-green shadow-lg hover:shadow-emerald-500/30 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                Set Password Now
              </a>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800">Setup Guides</h3>
            <p className="text-slate-500 mt-3 text-lg">Detailed instructions for connecting your specific device.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Android Setup */}
            <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">Android Setup</h4>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-medium transition-colors backdrop-blur-sm">
                    <MonitorPlay className="w-3.5 h-3.5" /> Video Guide
                  </a>
                  <Link to="/android-guide" className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-medium transition-colors backdrop-blur-sm">
                    <ImageIcon className="w-3.5 h-3.5" /> Picture Guide
                  </Link>
                </div>
              </div>

              <div className="p-6 space-y-6 flex-grow">
                {/* Step 1 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-emerald-500 mt-1"><Play className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Install the <span className="text-emerald-600">eduroam CAT</span> App</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Search className="w-4 h-4 text-emerald-600" /> Open <strong className="text-slate-800">Google Play Store</strong>
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-emerald-600" /> Search for "eduroam CAT" or "geteduroam"
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Download className="w-4 h-4 text-emerald-600" /> Download and install the app
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-emerald-500 mt-1"><Settings className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Configure eduroam Using the App</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Smartphone className="w-4 h-4 text-emerald-600" /> Launch the <strong className="text-slate-800">eduroam CAT</strong> app
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Search className="w-4 h-4 text-emerald-600" /> Search for <strong className="text-slate-800">University of Mines and Technology</strong>
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-emerald-600" /> Tap the university name and accept the Agreement
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-emerald-600" /> Username: <strong className="text-slate-800">username@umat.edu.gh</strong>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-emerald-600" /> Password: [your password]
                      </div>
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-emerald-600" /> Tap <strong className="text-slate-800">Log in</strong> to continue
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-emerald-500 mt-1"><Wifi className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Connect to <span className="text-emerald-600">eduroam</span></div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Settings className="w-4 h-4 text-emerald-600" /> Go to <strong className="text-slate-800">Settings → Wi-Fi</strong>
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Wifi className="w-4 h-4 text-emerald-600" /> Select <strong className="text-slate-800">eduroam</strong> from the list
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Your phone should connect automatically
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* iOS Setup */}
            <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Apple className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">iOS Setup</h4>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-medium transition-colors backdrop-blur-sm">
                    <MonitorPlay className="w-3.5 h-3.5" /> Video Guide
                  </a>
                  <a href="#" className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-medium transition-colors backdrop-blur-sm">
                    <ImageIcon className="w-3.5 h-3.5" /> Picture Guide
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-6 flex-grow">
                {/* Step 1 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-slate-600 mt-1"><Globe className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Visit the eduroam CAT Website</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      Open <strong className="text-slate-800">Safari</strong> or any browser
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex flex-col gap-1 text-slate-600 overflow-hidden">
                      <span className="flex items-center gap-2"><ExternalLink className="w-4 h-4 text-slate-500" /> Go to:</span>
                      <strong className="text-slate-800 break-all ml-6">https://cat.eduroam.org</strong>
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-slate-500" /> Tap "Click here to download your EDUROAM installer"
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-slate-600 mt-1"><Search className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Find Your University</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      Search for <strong className="text-slate-800">University of Mines and Technology</strong>. Tap once it appears
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-slate-600 mt-1"><Download className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Download and Install Profile</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Download className="w-4 h-4 text-slate-500" /> Tap the <strong className="text-slate-800">iOS download</strong> option
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-slate-500" /> Wait for "Profile Downloaded" message
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Settings className="w-4 h-4 text-slate-500" /> Go to <strong className="text-slate-800">Settings → General → VPN & Device Management</strong>
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      Tap the downloaded eduroam profile
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Check className="w-4 h-4 text-slate-500" /> Tap <strong className="text-slate-800">Install</strong> (top right) and confirm
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-slate-600 mt-1"><User className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Enter Your Credentials</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-slate-500" /> Username: <strong className="text-slate-800">username@umat.edu.gh</strong>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-slate-500" /> Password: [your password]
                      </div>
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-slate-500" /> Tap <strong className="text-slate-800">Log in</strong> to continue
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-slate-600 mt-1"><Wifi className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Connect to eduroam</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Settings className="w-4 h-4 text-slate-500" /> Go to <strong className="text-slate-800">Settings → Wi-Fi</strong>
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Wifi className="w-4 h-4 text-slate-500" /> Select <strong className="text-slate-800">eduroam</strong> from the list
                    </div>
                    <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-slate-500" /> Your device should connect automatically
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Windows Setup */}
            <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">Windows Setup</h4>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-medium transition-colors backdrop-blur-sm">
                    <MonitorPlay className="w-3.5 h-3.5" /> Video Guide
                  </a>
                  <a href="#" className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-medium transition-colors backdrop-blur-sm">
                    <ImageIcon className="w-3.5 h-3.5" /> Picture Guide
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-6 flex-grow">
                {/* Step 1 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-blue-600 mt-1"><Globe className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Download eduroam Installer</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      Open any browser and visit:
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex flex-col gap-1 text-slate-600 overflow-hidden">
                      <strong className="text-slate-800 break-all">https://cat.eduroam.org</strong>
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-blue-500" /> Click "Download your eduroam installer"
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Search className="w-4 h-4 text-blue-500" /> Search for <strong className="text-slate-800">University of Mines and Technology</strong>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-blue-600 mt-1"><Download className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Run the Installer</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      Locate <strong className="text-slate-800">eduroam-W10-UMaT-EDUROAM.exe</strong> in Downloads
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-blue-500" /> Right-click → <strong className="text-slate-800">Run as administrator</strong>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-blue-600 mt-1"><Settings className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Complete Installation</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Check className="w-4 h-4 text-blue-500" /> Click through setup wizard (accept all prompts)
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Check className="w-4 h-4 text-blue-500" /> Accept terms of use
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-blue-600 mt-1"><User className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Enter Credentials</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-blue-500" /> Username: <strong className="text-slate-800">username@umat.edu.gh</strong>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-blue-500" /> Password: [your password]
                      </div>
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <Check className="w-4 h-4 text-blue-500" /> Click <strong className="text-slate-800">Install</strong> to continue
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-blue-600 mt-1"><Wifi className="w-5 h-5" /></div>
                    <div className="font-semibold text-slate-800">Connect Automatically</div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> Installation completes automatically
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm flex items-center gap-2 text-slate-600">
                      eduroam will auto-connect (check system tray)
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 mt-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-6 h-6 text-umat-green" />
              <span className="text-white font-bold text-xl">UMaT Eduroam</span>
            </div>
            <p className="text-sm border-l-2 border-umat-green pl-3 max-w-sm">
              Providing secure, world-wide roaming access service for the international research and education community.
            </p>
          </div>
          <div className="md:text-right">
            <h5 className="text-white font-semibold mb-4">Need Help?</h5>
            <div className="flex flex-col md:items-end space-y-2">
              <a href="mailto:support@umat.edu.gh" className="hover:text-white transition-colors flex items-center gap-2 justify-end w-max">
                support@umat.edu.gh
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+233 (0) 3123 20323</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-sm text-center">
          <p>© {new Date().getFullYear()} University of Mines and Technology. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
