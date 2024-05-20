import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import IconGallery from "./components/IconGallery";
import Menu from "./pages/Menu";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

function App() {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/galerie";

  return (
    <>
      {!isGalleryPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      {!isGalleryPage && <Footer />}
      <IconGallery />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
