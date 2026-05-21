import { motion } from "framer-motion";
import { Leaf, Beaker, Flower2, TreePine, Apple, Cherry } from "lucide-react";

const ingredients = [
  {
    icon: Leaf,
    name: "Eleuthero",
    description: "An adaptogenic herb traditionally used to support overall wellness and daily vitality.",
  },
  {
    icon: Beaker,
    name: "Coleus",
    description: "A natural plant extract known for its traditional use in supporting metabolic wellness.",
  },
  {
    icon: Flower2,
    name: "Maca Root",
    description: "A nutrient-rich root vegetable that has been used for centuries to support energy and balance.",
  },
  {
    icon: TreePine,
    name: "African Mango",
    description: "A tropical fruit extract traditionally valued for its role in supporting a healthy lifestyle.",
  },
  {
    icon: Apple,
    name: "Gymnema",
    description: "A woody climbing plant traditionally used to support glucose balance and wellness.",
  },
  {
    icon: Cherry,
    name: "Ginseng",
    description: "A well-known adaptogen traditionally used to support energy, focus, and overall vitality.",
  },
];

export function Ingredients() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            What's Inside
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Natural Ingredients
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A blend of carefully selected natural ingredients designed to support your wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <ingredient.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {ingredient.name}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {ingredient.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
