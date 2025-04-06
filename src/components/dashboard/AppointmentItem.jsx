import React from 'react';
import { MdCheckCircle, MdPending } from 'react-icons/md';

const AppointmentItem = ({ appointment }) => {
  const { patientInitials, patientName, time, status } = appointment;
  
  return (
    <div className="list-item">
      <div className="user-avatar">{patientInitials}</div>
      <div className="item-details">
        <div className="item-name">{patientName}</div>
        <div className="item-info">{time}</div>
      </div>
      <div className="status-indicator">
        {status === 'confirmed' ? (
          <div className="badge badge-success">
            <MdCheckCircle /> confirmed
          </div>
        ) : (
          <div className="badge badge-warning">
            <MdPending /> pending
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentItem;
