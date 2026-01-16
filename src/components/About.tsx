import { Cloud, Shield, Code, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Expert',
      description: 'Proficient in AWS, Azure, and Oracle Cloud infrastructure',
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'SOC 2, ISO 27001 compliance and CIS hardening expertise',
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Terraform, Kubernetes, and Docker orchestration',
    },
    {
      icon: Zap,
      title: 'CI/CD Automation',
      description: '40% reduction in deployment failures through automation',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-12"></div>

          <div className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate DevOps Engineer with over 6 years of hands-on experience transforming
              how organizations build, deploy, and secure their cloud infrastructure. My journey has
              been driven by a commitment to excellence in automation, security, and reliability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Throughout my career, I've had the privilege of working with cutting-edge technologies
              across AWS, Azure, and Oracle Cloud platforms. I specialize in creating robust CI/CD
              pipelines, implementing Infrastructure as Code, and ensuring production systems meet
              the highest security and compliance standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently exploring emerging technologies in MLOps and LLMOps, I'm driven by the vision
              of building intelligent, automated, and data-driven infrastructure solutions that empower
              teams to innovate faster while maintaining security and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
