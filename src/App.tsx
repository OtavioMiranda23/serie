import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import BrandBar from "./components/brandBar";
import Card from "./components/card";
import "swiper/swiper-bundle.css";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

function App() {
  const dataCard = [
    {
      title: "Camisa Furia",
      price: "9.999,99",
      oldPrice: "R$ 99.999,99",
      installments: 3,
      image: "./src/assets/card/camisa.png",
    },
    {
      title: "Blusa Furia",
      price: "9.999,99",
      oldPrice: "99.999,99",
      installments: 3,
      image: "./src/assets/card/jaqueta.png",
    },
    {
      title: "Camisa Furia Azul",
      price: "9.999,99",
      installments: 3,
      image: "./src/assets/card/camisaListrada.png",
    },
    {
      title: "Camisa Furia",
      price: "9.999,99",
      oldPrice: "R$ 99.999,99",
      installments: 3,
      image: "./src/assets/card/camisa.png",
    },
    {
      title: "Blusa Furia",
      price: "9.999,99",
      oldPrice: "99.999,99",
      installments: 3,
      image: "./src/assets/card/jaqueta.png",
    },
    {
      title: "Camisa Furia Azul",
      price: "9.999,99",
      installments: 3,
      image: "./src/assets/card/camisaListrada.png",
    },
  ];

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
            src={`${
              isMobile
                ? "./src/assets/BannerFull-mobile.png"
                : "./src/assets/BannerFull.png"
            }`}
            alt="Banner principal"
          />
        </div>
      </section>
      <BrandBar />
      <section className="section">
        <div className="showcase">
          <h2>LANÇAMENTOS</h2>
          <span>VER TUDO</span>
        </div>
        {/* 
        <Swiper
          direction="horizontal"
          slidesPerView={2}

          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        > */}
        <div className="card-wrapper">
          {dataCard.map((card, i) => (
            // <SwiperSlide>
            <Card
              key={i}
              title={card.title}
              price={card.price}
              oldPrice={card.oldPrice}
              installments={card.installments}
              image={card.image}
            />
            // </SwiperSlide>
          ))}
        </div>
        {/* </Swiper> */}
      </section>
      <section className="video section">
        <span>YOUTUBE</span>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Cwmy1FNK2CE?si=sTOvY0zeyzbvV8yt"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
      <section className="section">
        <div className="showcase">
          <h2>NOVIDADES</h2>
          <span>VER TUDO</span>
        </div>
        {/* 
        <Swiper
          direction="horizontal"
          slidesPerView={2}

          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        > */}
        <div className="card-wrapper">
          {dataCard.map((card, i) => (
            // <SwiperSlide>
            <Card
              key={i}
              title={card.title}
              price={card.price}
              oldPrice={card.oldPrice}
              installments={card.installments}
              image={card.image}
            />
            // </SwiperSlide>
          ))}
        </div>
        {/* </Swiper> */}
      </section>
      <section className="contact-container section">
        <Newsletter />
        <div className="medias">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M36.6663 20C36.6663 10.8 29.1997 3.33333 19.9997 3.33333C10.7997 3.33333 3.33301 10.8 3.33301 20C3.33301 28.0667 9.06634 34.7833 16.6663 36.3333V25H13.333V20H16.6663V15.8333C16.6663 12.6167 19.283 9.99999 22.4997 9.99999H26.6663V15H23.333C22.4163 15 21.6663 15.75 21.6663 16.6667V20H26.6663V25H21.6663V36.5833C30.083 35.75 36.6663 28.65 36.6663 20Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M36.6141 10.8625C36.4668 10.2865 36.1848 9.75373 35.7911 9.30818C35.3974 8.86264 34.9035 8.51707 34.35 8.30001C28.9937 6.23126 20.4688 6.25001 20 6.25001C19.5312 6.25001 11.0062 6.23126 5.65 8.30001C5.0965 8.51707 4.60255 8.86264 4.2089 9.30818C3.81524 9.75373 3.53316 10.2865 3.38594 10.8625C2.98125 12.4219 2.5 15.2719 2.5 20C2.5 24.7281 2.98125 27.5781 3.38594 29.1375C3.53294 29.7138 3.81492 30.2469 4.20859 30.6927C4.60226 31.1385 5.09633 31.4844 5.65 31.7016C10.7812 33.6813 18.8125 33.75 19.8969 33.75H20.1031C21.1875 33.75 29.2234 33.6813 34.35 31.7016C34.9037 31.4844 35.3977 31.1385 35.7914 30.6927C36.1851 30.2469 36.4671 29.7138 36.6141 29.1375C37.0187 27.575 37.5 24.7281 37.5 20C37.5 15.2719 37.0187 12.4219 36.6141 10.8625ZM25.3469 20.5203L17.8469 25.5203C17.7527 25.5831 17.6433 25.6192 17.5302 25.6247C17.4172 25.6302 17.3048 25.6048 17.205 25.5514C17.1052 25.498 17.0218 25.4185 16.9637 25.3214C16.9056 25.2243 16.8749 25.1132 16.875 25V15C16.8749 14.8868 16.9056 14.7758 16.9637 14.6786C17.0218 14.5815 17.1052 14.502 17.205 14.4486C17.3048 14.3952 17.4172 14.3699 17.5302 14.3753C17.6433 14.3808 17.7527 14.4169 17.8469 14.4797L25.3469 19.4797C25.4326 19.5367 25.5029 19.6141 25.5515 19.7049C25.6002 19.7956 25.6256 19.897 25.6256 20C25.6256 20.103 25.6002 20.2044 25.5515 20.2951C25.5029 20.3859 25.4326 20.4633 25.3469 20.5203Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M31.5017 1.92166H37.635L24.235 17.2383L40 38.0767H27.6567L17.99 25.4367L6.92667 38.0767H0.79L15.1233 21.6933L0 1.92333H12.6567L21.395 13.4767L31.5017 1.92166ZM29.35 34.4067H32.7483L10.81 5.39999H7.16333L29.35 34.4067Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
          >
            <path
              d="M7.6425 0L0.5 7.1425V32.8575H9.0725V40L16.215 32.8575H21.925L34.785 20V0H7.6425ZM31.9275 18.5725L26.215 24.285H20.5L15.5 29.285V24.285H9.0725V2.8575H31.9275V18.5725Z"
              fill="black"
            />
            <path
              d="M27.6427 7.8575H24.7852V16.425H27.6427V7.8575ZM19.7852 7.8575H16.9277V16.425H19.7852V7.8575Z"
              fill="black"
            />
          </svg>
        </div>
      </section>
      <Footer />
      <div className="credits section">
        <p>
        © 2023 FURIA - 42.374.282/0001-37. Em caso de divergência de preços no site, o valor válido é o do Carrinho de compras. Preços e condições de pagamento podem variar de acordo com a disponibilidade de produtos.
        </p>
        <a>Desenvolvido por: SERI.E Design</a>
      </div>
    </>
  );
}

export default App;
