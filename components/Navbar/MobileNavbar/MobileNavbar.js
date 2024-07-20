import { useState } from "react";

function MobileNavbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <ul className="mobile-navbar__links">
        <li>
          <a className="about-link" href="/#about">
            Hakkımızda
          </a>
        </li>
        <li>
          <a className="models-link" href="/#pick__section">
            Araç Modelleri
          </a>
        </li>
        <li>
          <a className="models-link" href="/branches">
            Şubeler
          </a>
        </li>
        <li>
          <a className="models-link" href="/kurumsal">
            Kurumsal Kiralama
          </a>
        </li>
        <li>
          <a className="models-link" href="/kosullar">
            Kiralama Koşulları
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
