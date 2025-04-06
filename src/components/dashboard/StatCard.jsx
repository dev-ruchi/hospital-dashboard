import React from 'react';
import Card from '../ui/Card';
import { MdArrowUpward, MdArrowDownward, MdInfo } from 'react-icons/md';

const StatCard = ({ title, value, info, trend }) => {
  const renderTrendIcon = () => {
    if (trend === 'up') return <MdArrowUpward className="text-success" />;
    if (trend === 'down') return <MdArrowDownward className="text-danger" />;
    return null;
  };
  
  return (
    <Card>
      <h4 className="stat-card-title">{title}</h4>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-info">
        {renderTrendIcon()}
        <span>{info}</span>
        <MdInfo className="info-icon" />
      </div>
    </Card>
  );
};

export default StatCard;
