import React from 'react';
import { MdMedicalServices } from 'react-icons/md';

const PatientItem = ({ patient }) => {
  const { patientInitials, patientName, age, condition, status, lastVisit } = patient;
  
  const getStatusBadgeClass = () => {
    switch(status) {
      case 'critical': return 'badge-danger';
      case 'stable': return 'badge-success';
      case 'returning': return 'badge-neutral';
      default: return 'badge-neutral';
    }
  };
  
  return (
    <div className="list-item">
      <div className="user-avatar">{patientInitials}</div>
      <div className="item-details">
        <div className="item-name">{patientName}</div>
        <div className="item-info">
          {age} years • <MdMedicalServices /> {condition}
        </div>
      </div>
      <div className="status-info">
        <div className={`badge ${getStatusBadgeClass()}`}>
          {status}
        </div>
        <div className="item-info">{lastVisit}</div>
      </div>
    </div>
  );
};

export default PatientItem;
