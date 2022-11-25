import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SideNavbar } from "./SideNavbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideNavbar/>
      <main className="mainBody">{children}</main>
      <Footer />
    </>
  );
};