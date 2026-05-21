import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">Wellness Daily</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Dedicated to providing natural wellness information and resources to support your healthy lifestyle journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-emerald-400 transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-emerald-400 transition-colors">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#wellness" className="hover:text-emerald-400 transition-colors">
                  Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-xs leading-relaxed text-gray-500">
            <strong className="text-gray-400">Disclaimer:</strong> The information provided on this website is for informational purposes only and is not intended as medical advice. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare provider before starting any new supplement or wellness routine. Individual results may vary.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Wellness Daily. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            This is an independent affiliate website.
          </p>
        </div>
      </div>
    </footer>
  );
}
