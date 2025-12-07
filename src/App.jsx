import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WomenClothes from "./pages/WomenClothes";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenClothes />} />
        <Route path="/cart" element={<CartPage />} />

        {/* NEW PRODUCT PAGE */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
