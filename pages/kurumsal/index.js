import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import carsData from "../../homecars.json";
import Image from "next/image";
import Head from "next/head";

function KurumsalPage({ meta, headings, lists }) {
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
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>{meta.title}</title>
      </Head>
      <section className="relative">
        <section className="mt-12 w-[95vw] mx-auto">
          <h1 className="text-3xl font-bold my-3">{headings.title}</h1>
          <hr></hr>
          <p className="text-3xl w-[90vw] my-3">{headings.paragraph}</p>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {randomCars.map((car, index) => (
              <div key={index} className="w-full">
                <main key={car.name} className="container relative">
                  <div className="nike-card relative">
                    <div className="absolute top-0 left-0 z-50 m-2 p-4 text-white">
                      <p className="bg-[#ff4d30] text-2xl px-2 py-1 rounded-md">
                        {car.type}
                      </p>
                    </div>
                    <div className="imgBx relative">
                      <Image
                        src={car.image}
                        alt={car.name}
                        height={300}
                        width={400}
                        className="transition duration-500 hover:scale-125"
                      />
                    </div>
                    <div className="contentBx">
                      <h2 className="text-left">{car.name}</h2>
                      <div className="details">
                        <h3 className="text-left">
                          Price: <span>{car.price * 40} TL / ay</span>
                        </h3>
                      </div>
                      <div className="flex justify-between mt-6 mb-6">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-automatic-gearbox"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 17v4h1a2 2 0 1 0 0 -4h-1z" />
                            <path d="M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5" />
                            <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3" />
                            <path d="M9 11h4" />
                          </svg>
                          <span className="text-xl ml-2 mt-1">{car.vites}</span>
                        </div>
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-battery-automotive"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M6 5v-2" />
                            <path d="M18 3v2" />
                            <path d="M6.5 12h3" />
                            <path d="M14.5 12h3" />
                            <path d="M16 10.5v3" />
                          </svg>
                          <span className="text-xl ml-2 mt-1">{car.fuel}</span>
                        </div>
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M15 3v4" />
                            <path d="M7 3v4" />
                            <path d="M3 11h16" />
                            <path d="M18 16.496v1.504l1 1" />
                          </svg>
                          <span className="text-xl ml-2 mt-1">{car.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            ))}
          </section>
          <section className="mt-20">
            <p className="text-3xl w-[90vw] my-3 text-red-700">
              6 aylık kiralamalarda geçerli kampanyalardan faydalanmak için alt
              bölümde yer alan “Kurumsal Araç Kiralama Formu” üzerinden
              talebinizi iletebilirsiniz.
            </p>
          </section>
          <section className="mt-20 mx-20">
            <p className="text-2xl font-bold">
              Kurumsal Müşterilerimize Özel Ayrıcalıklarımız;
            </p>
            <ul className="list-disc">
              {lists.map((list, index) => (
                <li className="text-2xl" key={index}>
                  {list}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/institutional`);
  const { data } = await response.json();

  const { meta, headings, lists } = data;

  return {
    props: {
      meta,
      headings,
      lists,
    },
  };
}

export default KurumsalPage;
