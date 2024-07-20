import React from "react";
import MainImg from "./main.png";
import Box1 from "./icon1-1.svg";
import Box2 from "./icon2-1.svg";
import Box3 from "./icon3-1.svg";
import Image from "next/image";

function ChooseUs() {
  return (
    <section className="choose-section">
      <div className="container">
        <div className="choose-container">
          <Image
            className="choose-container__img"
            src={MainImg}
            alt="car_img"
          />
          <div className="text-container">
            <div className="text-container__left">
              <h4>Niye bizi seçmelisiniz</h4>
              <h2>Asla bulamayacağınız en iyi fiyatlı fırsatlar</h2>
              <p>
                {`
                      En iyi değer fırsatlarını keşfedin, yenilmez tekliflerimizle. Paranızın en iyi karşılığını sağlamaya adanmışız, böylece bütçenizi zorlamadan üstün kaliteli hizmetler ve ürünlerin tadını çıkarabilirsiniz. Tekliflerimiz, size eşsiz bir kiralama deneyimi sunmak üzere tasarlanmıştır, bu yüzden büyük indirimleri şansını kaçırmayın.
                      `}
              </p>
            </div>
            <div className="text-container__right">
              <div className="text-container__right__box">
                <Image src={Box1} alt="car-img" />
                <div className="text-container__right__box__text">
                  <h4>Tüm şehirler arası</h4>
                  <p>
                    Şehirler arası maceralarınız için bir üst seviyeye çıkın, en
                    üstün araçlarımızla sürüş deneyiminizi yaşayın.
                  </p>
                </div>
              </div>
              <div className="text-container__right__box">
                {" "}
                <Image src={Box2} alt="coin-img" />
                <div className="text-container__right__box__text">
                  <h4>Hep dahil fiyatlandırma</h4>
                  <p>
                    Tek bir pratik ve şeffaf fiyatla ihtiyacınız olan her şeyi
                    alın, bizim hep dahil fiyat politikamızla.
                  </p>
                </div>
              </div>
              <div className="text-container__right__box">
                {" "}
                <Image src={Box3} alt="coin-img" />
                <div className="text-container__right__box__text">
                  <h4>Gizli fiyatlandırma yok</h4>
                  <p>
                    Gizli fiyatlandırma olmadan huzur içinde keyfini çıkarın.
                    Şeffaf ve dürüst fiyatlandırma ilkemize inanıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
