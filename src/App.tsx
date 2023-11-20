import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import BrandBar from "./components/brandBar";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Adiciona o ouvinte de evento para resize
    window.addEventListener("resize", handleResize);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="banner-full-container">
          <img
            src={`${isMobile ? "./src/assets/BannerFull-mobile.png" : "./src/assets/BannerFull.png"}`}
            alt="Banner principal"
          />
        </div>
      </section>
      <BrandBar />
    </>
  );
}

export default App;
