import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Chart.css';

const FinancialChart = ({ data }) => {
  return (
    <div className="financial-chart">
      <h3>Financial Chart</h3>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default FinancialChart;
