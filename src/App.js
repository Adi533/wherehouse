import React, { useState, useEffect } from 'react';
import { fetchData } from './api';
import Table from './component/Table';
import AddRowForm from './component/AddRowForm';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSync();
  }, []);

  const handleSync = async () => {
    setLoading(true);
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  const addRow = (newRow) => {
    setData((prevData) => [...prevData, newRow]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Sheets Data Visualizer</h1>
        <button className='btn' onClick={handleSync} disabled={loading}>
          {loading ? 'Syncing...' : 'Sync Data'}
        </button>
        {data.length > 0 && <AddRowForm headers={data[0]} addRow={addRow} />}
        <Table data={data} />
      </header>
    </div>
  );
}

export default App;
