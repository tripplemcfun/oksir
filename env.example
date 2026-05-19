import { motion } from "motion/react";
import { CheckCircle2, Languages, School, Trophy } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: "boards",
      title: "Board Specialization",
      description: "Focused preparation for UP, CBSE, and ICSE boards from 6th to 12th standard.",
      icon: School,
      color: "bg-blue-100 text-blue-600",
      features: ["Subject mastery", "Past paper analysis", "Regular mock tests", "Doubt clearing sessions"]
    },
    {
      id: "english",
      title: "English Speaking",
      description: "Master the art of communication with our specialized English speaking course.",
      icon: Languages,
      color: "bg-brand-yellow/20 text-brand-blue",
      features: ["Grammar foundation", "Vocabulary building", "Confidence coaching", "Public speaking focus"]
    },
    {
      id: "all-subjects",
      title: "All Subjects",
      description: "Comprehensive coaching for all subjects including Math, Science, and Social Studies.",
      icon: Trophy,
      color: "bg-green-100 text-green-600",
      features: ["Experiential learning", "Concept clarity", "Regular assignments", "Performance tracking"]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Programs We Offer
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored educational programs designed to help students excel in their academic journey and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-brand-blue/20 transition-all group"
            >
              <div className={`${course.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                <course.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {course.description}
              </p>
              <ul className="space-y-3">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
