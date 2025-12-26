import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"

// Pages
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
      <div className="relative min-h-screen bg-slate-900 z-0">

      {/* Global Header */}
      <Header />

      {/* Background Elements */}
      <div className="background-gradient absolute inset-0 -z-50 max-h-screen"/>
      <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('assets/noisetexture.jpg')] opacity-25 mix-blend-soft-light">
      </div>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Fallback */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* Global Footer */}
      <Footer />

      </div>
  );
}
