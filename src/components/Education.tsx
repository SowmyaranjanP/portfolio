import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-12"></div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Master of Business Administration
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  Andhra University, Visakhapatnam
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Combining technical expertise with business acumen, this degree has equipped me
                  with strategic thinking and leadership skills essential for driving DevOps
                  transformation in enterprise environments.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'AWS Certified', icon: Award },
              { title: 'Multi-Cloud Expert', icon: Award },
              { title: 'Security Specialist', icon: Award },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center group hover:-translate-y-1"
              >
                <cert.icon
                  className="mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h4 className="font-semibold text-gray-900">{cert.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
