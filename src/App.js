import "flatpickr/dist/themes/confetti.css";
import Widget from "./pages/Widget/Widget.js";
import { HelmetProvider } from "react-helmet-async";
import TopbarAdmin from "./components/layout/admin/TopbarAdmin/index.js";
import MenuAdmin from "./components/layout/admin/Navbar.js";
import Footer from "./components/layout/Footer.js";
import BackToTop from "./components/layout/BackToTop.js";
import { LayoutProvider } from "./context/useLayoutContext.js";

function App() {
  return (
    <HelmetProvider>
      <LayoutProvider>
        <TopbarAdmin />
        <MenuAdmin />
        <BackToTop />
        <Widget />
        <Footer />
      </LayoutProvider>
    </HelmetProvider>
  );
}

export default App;
