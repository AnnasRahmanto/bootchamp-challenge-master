import React from "react";
import Header from "./header";
import Footer from "./footer";
import PublicRoutes from "../config/router";



const Layout = (props) => {
  return (
    <>
      <Header />
      <PublicRoutes />
      <Footer />
      
    </>
  );
};

export default Layout;
