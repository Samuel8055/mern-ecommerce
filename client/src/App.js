import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { CartScreen, HomeScreen, ProductScreen } from "./screens";
import "./App.css";
import { Backdrop, Navbar, SideDrawer } from "./components";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <Navbar />
      <Backdrop show={sideToggle} />
      <SideDrawer show={sideToggle} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
