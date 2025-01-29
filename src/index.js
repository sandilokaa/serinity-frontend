import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import DetailItem from "./pages/item/DetailItem";

const roots = document.getElementById("root");
const root = createRoot(roots);

root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/item/detail/:id" element={<DetailItem />}></Route>
      </Routes>
    </Provider>
  </Router>
);
