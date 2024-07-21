import Image from "next/image";
import homecars from "../../homecars.json";

function Card() {
  const renderCards = (cars) => {
    return cars.map((car) => (
      <section
        key={car.name}
        id="booking-section"
        className="container relative"
      >
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
                Price: <span>{car.price} TL / gün</span>
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
            <div className="actions md:flex md:justify-between">
              <a
                href="https://wa.me/905072593755?text=Merhaba%20bir%20araç%20kiralamak%20istiyorum."
                target="_blank"
                className="whatsapp-btn flex gap-2 text-white mt-3"
              >
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <span className="text-2xl">Whatsapp</span>
              </a>
              <a href="tel:+905072593755"></a>
              <a
                href="tel:+905072593755"
                className="call-btn flex gap-2 text-white  mt-3"
              >
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <span className="text-2xl">Ara</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    ));
  };

  return (
    <div id="pick__section">
      <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-8 p-8 font-mono">
        {renderCards(homecars.cheap)}
      </section>
      <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-8 p-8 font-mono">
        {renderCards(homecars.mid)}
      </section>
      <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-8 p-8 font-mono">
        {renderCards(homecars.exp)}
      </section>
    </div>
  );
}

export default Card;
