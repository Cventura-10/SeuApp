import React, { useState } from 'react';
import axios from 'axios';

const Icon = () => {
  const [inputData, setInputData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/data', { inputData });

      console.log('Form submitted with input data:', inputData);
      console.log('Server response:', response.data);
      // Clear the input field
      setInputData('');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      {/* Add your icon component */}

      <form onSubmit={handleSubmit}>
        <label>
          Input Data:
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Icon;
