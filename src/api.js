import axios from 'axios';

const API_KEY = 'YOUR API KEY GOES HERE';
const SHEET_ID = 'YOUR SHEET ID GO THERE';
const RANGE = 'Sheet1!A1:D10'; 

export const fetchData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.values;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
