import { motion } from "motion/react";
import { ArrowRight, BookOpen, GraduationCap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-blue/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-blue/10 px-3 py-1 rounded-full mb-6">
              <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Premier Coaching in the Region
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Empowering Students for a <span className="text-brand-blue">Brighter Future</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              At JBMR Coaching Classes, we focus on comprehensive learning for 6th to 12th grade students across UP, CBSE, and ICSE boards. Build strong foundations with expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#courses"
                className="flex items-center justify-center space-x-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span>View Our Courses</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#faculty"
                className="flex items-center justify-center space-x-2 bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-brand-blue/30 transition-all"
              >
                <span>Meet Our Faculty</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div>
                <span className="block text-2xl font-bold text-brand-blue">6-12th</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">All Subjects</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-brand-blue">3+ Boards</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">UP, CBSE, ICSE</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-brand-blue">English</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Speaking Mastery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/images/coaching_center_hero_1779018700952.png"
                alt="Coaching Center Class"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-blue/40 to-transparent"></div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl"></div>
            
            <div className="absolute bottom-8 -right-4 md:-right-8 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <span className="block text-sm font-bold text-gray-900">Personalized</span>
                <span className="block text-xs text-gray-500">Attention for All</span>
              </div>
            </div>

            <div className="absolute top-1/4 -left-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center space-x-3">
              <div className="bg-brand-yellow/20 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-brand-yellow shadow-xs" />
              </div>
              <div>
                <span className="block text-sm font-bold text-gray-900">Board Experts</span>
                <span className="block text-xs text-gray-500">Result Oriented</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
