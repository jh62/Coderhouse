// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <ItemListContainer /> */
}
