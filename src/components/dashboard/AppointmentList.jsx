import React from 'react';
import Card from '../ui/Card';
import AppointmentItem from './AppointmentItem.jsx';

const AppointmentList = ({ appointments }) => {
  return (
    <Card>
      <div className="section-header">
        <div>
          <h3 className="section-title">Upcoming Appointments</h3>
          <p className="section-subtitle">You have 12 appointments scheduled for today</p>
        </div>
      </div>
      
      <div className="appointment-list">
        {appointments.map(appointment => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </Card>
  );
};

export default AppointmentList;

