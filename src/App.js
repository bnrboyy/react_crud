import logo from "./logo.svg";
import "./App.css";

import Home from "./page/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./page/product";
import Layouts from "./layouts/layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
