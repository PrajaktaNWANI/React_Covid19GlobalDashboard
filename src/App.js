
import './App.css';
import Box from '@mui/material/Box';
import logo from './images/COVID19.jpg';

import { useState, useEffect } from 'react';

import Cards from './Components/Cards';
import { fetchapi } from './service/api';
import {fetchSelectedCountryData} from './service/api';
import Countries from './Countries';
import Chart from './Components/Chart';


function App() {

  const [data, setData] = useState([]);
  const [selectedcountryname, SetSelectedCountryName] = useState('');
  const [chartdata,setChartData]=useState('');

  useEffect(() => {

    fetchapi().then(response => {
      setData(response.data);
    })

    fetchSelectedCountryData('').then(response => {
      setChartData(response.data);
    })

  },[]);

  const handleCountryChange = (selectedcountryname) => {
    SetSelectedCountryName(selectedcountryname);

    fetchSelectedCountryData(selectedcountryname).then(response => {
      setChartData(response.data);
    })
  }
  


  return (
    <Box className="d-flex flex-column justify-content-center align-content-center">
      <Box className="d-flex justify-content-center align-content-center app_whitespace">
        <span className="bg-light px-4 pt-3 pb-3 fs-5 fw-bold">COVID-19 CORONAVIRUS PANDAMIC</span>
      </Box>
      <Box className="d-flex justify-content-center align-content-center app_whitespace">
        <span className="px-4 pt-3 pb-3 fw-bold">Last Upadated : {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</span>
      </Box>
      <Box className="d-flex justify-content-center align-content-center">
        <img style={{ width: "300px" }} src={logo} alt="COVID_IMAGE" />
      </Box>
      <Box className="d-flex justify-content-center align-content-center">
        <Cards data={data} />
      </Box>
      <hr />
      <Box className="d-flex justify-content-center align-content-center">
        <Countries handleCountryChange={handleCountryChange} />
      </Box>
      <Box className="d-flex justify-content-center align-content-center">
        <Chart chartdata={chartdata} />
      </Box>

    </Box>
  );
}

export default App;
