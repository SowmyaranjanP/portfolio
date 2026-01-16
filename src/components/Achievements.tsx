import { Trophy, Target, TrendingUp, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'AVO Partner for Progress',
      description: 'Recognized for outstanding contributions to DevOps transformation',
      year: '2024',
    },
    {
      icon: Trophy,
      title: 'AVO Super Squad',
      description: 'Awarded for exceptional teamwork and technical excellence',
      year: '2024',
    },
    {
      icon: Target,
      title: '40% Reduction in Release Failures',
      description: 'Through optimized CI/CD pipeline implementation',
      year: '2023',
    },
    {
      icon: TrendingUp,
      title: '99.9% Uptime Achievement',
      description: 'Maintained through robust load balancing and auto-scaling',
      year: '2023',
    },
    {
      icon: Users,
      title: '82% CIS Compliance Score',
      description: 'Led security hardening initiatives across cloud infrastructure',
      year: '2024',
    },
    {
      icon: Target,
      title: 'SOC 2 & ISO 27001 Compliance',
      description: 'Successfully participated in enterprise security audits',
      year: '2024',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Milestones that reflect commitment to excellence and continuous improvement
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-500 p-8 rounded-xl text-white text-center">
            <h3 className="text-3xl font-bold mb-2">6+ Years of Excellence</h3>
            <p className="text-blue-100 text-lg">
              Consistently delivering high-impact solutions across enterprise cloud environments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
