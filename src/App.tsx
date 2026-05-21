import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Ingredients } from "./components/Ingredients";
import { Wellness } from "./components/Wellness";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="ingredients">
        <Ingredients />
      </div>
      <div id="wellness">
        <Wellness />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
