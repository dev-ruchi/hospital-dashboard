import React from 'react';
import '../../styles/components/header.css'


const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      
      <div className="tab-navigation">
        <a href="#" className="tab active">Overview</a>
        <a href="#" className="tab">Analytics</a>
        <a href="#" className="tab">Reports</a>
      </div>
      
      <div className="header-date">Tuesday, April 1, 2025</div>
    </header>
  );
};

export default Header;
