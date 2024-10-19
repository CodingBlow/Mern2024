import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import Logout from "./Pages/Logout";
import WebDev from "./Pages/WebDev";
import AppDev from "./Pages/AppDev";
import CloudComputing from "./Pages/CloudComputing";
import DigitalMarketing from "./Pages/DigitalMarketing";
import ItSupport from "./Pages/ItSupport";
import Seo from "./Pages/Seo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Service Routes */}
        <Route path="/services/web-development" element={<WebDev />} />
        <Route path="/services/mobile-app-development" element={<AppDev />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/seo-optimization" element={<Seo />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route path="/services/it-support" element={<ItSupport />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
