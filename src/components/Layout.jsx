import React from 'react';
import Menu from './Menu'; 
import Footer from './Footer'; 

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
