import { Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./sections/Footer";
import Search from "./pages/Search";
import CartDrawer from "./sections/CartDrawer";
import SearchDrawer from "./sections/SearchDrawer";
import MenuDrawer from "./sections/MenuDrawer";
import CollectionDetail from "./pages/CollectionDetail";
import "@fontsource/poppins";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:handle" element={<CollectionDetail />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <CartDrawer />
      <SearchDrawer />
      <MenuDrawer />
      <Footer />
    </>
  );
}

export default App;
