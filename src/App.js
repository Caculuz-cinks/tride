import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Whatweoffer } from "./components/Whatweoffer";

function App() {
  return (
    <div className="bg-black font-regular overflow-x-hidden text-white w-full mx-auto">
      <Navbar />
      <Hero />
      <Whatweoffer />
      <Footer />
    </div>
  );
}

export default App;
