import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../../protected-route/index";
import { useState } from "react";
import { useAppSelector } from "../../hooks";
import "../../index.css";
import { Catalog } from "../../pages/catalog";
import { Cart } from "../../pages/cart";

function App() {
  const [count, setCount] = useState(1);

  const data = useAppSelector((state) => state.items.list);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route element={<ProtectedRoute isAllowed={Boolean(data.length)} />}>
          <Route path="/cart" element={<Cart setCount={setCount} count={count} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
