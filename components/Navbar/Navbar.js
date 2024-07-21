import { useRouter } from "next/router";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import logo from "./logo.png";
import Image from "next/image";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

function Navbar() {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const { pathname } = router;

  console.log("pathname: ", pathname);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav className="">
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <MobileNavbar />
        </div>

        <div className="navbar">
          <div className="navbar__img">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image
                src={logo}
                alt="logo-img"
                loading="lazy"
                className="logo-navbar"
              />
            </a>
          </div>
          <ul className="navbar__links">
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
              <a
                className="models-link"
                href="/subeler"
                style={
                  pathname === "/subeler" ? { color: "#ff4d30" } : { undefined }
                }
              >
                Şubeler
              </a>
            </li>
            <li>
              <a
                className="models-link"
                href="/kurumsal"
                style={
                  pathname === "/kurumsal"
                    ? { color: "#ff4d30" }
                    : { undefined }
                }
              >
                Kurumsal Kiralama
              </a>
            </li>
            <li>
              <a
                className="models-link"
                href="/kosullar"
                style={
                  pathname === "/kosullar"
                    ? { color: "#ff4d30" }
                    : { undefined }
                }
              >
                Kiralama Koşulları
              </a>
            </li>
          </ul>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
