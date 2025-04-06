export const stats = {
    totalPatients: {
      value: 1248,
      change: '+12% from last month',
      trend: 'up'
    },
    todaysAppointments: {
      value: 12,
      note: '3 pending confirmations',
      trend: 'neutral'
    },
    averageConsultation: {
      value: '24m',
      change: '-2m from last week',
      trend: 'down'
    },
    monthlyRevenue: {
      value: '$24,563',
      change: '+3.7% from last month',
      trend: 'up'
    }
  };
  
  export const upcomingAppointments = [
    {
      id: 1,
      patientInitials: 'MJ',
      patientName: 'Michael Johnson',
      time: '9:00 AM - 9:30 AM',
      status: 'confirmed'
    },
    {
      id: 2,
      patientInitials: 'ED',
      patientName: 'Emily Davis',
      time: '10:00 AM - 10:30 AM',
      status: 'pending'
    },
    {
      id: 3,
      patientInitials: 'RW',
      patientName: 'Robert Wilson',
      time: '11:15 AM - 11:45 AM',
      status: 'confirmed'
    }
  ];
  
  export const recentPatients = [
    {
      id: 1,
      patientInitials: 'EW',
      patientName: 'Emma Wilson',
      age: 42,
      condition: 'Hypertension',
      status: 'returning',
      lastVisit: 'Today'
    },
    {
      id: 2,
      patientInitials: 'JB',
      patientName: 'James Brown',
      age: 56,
      condition: 'Diabetes Type 2',
      status: 'critical',
      lastVisit: 'Yesterday'
    },
    {
      id: 3,
      patientInitials: 'OM',
      patientName: 'Olivia Martinez',
      age: 35,
      condition: 'Pregnancy',
      status: 'stable',
      lastVisit: '3 days ago'
    }
  ];
  
  export const navigationItems = [
    { id: 1, name: 'Dashboard', icon: 'dashboard', active: true },
    { id: 2, name: 'Patients', icon: 'patients', active: false },
    { id: 3, name: 'Appointments', icon: 'appointments', active: false },
    { id: 4, name: 'Consultations', icon: 'consultations', active: false },
    { id: 5, name: 'Prescriptions', icon: 'prescriptions', active: false },
    { id: 6, name: 'Messages', icon: 'messages', active: false },
    { id: 7, name: 'Billing', icon: 'billing', active: false },
    { id: 8, name: 'Settings', icon: 'settings', active: false }
  ];
  