import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (cant) => {
    if (cartCount + cant < 0) return;

    setCartCount(cartCount + cant);
  };

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/product/:id" element={<ItemDetailContainer onAddToCart={handleAddToCart} />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
