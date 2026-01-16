import { useState, useEffect, useRef } from 'react';

interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      category: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Azure', level: 85 },
        { name: 'Oracle Cloud', level: 90 },
      ],
    },
    {
      category: 'Containerization & Orchestration',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Helm', level: 85 },
      ],
    },
    {
      category: 'CI/CD & Automation',
      skills: [
        { name: 'AWS CodePipeline', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'Azure DevOps', level: 88 },
      ],
    },
    {
      category: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', level: 92 },
        { name: 'CloudFormation', level: 80 },
      ],
    },
    {
      category: 'Monitoring & Observability',
      skills: [
        { name: 'CloudWatch', level: 90 },
        { name: 'Prometheus', level: 85 },
        { name: 'Grafana', level: 87 },
      ],
    },
    {
      category: 'Security & Compliance',
      skills: [
        { name: 'IAM & Security', level: 90 },
        { name: 'SonarQube', level: 85 },
        { name: 'SOC 2 & ISO 27001', level: 82 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit built over 6+ years of hands-on experience with enterprise-grade technologies
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${categoryIndex * 0.1}s both` : 'none',
                }}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'Bash', 'YAML', 'Linux'].map((tech, index) => (
              <div
                key={index}
                className="bg-white px-4 py-3 rounded-lg text-center font-medium text-gray-700 shadow hover:shadow-md transition-shadow hover:scale-105 transform duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
