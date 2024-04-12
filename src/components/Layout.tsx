import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your header component goes here */}
      <header>
        <h1>Meal Prep Application</h1>
      </header>

      {/* Render the main content */}
      <main>{children}</main>

      {/* Your footer component goes here */}
      <footer>
        <p>&copy; 2024 Meal Prep Application</p>
      </footer>
    </div>
  );
};

export default Layout;
