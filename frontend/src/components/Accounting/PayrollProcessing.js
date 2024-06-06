import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PayrollProcessing = () => {
  const [payrollData, setPayrollData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPayrollData();
  }, []);

  const fetchPayrollData = async () => {
    try {
      const response = await axios.get('/api/payroll');
      setPayrollData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching payroll data:', error);
      setError('Failed to fetch payroll data. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="payroll-processing">
      <h2>Payroll Processing</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Gross Pay</th>
            <th>Deductions</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody>
          {payrollData.map((payroll) => (
            <tr key={payroll.id}>
              <td>{payroll.employee}</td>
              <td>{payroll.grossPay}</td>
              <td>{payroll.deductions}</td>
              <td>{payroll.netPay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollProcessing;
