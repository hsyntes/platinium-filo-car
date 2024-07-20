import React, { useEffect, useState } from "react";
import carsData from "../../homecars.json";

export default function KosullarPage() {
  const [randomCars, setRandomCars] = useState([]);

  const cars = [...carsData.cheap, ...carsData.mid, ...carsData.exp];

  useEffect(() => {
    const getRandomCars = () => {
      const numberOfCars = 10; // 15 ile 20 arasında bir sayı
      const shuffledCars = cars.sort(() => 0.5 - Math.random());
      return shuffledCars.slice(0, numberOfCars);
    };

    setRandomCars(getRandomCars());
  }, []);

  return (
    <section className="relative">
      <div className="mt-12 w-[95vw] mx-auto">
        <h1 className="text-3xl font-bold my-20">Kiralama Koşulları</h1>
        <hr></hr>
        <h1 className="text-2xl font-bold mt-20 mb-5">Kullanıcı Bilgisi</h1>
        <p className="text-2xl w-[90vw] my-3">
          Kiraladığınız aracı yalnızca sözleşme ve teslimat formunda belirtilen
          kişi/kişiler kullanabilir. Sözleşmede belirtilmeyen üçüncü kişilerin,
          aracı kullanmaları halinde meydana gelebilecek hasarlarda, hiçbir
          hasar güvencesi geçerli değildir. Araç kullanıcı sayısını
          arttırabilmek için şubelerimizden, “Ek Sürücü” hizmeti satın
          alabilirsiniz. Ek sürücü; aracı kiralayan kişi dışında aracı
          kullanacak biri veya birileri var ise satın alınmak zorundadır. Bir
          araç için en fazla 5 adet ek sürücü tanımlanabilir. Araç gruplarında
          belirlenmiş olan yaş ve ehliyet yılı koşulları dâhilinde kiralama
          yapılabilmektedir. Bu koşulların sağlanamaması durumunda “Genç Sürücü”
          hizmet paketi satın alarak bu paket içeriğindeki limitler dâhilinde
          kiralama yapabilirsiniz. Genç sürücü hizmet paketi “Süper Maksimum
          Güvence” hizmetini de içermektedir. Ek Sürücü ve Genç Sürücü Hizmet
          ücretlerini rezervasyon merkezimiz ve şubelerimizden öğrenebilirsiniz.
        </p>
        <h1 className="text-2xl font-bold mt-20 mb-5">
          Yaş ve Ehliyet Yılı Koşulları
        </h1>
        <p className="text-2xl w-[90vw] my-3">
          Araç gruplarına bağlı minimum yaş ve ehliyet yılı bilgileri aşağıdaki
          tabloda belirtilmiştir. Bu koşulları hem kiracı hem de ek
          sürücünün/sürücülerin sağlaması gerekmektedir. Ehliyet üzerinde T.C.
          kimlik numarası bulunması zorunludur. Yeni kimliklerle birleşik
          ehliyetler ile kiralama yapılamaz. Yanınızda ehliyetiniz bulunmak
          zorundadır.
        </p>
      </div>
    </section>
  );
}
