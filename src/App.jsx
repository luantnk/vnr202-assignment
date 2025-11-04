import { useEffect, useState } from "react";
import FloatingChatButton from "./components/common/FloatingChatButton";
import Footer from "./components/common/Footer";
import MusicButton from "./components/common/MusicButton";
import HeroSection from "./components/presentation/HeroSection";
import HowSection from "./components/presentation/HowSection";
import ImpactSection from "./components/presentation/ImpactSection";
import IntroSection from "./components/presentation/IntroSection";
import WhatSection from "./components/presentation/WhatSection";
import WhySection from "./components/presentation/WhySection";
import AIUsageSection from "./components/presentation/AIUsageSection";
import AOS from "aos";
import "aos/dist/aos.css";
import QuizComponent from "./components/modals/QuizComponent";

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <HeroSection />
      <div data-aos="fade-up">
        <IntroSection />
      </div>
      <div data-aos="fade-up">
        <WhySection />
      </div>
      <div data-aos="fade-up">
        <HowSection />
      </div>
      <div data-aos="fade-up">
        <WhatSection />
      </div>
      <div data-aos="fade-up">
        <ImpactSection />
      </div>
      <div data-aos="fade-up">
        <AIUsageSection />
      </div>
      {/* <CallToActionSection /> */}
      <Footer />
      
      {/* Floating Quiz Button - Left side, above chat button */}
      <button
        onClick={() => setIsQuizOpen(true)}
        className="fixed bottom-32 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-40 flex items-center gap-2 group animate-bounce"
        aria-label="Mở câu hỏi trắc nghiệm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <span className="font-bold">Trắc nghiệm</span>
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          Quiz
        </span>
      </button>
      
      {isQuizOpen && (
        <QuizComponent
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
      <FloatingChatButton />
      <MusicButton />
    </>
  );
}

export default App;
