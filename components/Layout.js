import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => (
  <div id="layout">
    <div className="sticky top-[-2px] z-50">
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-2xl font-medium text-white sm:px-6 lg:px-8 py-12 rounded-b-2xl">
        Araç Kiralamada %25 Büyük İndirimi Kaçırma !!!
      </p>
    </div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
