import { Server, Shield, Zap, Cloud } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: typeof Server;
  impact: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Multi-Region Cloud Infrastructure',
      description:
        'Designed and deployed a resilient multi-region OCI infrastructure with VCN peering, Site-to-Site VPN, and automated failover mechanisms ensuring high availability across geographic locations.',
      technologies: ['OCI', 'Terraform', 'VPN', 'Load Balancers'],
      icon: Cloud,
      impact: '99.9% uptime achieved',
    },
    {
      title: 'Automated CI/CD Pipeline Framework',
      description:
        'Built enterprise-grade CI/CD pipelines integrating security scanning (SonarQube, Trivy), automated testing, and deployment strategies across AWS and Azure, reducing release failures by 40%.',
      technologies: ['AWS CodePipeline', 'Azure DevOps', 'Jenkins', 'Docker'],
      icon: Zap,
      impact: '40% reduction in failures',
    },
    {
      title: 'Security Compliance & Hardening',
      description:
        'Led comprehensive security initiatives including SOC 2 Type II audits, ISO 27001 compliance, and CIS Benchmark hardening across cloud infrastructure, achieving 82% compliance score.',
      technologies: ['CIS Benchmarks', 'AWS Inspector', 'Nessus', 'IAM'],
      icon: Shield,
      impact: '82% compliance achieved',
    },
    {
      title: 'Kubernetes-Based Microservices Platform',
      description:
        'Architected and deployed a scalable Kubernetes platform with Helm charts, monitoring stack (Prometheus/Grafana), and automated scaling policies supporting containerized microservices.',
      technologies: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
      icon: Server,
      impact: 'Scalable microservices',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Transforming infrastructure through innovative solutions and cutting-edge technologies
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon className="text-white" size={28} />
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.impact}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
