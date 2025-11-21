import React from 'react';
import {
  Zap,
  BarChart3,
  Globe,
  Layers,
  Cpu,
  Shield,
  Menu,
  X,
  Instagram,
  Twitter,
  ArrowRight,
  CheckCircle2,
  Users,
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  GraduationCap
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">

      {/* --- Ambient Background Glows --- */}
      {/* Top Center Blue/Purple Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* --- Navigation --- */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-[#111]/30 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 w-full max-w-5xl flex items-center justify-between shadow-2xl shadow-black/50">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Andrew Ang</span>
          </div>

          {/* Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Ang-Andrew" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/andrewang1" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative z-10 flex flex-col items-center justify-center pt-48 pb-32 px-4 text-center">

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Software Engineer
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Building high-performance<br />
          systems at scale.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          Specializing in AI Platforms, Observability, and FPGA-based ultra-low-latency solutions.
          Currently driving innovation at Canva.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="#experience" className="bg-white text-black hover:bg-neutral-200 px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2">
            View Experience <ArrowRight className="w-4 h-4" />
          </a>

          <a href="https://github.com/Ang-Andrew" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all">
            GitHub Profile
          </a>
        </div>
      </header>

      {/* --- Experience Section (Bento Style) --- */}
      <section id="experience" className="relative z-10 max-w-5xl mx-auto px-4 pb-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="text-blue-500 text-3xl font-bold font-mono flex items-center">
            &gt;<span className="inline-block w-[4px] h-8 bg-blue-500 ml-2 animate-cursor-blink"></span>
          </div>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">

          {/* Canva */}
          <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 flex items-center justify-center">
                  <Zap className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Canva</h3>
                  <p className="text-blue-400 font-medium">Senior Software Engineer</p>
                </div>
              </div>
              <span className="text-neutral-500 mt-2 md:mt-0">2022 - Present</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              AI Platforms and Observability for 240 million monthly active users. Reduced AI inference latency by 33% with $500K GPU cost savings.
              Led migration to in-house observability platform achieving $10M annual savings, scaling to 300M+ timeseries/sec across 400+ services.
            </p>
          </div>

          {/* Arista Networks */}
          <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 flex items-center justify-center">
                  <Cpu className="text-purple-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Arista Networks</h3>
                  <p className="text-purple-400 font-medium">Senior Software Engineer</p>
                </div>
              </div>
              <span className="text-neutral-500 mt-2 md:mt-0">2019 - 2022</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              FPGA-based ultra-low-latency solutions for APAC financial clients. Architected SwitchApp achieving 94ns forwarding latency on 7130 series.
              Engineered MetaMux ethernet aggregation with 39ns average latency for high-frequency trading. Led MetaProtect firewall development.
            </p>
          </div>

          {/* Dosec Designs */}
          <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/5 flex items-center justify-center">
                  <Shield className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dosec Designs</h3>
                  <p className="text-emerald-400 font-medium">Hardware Design Engineer</p>
                </div>
              </div>
              <span className="text-neutral-500 mt-2 md:mt-0">2018 - 2019</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Development of hardware and software IoT solutions for Australian farms.
            </p>
          </div>

          {/* ikeGPS */}
          <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/5 flex items-center justify-center">
                  <Globe className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">ikeGPS</h3>
                  <p className="text-orange-400 font-medium">Engineering Intern</p>
                </div>
              </div>
              <span className="text-neutral-500 mt-2 md:mt-0">2015 - 2016</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Research and Development for existing ikeGPS solutions.
            </p>
          </div>

        </div>
      </section>

      {/* --- Education Section --- */}
      <section id="education" className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <GraduationCap className="text-blue-500 w-6 h-6" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Masters */}
          <div className="bg-white/5 border border-white/5 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-2">Master of Engineering</h3>
            <p className="text-blue-400 mb-4">Victoria University of Wellington</p>
            <p className="text-neutral-400 text-sm">Distinction. Development of an Open PXIe System based on FPGA Modules.</p>
            <p className="text-neutral-500 text-xs mt-4">2016 - 2017</p>
          </div>

          {/* Bachelors */}
          <div className="bg-white/5 border border-white/5 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-2">Bachelor of Engineering</h3>
            <p className="text-blue-400 mb-4">Victoria University of Wellington</p>
            <p className="text-neutral-400 text-sm">Honours.</p>
            <p className="text-neutral-500 text-xs mt-4">2013 - 2016</p>
          </div>
        </div>
      </section>

      {/* --- Final CTA / Footer --- */}
      <section id="contact" className="relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-white/5 to-black border border-white/10 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">

          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/20 blur-[100px] pointer-events-none" />

          <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold tracking-wider mb-6 border border-blue-500/20">
            GET IN TOUCH
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's work together
          </h2>

          <p className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Interested in my work or have a project in mind? Feel free to reach out.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:andrewang321@gmail.com" className="bg-white text-black hover:bg-neutral-200 px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/andrewang1" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/10 bg-transparent hover:bg-white/5 text-white font-medium transition-all flex items-center justify-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

        </div>
      </section>

      {/* --- Simple Footer --- */}
      <footer className="relative z-10 max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 border-t border-white/5 mt-10">

        <div className="mb-4 md:mb-0 flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
            <Code2 className="text-white w-3 h-3" />
          </div>
          <span className="font-bold text-white text-lg">Andrew Ang</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Ang-Andrew" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/andrewang1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="mt-4 md:mt-0 text-right">
          <p className="text-neutral-500">© {new Date().getFullYear()} Andrew Ang. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
