import { motion } from "framer-motion";
import { CheckCircle2, Utensils, Dumbbell, GlassWater, Timer } from "lucide-react";

const lifestyleTips = [
  {
    icon: Utensils,
    title: "Balanced Nutrition",
    description:
      "Combine your wellness routine with a balanced diet rich in whole foods, vegetables, and lean proteins.",
  },
  {
    icon: Dumbbell,
    title: "Regular Movement",
    description:
      "Stay active with regular exercise that you enjoy — walking, swimming, yoga, or any activity that keeps you moving.",
  },
  {
    icon: GlassWater,
    title: "Stay Hydrated",
    description:
      "Drink plenty of water throughout the day to support your body's natural processes and overall wellness.",
  },
  {
    icon: Timer,
    title: "Consistent Routine",
    description:
      "Build healthy habits with a consistent daily routine that supports your long-term wellness goals.",
  },
];

export function Wellness() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Healthy Lifestyle
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Wellness Is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Daily Journey
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Supporting healthy blood sugar is about more than just one product — it's about embracing a holistic approach to wellness that includes nutrition, movement, hydration, and consistency.
            </p>

            <ul className="space-y-4">
              {[
                "Natural daily support for your wellness goals",
                "Complements a balanced diet and active lifestyle",
                "Part of a holistic approach to healthy living",
                "Designed for long-term wellness support",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lifestyleTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <tip.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
