import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Whatweoffer } from "./components/Whatweoffer";

function App() {
  return (
    <div className="bg-black font-regular text-white w-full  mx-auto">
      <Navbar />
      <Hero />
      <Whatweoffer />
    </div>
  );
}

export default App;
