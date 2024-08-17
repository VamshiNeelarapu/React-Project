import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Wishlist from "./Pages/Wishlist";
import MenuContextProvider from "./Context/MenuContextProvider";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory category="mens" />} />
            <Route
              path="/womens"
              element={<ShopCategory category="womens" />}
            />
            <Route
              path="/accessories"
              element={<ShopCategory category="accessories" />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignUp />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Newsletter />
          <Footer />
        </BrowserRouter>
      </MenuContextProvider>
    </div>
  );
}

export default App;
