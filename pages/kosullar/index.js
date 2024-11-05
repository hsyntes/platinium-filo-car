import React, { useEffect, useState } from "react";
import carsData from "../../homecars.json";
import Head from "next/head";

function KosullarPage({ meta, headings }) {
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
        <meta name="keywords" content={meta.keywords} />
        <title>{meta.title}</title>
      </Head>
      <section className="relative">
        <div className="mt-12 w-[95vw] mx-auto">
          <h1 className="text-3xl font-bold my-20">{headings[0].title}</h1>
          <hr />
          <h1 className="text-2xl font-bold mt-20 mb-5">{headings[1].title}</h1>
          <p className="text-2xl w-[90vw] my-3">{headings[1].paragraph}</p>
          <h1 className="text-2xl font-bold mt-20 mb-5">{headings[2].title}</h1>
          <p className="text-2xl w-[90vw] my-3">{headings[2].paragraph}</p>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/terms`);
  const { data } = await response.json();

  const { meta, headings } = data;

  return {
    props: {
      meta,
      headings,
    },
  };
}

export default KosullarPage;
