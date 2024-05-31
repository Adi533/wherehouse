import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <table border="1">
      <thead>
        <tr>
          {data[0].map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
