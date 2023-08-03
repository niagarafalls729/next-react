// layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your common header */}
      <header>
        <h1>My Shopping Cart</h1>
      </header>
      <main>{children}</main>
      {/* Your common footer */}
      <footer>
        <p>&copy; 2023 My Store</p>
      </footer>
    </div>
  );
};

export default Layout;
