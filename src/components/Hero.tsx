import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Heart } from "lucide-react";

const AFFILIATE_LINK = "https://sugardefender24.com/d/order-now.php#aff=junioralbertia81f";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-full blur-3xl scale-125" />
              <img
                src="https://i.ibb.co/KzDFCvW1/Screenshot-29-removebg-preview.png"
                alt="Natural Blood Sugar Support Supplement"
                className="relative z-10 max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] mx-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6"
            >
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-medium">Natural Wellness Formula</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
            >
              Support Healthy Blood Sugar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Naturally
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 mb-3 leading-relaxed"
            >
              Learn more about natural daily glucose support and wellness.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Discover a wellness formula designed to support healthy glucose levels as part of your daily routine.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-lg py-4 px-10 rounded-2xl shadow-xl shadow-emerald-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-300/40 hover:-translate-y-1 active:translate-y-0"
              >
                Continue To Official Website
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-10"
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Heart className="w-4 h-4 text-emerald-500" />
                <span>Daily Wellness Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Leaf className="w-4 h-4 text-emerald-500" />
                <span>Plant-Based Formula</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
