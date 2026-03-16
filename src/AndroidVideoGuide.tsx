import { ArrowLeft, Smartphone, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function AndroidVideoGuide() {
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
              <Smartphone className="w-6 h-6" /> Android Video Guide
            </h1>
            <p className="text-emerald-100 text-sm font-medium">Watch how to connect your device</p>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 mb-8 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
          <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full flex-shrink-0 animate-pulse">
            <PlayCircle className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Android Connecting Guide</h2>
            <p className="text-slate-600">
              Watch the video below to see the step-by-step process of connecting your Android device to the UMaT eduroam network.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 aspect-auto relative group">
          {/* Play button overlay (handled natively by most browsers, but good for custom styling if needed later) */}
          <video
            className="w-full h-full object-cover bg-slate-900"
            controls
            poster="/video-poster-android.jpg" // Optional placeholder
          >
            {/* Note: The video file needs to be placed in the public/ directory */}
            <source src="/android-guide.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/*<div className="mt-8 bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-600">
            <h3 className="font-bold text-slate-800 mb-2">Instructions for adding the video:</h3>
            <ol className="list-decimal list-inside space-y-2">
                <li>Place your video file in the <code>public/</code> directory strictly named <code>android-guide.mp4</code>.</li>
                <li>(Optional) Place a thumbnail image in the <code>public/</code> directory named <code>video-poster-android.jpg</code>.</li>
            </ol>
        </div>*/}

        {/* Footer actions */}
        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Main Setup Page
          </Link>
        </div>

      </main>
    </div>
  );
}

export default AndroidVideoGuide;
