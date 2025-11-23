import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartBadge from "./components/CartBadge";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track" element={<TrackOrder />} />
        </Routes>
      </main>
      <CartBadge />

      <Footer />
    </div>
  );
}

export default App;
