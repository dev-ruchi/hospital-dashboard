import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import { MdMenu } from 'react-icons/md';

const Layout = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  
  return (
    <div className="layout">
      <Sidebar isMobileOpen={isMobileSidebarOpen} toggleMobileSidebar={toggleMobileSidebar} />
      
      <div className="main-content">
        {/* Mobile menu button - only shown on smaller screens */}
        <button className="mobile-menu-btn" onClick={toggleMobileSidebar}>
          <MdMenu size={24} />
        </button>
        
        <Header />
        <main className="dashboard-container">
          {children}
        </main>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isMobileSidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleMobileSidebar}
        />
      )}
    </div>
  );
};

export default Layout;
