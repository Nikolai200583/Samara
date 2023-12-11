import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../index.css";
import { Catalog } from "../../pages/catalog";
import { Cart } from "../../pages/cart";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
