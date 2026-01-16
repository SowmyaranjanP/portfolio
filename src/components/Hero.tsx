import { ArrowDown, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl font-bold border-4 border-white/20 shadow-2xl mx-auto">
              PS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Padhi Sowmyaranjan
          </h1>

          <p className="text-2xl md:text-3xl mb-6 text-blue-100 font-light">
            Multi Cloud / DevSecOps Engineer
          </p>

          <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto leading-relaxed">
            6+ years of experience in CI/CD automation, multi-cloud environments,
            and Kubernetes-based deployments. Passionate about building secure,
            scalable, and intelligent infrastructure solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com/in/padhi-sowmyaranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/padhi-sowmyaranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:rintu1418@gmail.com"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-50">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(+91) 79813 92029</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-white/80" />
        </button>
      </div>
    </section>
  );
}
