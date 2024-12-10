import React from 'react';
import FooterCsit from "./footer-csit";
import Navbar from "./navbar";

const Layout = ({ children, title = 'Default Title' }) => {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <FooterCsit/>
        </footer>
      </>
    );
  };
  
  export default Layout;