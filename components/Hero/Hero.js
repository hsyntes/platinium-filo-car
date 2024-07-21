import BgShape from "./hero-bg.svg";
import HeroCar from "./main-car.png";
import { useEffect, useState, memo } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

function Hero({ headings }) {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
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
      <section className="container">
        <Image
          className="bg-shape"
          src={BgShape}
          alt="bg-shape"
          loading="lazy"
        />
        <section className="hero-content">
          <section className="hero-content__text">
            <p
              style={{
                color: "#ff4d30",
                fontWeight: "bolder",
              }}
              className="pink"
            >
              Şimdi seyahatinizi planlayın
            </p>
            <h1 className="!text-5xl">{headings.title}</h1>
            <p>{headings.paragraphs[0]}</p>
            <section className="hero-content__text__btns">
              <a
                className="hero-content__text__btns__book-ride"
                href="#booking-section"
              >
                Şimdi Kirala &nbsp; <IconCircleCheck />
              </a>
              <a className="hero-content__text__btns__learn-more" href="#about">
                Daha Fazla Bilgi &nbsp; <IconChevronRight />
              </a>
            </section>
          </section>

          {/* img */}
          <Image
            src={HeroCar}
            alt="car-img"
            className="hero-content__car-img"
            loading="lazy"
          />
        </section>
      </section>

      {/* page up */}
      <section
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        ^
      </section>
    </section>
  );
}

export default memo(Hero);
