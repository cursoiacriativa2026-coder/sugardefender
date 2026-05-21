import { motion } from "framer-motion";
import { Droplets, Zap, Sun, Moon, Activity, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Daily Glucose Balance",
    description:
      "A wellness approach designed to support your body's natural glucose management as part of a healthy lifestyle.",
  },
  {
    icon: Zap,
    title: "Natural Energy Support",
    description:
      "Feel more balanced throughout the day with ingredients that support steady energy levels naturally.",
  },
  {
    icon: Sun,
    title: "Daytime Wellness",
    description:
      "Support your daily routine with a formula that complements your active lifestyle and wellness goals.",
  },
  {
    icon: Moon,
    title: "Restful Balance",
    description:
      "Part of a holistic approach to wellness that supports your body's natural rhythms around the clock.",
  },
  {
    icon: Activity,
    title: "Metabolic Wellness",
    description:
      "Supports your body's natural metabolic processes as part of a balanced diet and exercise routine.",
  },
  {
    icon: Sparkles,
    title: "Overall Vitality",
    description:
      "A natural formula crafted to support your overall sense of wellness and daily vitality.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose This Formula
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Natural Daily Support
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A carefully crafted wellness formula designed to complement your healthy lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-gray-50 hover:bg-emerald-50/50 rounded-2xl p-7 border border-gray-100 hover:border-emerald-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
