import React from "react";
import Header from "./header";
import Footer from "./footer";
import PublicRoutes from "../config/router";
import PublicAuthorized from "../config/router-login";
import { useLocation } from "react-router-dom";

const LoginRoutes = (props) => {
  return (
    <>
      <PublicAuthorized />
    </>
  );
};

const InlineRoutes = (props) => {
  return (
    <>
      <Header />
      <PublicRoutes />
      <Footer />
    </>
  );
};

const Layout = (props) => {
  const { pathname } = useLocation();
  return (
    <>{pathname !== "/login" && pathname !== "/register" ? <InlineRoutes {...props} /> : <LoginRoutes {...props}/>}</>
  );
};

export default Layout;
