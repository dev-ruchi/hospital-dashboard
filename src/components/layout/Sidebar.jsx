import React from 'react';
import '../../styles/components/sidebar.css';
import { navigationItems } from '../../data/mockData.js';
import { 
  MdDashboard, 
  MdPeople, 
  MdCalendarToday, 
  MdMedicalServices,
  MdMedication,
  MdMessage,
  MdPayment,
  MdSettings,
  MdLogout
} from 'react-icons/md';

const Sidebar = ({ isMobileOpen, toggleMobileSidebar }) => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'dashboard': return <MdDashboard />;
      case 'patients': return <MdPeople />;
      case 'appointments': return <MdCalendarToday />;
      case 'consultations': return <MdMedicalServices />;
      case 'prescriptions': return <MdMedication />;
      case 'messages': return <MdMessage />;
      case 'billing': return <MdPayment />;
      case 'settings': return <MdSettings />;
      default: return <MdDashboard />;
    }
  };

  return (
    <aside className={`sidebar ${isMobileOpen ? 'show' : ''}`}>
      <div className="sidebar-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDm58a9DbtKQXoN96UaKcWuK18GA6KDUTNsg&s" alt="Dr. Sarah Smith" />
        <div>
          <h3>Dr. Sarah Smith</h3>
          <p>Cardiologist</p>
        </div>
      </div>
      
      <nav>
        <ul className="nav-list">
          {navigationItems.map(item => (
            <li key={item.id}>
              <a 
                href="#" 
                className={`nav-item ${item.active ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth <= 768) {
                    toggleMobileSidebar();
                  }
                }}
              >
                <span className="nav-item-icon">{getIcon(item.icon)}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <a href="#" className="logout-btn" onClick={(e) => e.preventDefault()}>
        <span className="logout-icon"><MdLogout /></span>
        Log out
      </a>
    </aside>
  );
};

export default Sidebar;

