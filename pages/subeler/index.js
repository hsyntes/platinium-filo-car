import React, { useState } from "react";
import airports from "../../airports.json";
import Link from "next/link";
import Head from "next/head";

function BranchesPage({ meta, headings }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const filteredAirports = selectedCity
    ? airports.filter((airport) => airport.city === selectedCity)
    : airports;

  const uniqueCities = [...new Set(airports.map((airport) => airport.city))];

  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>{meta.title}</title>
      </Head>
      <section className="relative">
        <div className="p-4 w-[70vw] text-3xl mx-auto">
          <h1 className="text-center mb-4">{headings.title}</h1>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="p-2 border w-full border-gray-300 rounded-md "
          >
            <option value="">Şehir Seçin</option>
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-8 p-8 font-mono">
          {filteredAirports.flatMap((airport, airportIndex) =>
            airport.airport.map((location, locIndex) => (
              <div
                className="bg-white shadow-lg rounded-xl overflow-hidden mb-4"
                key={`${airportIndex}-${locIndex}`}
              >
                <iframe
                  src={`https://www.google.com/maps/embed?${location.map}`}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="p-10 flex justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{location.name}</h1>
                    <h2 className="text-2xl font-semibold">{airport.city}</h2>
                  </div>
                  <span>
                    <Link href={`/${location.id}`} className="flex">
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            ))
          )}
        </section>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://platiniumcarfilo.com/api/branches");
  const { data } = await response.json();

  const { meta, headings } = data;

  return {
    props: {
      meta,
      headings,
    },
  };
}

export default BranchesPage;
