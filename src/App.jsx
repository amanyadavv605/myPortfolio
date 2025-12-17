import HeroSection from './sections/Hero/HeroSection.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 z-0">
      <Header />
      <div className="background-gradient absolute inset-0 -z-50 max-h-screen"/>
      <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('assets/noisetexture.jpg')] opacity-25 mix-blend-soft-light"></div>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
