import React from 'react';
import StatCard from '../components/dashboard/StatCard.jsx';
import AppointmentList from '../components/dashboard/AppointmentList.jsx';
import PatientList from '../components/dashboard/PatientList.jsx';
import { stats, upcomingAppointments, recentPatients } from '../data/mockData.js';
import '../styles/components/dashboard.css'; 

const Dashboard = () => {
  return (
    <>
      <div className="stats-grid">
        <StatCard 
          title="Total Patients" 
          value={stats.totalPatients.value}
          info={stats.totalPatients.change}
          trend={stats.totalPatients.trend}
        />
        <StatCard 
          title="Today's Appointments" 
          value={stats.todaysAppointments.value}
          info={stats.todaysAppointments.note}
          trend={stats.todaysAppointments.trend}
        />
        <StatCard 
          title="Average Consultation" 
          value={stats.averageConsultation.value}
          info={stats.averageConsultation.change}
          trend={stats.averageConsultation.trend}
        />
        <StatCard 
          title="Monthly Revenue" 
          value={stats.monthlyRevenue.value}
          info={stats.monthlyRevenue.change}
          trend={stats.monthlyRevenue.trend}
        />
      </div>
      
      <div className="dashboard-sections">
        <AppointmentList appointments={upcomingAppointments} />
        <PatientList patients={recentPatients} />
      </div>
    </>
  );
};

export default Dashboard;
