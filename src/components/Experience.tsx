import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export default function Experience() {
  const jobs: Job[] = [
    {
      company: 'AVO Automation',
      role: 'Multi Cloud / DevSecOps Engineer',
      location: 'Bangalore',
      period: 'Dec 2024 - Present',
      highlights: [
        'Managed multi-region OCI infrastructure with VMs, VCNs, VCN peering, Site-to-Site VPN, and Object Storage',
        'Automated CI/CD pipelines using Azure DevOps, integrating SonarQube for SAST and SCA',
        'Containerized applications using Docker and deployed on Kubernetes with Helm charts',
        'Configured and managed Fortinet Next-Generation Firewall (NGFW) for secure web applications',
        'Actively participated in SOC 2 Type II and ISO/IEC 27001 compliance audits',
        'Led CIS Benchmark hardening activities achieving 82% compliance',
        'Implemented Disaster Recovery and backup strategies with 24/7 monitoring using Site24x7',
      ],
    },
    {
      company: 'Immersion Software Labs Pvt Ltd',
      role: 'DevOps Engineer',
      location: 'Hyderabad',
      period: 'Oct 2019 - Dec 2024',
      highlights: [
        'Designed and implemented scalable AWS cloud solutions using 30+ AWS services',
        'Built and maintained CI/CD pipelines reducing release failures by 40%',
        'Implemented Application Load Balancer and Auto Scaling Groups achieving 99.9% uptime',
        'Containerized applications using Docker and orchestrated with Kubernetes and Docker Swarm',
        'Enhanced system observability with CloudWatch, Prometheus, and Grafana',
        'Automated credential rotation using AWS Secrets Manager and Lambda',
        'Standardized DevOps tools and workflows, improving deployment reliability',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            6+ years of driving innovation and excellence in cloud infrastructure and DevOps practices
          </p>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-500 to-blue-600"></div>

            {jobs.map((job, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 md:translate-x-0"></div>

                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } bg-gradient-to-br from-blue-50 to-teal-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.role}</h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {job.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 group">
                        <CheckCircle2
                          size={20}
                          className="text-teal-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                        />
                        <p className="text-gray-700 leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
