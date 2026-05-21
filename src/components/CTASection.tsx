import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";

const AFFILIATE_LINK = "https://sugardefender24.com/d/order-now.php#aff=junioralbertia81f";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Ready to Get Started?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            Natural Daily Blood Sugar Support
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover a wellness formula designed to support healthy glucose levels as part of your daily routine. Visit the official website to learn more.
          </p>

          {/* Product Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-3xl blur-2xl scale-110" />
              <img
                src="https://i.ibb.co/KzDFCvW1/Screenshot-29-removebg-preview.png"
                alt="Natural Blood Sugar Support Supplement"
                className="relative z-10 max-w-[220px] sm:max-w-[280px] mx-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-lg py-4 px-10 rounded-2xl shadow-xl shadow-emerald-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-300/40 hover:-translate-y-1 active:translate-y-0"
          >
            Visit Official Website
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Truck className="w-4 h-4 text-emerald-500" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
