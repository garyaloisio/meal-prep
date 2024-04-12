import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Meal Prep Application</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; 2024 Meal Prep Application</p>
      </footer>
    </div>
  );
};

export default Layout;
