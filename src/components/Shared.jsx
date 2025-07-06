import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

import Youtube from "./Youtube";

function Shared() {
  return (
    <>
      <Header />
      <Outlet />
      <Youtube />
      <Footer />
    </>
  );
}

export default Shared;
