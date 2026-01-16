import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Engineering Manager',
      role: 'Technical Lead',
      company: 'AVO Automation',
      content:
        "Sowmyaranjan's expertise in multi-cloud infrastructure and security compliance has been invaluable. His leadership in achieving 82% CIS compliance and seamless SOC 2 audit participation demonstrates exceptional technical depth and attention to detail.",
      rating: 5,
    },
    {
      name: 'DevOps Team Lead',
      role: 'Senior Engineer',
      company: 'Immersion Software Labs',
      content:
        'Working with Sowmyaranjan has been an incredible experience. His ability to architect and implement complex CI/CD pipelines while reducing deployment failures by 40% showcases his mastery of DevOps practices. A true professional.',
      rating: 5,
    },
    {
      name: 'Cloud Architect',
      role: 'Solutions Architect',
      company: 'Technology Partner',
      content:
        'His deep understanding of AWS, Azure, and Oracle Cloud, combined with Infrastructure as Code expertise, makes him a go-to person for any cloud transformation initiative. The 99.9% uptime achieved speaks volumes.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            What colleagues and partners say about working together
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-6 right-6 text-blue-200" size={48} />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-blue-200 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
