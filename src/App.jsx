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
      <div
        className="flex
        justify-center
        items-center
        my-10
        "
      >
        <button
          onClick={() => setIsQuizOpen(true)}
          className="bottom-8 right-8 bg-red-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-500 transition-colors z-50"
        >
          Câu hỏi trắc nghiệm
        </button>
        {isQuizOpen && (
          <QuizComponent
            isOpen={isQuizOpen}
            onClose={() => setIsQuizOpen(false)}
          />
        )}
      </div>
      {/* <CallToActionSection /> */}
      <Footer />
      <FloatingChatButton />
      <MusicButton />
    </>
  );
}

export default App;
