import axios from 'axios';

const API_KEY = 'AIzaSyCAdyniYRoNZ7lFXGEUd9_EbvVBcxOma6c';
const SHEET_ID = '1OOgwbnliog4CYujyhpcSsYtNK4XRaHnie_EQKKf6svE';
const RANGE = 'Sheet1!A1:D10'; // Adjust the range according to your sheet

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
