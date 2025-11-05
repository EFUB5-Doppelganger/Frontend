// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import '@/app/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        <header className="header">
          <div className="container">
            <h1 className="logo">Airbnb Clone</h1>
            <nav>
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup">Sign Up</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            <p>© 2025 Airbnb Clone. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
