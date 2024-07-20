import BgShape from "./hero-bg.svg";
import HeroCar from "./main-car.png";
import { useEffect, useState, memo } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (typeof window !== "undefined") {
        if (window.pageYOffset > 600) {
          setGoUp(true);
        } else {
          setGoUp(false);
        }
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <Image
          className="bg-shape"
          src={BgShape}
          alt="bg-shape"
          loading="lazy"
        />
        <div className="hero-content">
          <div className="hero-content__text">
            <p
              style={{
                color: "#ff4d30",
                fontWeight: "bolder",
              }}
              className="pink"
            >
              Şimdi seyahatinizi planlayın
            </p>
            <h4>
              Araç <span>Kiralamada</span> büyük indirimler{" "}
              <span>Platinum Car Filo</span> da
            </h4>
            <p>
              Hayalinizdeki arabayı kiralayın. Yenilmez fiyatlar, sınırsız
              kilometre, esnek teslim alma seçenekleri ve çok daha fazlası.
            </p>
            <div className="hero-content__text__btns">
              <a
                onClick={bookBtn}
                className="hero-content__text__btns__book-ride"
                href="#booking-section"
              >
                Şimdi Kirala &nbsp; <IconCircleCheck />
              </a>
              <a className="hero-content__text__btns__learn-more" href="#about">
                Daha Fazla Bilgi &nbsp; <IconChevronRight />
              </a>
            </div>
          </div>

          {/* img */}
          <Image
            src={HeroCar}
            alt="car-img"
            className="hero-content__car-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* page up */}
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        ^
      </div>
    </section>
  );
}

export default memo(Hero);
