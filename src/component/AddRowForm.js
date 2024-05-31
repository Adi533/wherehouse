import React, { useState } from 'react';

const AddRowForm = ({ headers, addRow }) => {
  const [rowData, setRowData] = useState(headers.map(() => ''));

  const handleChange = (e, index) => {
    const newRowData = [...rowData];
    newRowData[index] = e.target.value;
    setRowData(newRowData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(rowData);
    setRowData(headers.map(() => '')); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      {headers.map((header, index) => (
        <input
          key={index}
          type="text"
          placeholder={header}
          value={rowData[index]}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
      <button className='btn' type="submit">Add Row</button>
    </form>
  );
};

export default AddRowForm;
