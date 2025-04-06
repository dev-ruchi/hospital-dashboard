import React from 'react';
import Card from '../ui/Card';
import PatientItem from './PatientItem.jsx';

const PatientList = ({ patients }) => {
  return (
    <Card>
      <div className="section-header">
        <div>
          <h3 className="section-title">Recent Patients</h3>
          <p className="section-subtitle">Recently added or updated patient records</p>
        </div>
      </div>
      
      <div className="patient-list">
        {patients.map(patient => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>
    </Card>
  );
};

export default PatientList;
