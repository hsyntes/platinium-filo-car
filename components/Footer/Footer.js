function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <ul className="footer-content__1">
            <li>
              <span>Platinum Car Filo</span>
            </li>
            <li>
              <div>
                Tüm sürüş ihtiyaçlarınız için geniş bir araç yelpazesi
                sunuyoruz.
              </div>
              <div>İhtiyaçlarınızı karşılayacak mükemmel arabaya sahibiz.</div>
            </li>
            <li className="flex gap-3">
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
              <a href="tel:+905072593755">&nbsp; +90 507 259 37 55</a>
            </li>

            <li className="flex gap-3">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <span>İstanbul Havalimanı</span>
            </li>
          </ul>
          <ul className="footer-content__2">
            <li>Çalışma Saatleri</li>
            <li>7/24 Kesintisiz Çalışıyoruz</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
