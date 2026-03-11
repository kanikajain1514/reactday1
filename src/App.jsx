import React from "react";
import "./Component/Style.css";
import { Routes, Route } from "react-router-dom";

import Imageapi from "./Component/Imageapi";
import Detailpage from "./Component/Detailpage";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Header
        appName="React Day"
        menuItems={["Home", "About", "Contact"]}
      />

      {/* Routing starts here */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              heading="Welcome to the Home Page"
              content="This is the main content of the home page."
            />
          }
        />

        <Route path="/images" element={<Imageapi />} />

        <Route path="/image/:id" element={<Detailpage />} />
      </Routes>

      <Footer name="kanika" year={2024} />
    </>
  );
}

export default App;