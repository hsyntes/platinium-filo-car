import SelectCar from "./icon1.svg";
import Contact from "./icon2.svg";
import Drive from "./icon3.svg";
import Image from "next/image";
import { ScrollReveal } from "reveal-on-scroll-react";

function PlanTrip({ headings }) {
  return (
    <>
      <section className="plan-section" id="about">
        <section className="container">
          <section className="plan-container">
            <section className="plan-container__title">
              <ScrollReveal.h3>Şimdi seyahatinizi planlayın</ScrollReveal.h3>
              <ScrollReveal.h2>{headings.paragraphs[1]}</ScrollReveal.h2>
            </section>

            <section className="plan-container__boxes">
              <section className="plan-container__boxes__box">
                <Image src={SelectCar} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>Araba Seç</ScrollReveal.h3>
                <ScrollReveal.p>
                  Tüm sürüş ihtiyaçlarınız için geniş bir araç yelpazesi
                  sunuyoruz. İhtiyaçlarınızı karşılayacak mükemmel arabaya
                  sahibiz.
                </ScrollReveal.p>
              </section>

              <section className="plan-container__boxes__box">
                <Image src={Contact} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>Operatör ile İletişim</ScrollReveal.h3>
                <ScrollReveal.p>
                  Bilgili ve dost canlısı operatörlerimiz, her türlü soru veya
                  endişenizde size yardımcı olmaya her zaman hazır.
                </ScrollReveal.p>
              </section>

              <section className="plan-container__boxes__box">
                <Image src={Drive} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>{`Sürmeye Başla`}</ScrollReveal.h3>
                <ScrollReveal.p>
                  Uzun yola çıkıyor olsanız da, geniş araç yelpazemizle
                  yanınızdayız.
                </ScrollReveal.p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default PlanTrip;
