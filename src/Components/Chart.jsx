import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const useStyle = makeStyles({
    container : {
        width: '80%',
        height: "60%",
        marginTop: 20,
        marginBottom:50
    }
})

const Chart = ({ chartdata: { confirmed, recovered, deaths } }) => {

    const classes= useStyle();

    return (
        <Box className = {classes.container}>
        {confirmed ? (
        <Bar 
            data = {{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'Peoples',
                    data: [confirmed.value, recovered.value, deaths.value],
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                }]
            }}
            options = {{
                legend: {display: false},
                title: { display: true, text: 'Current State in Country'}
            }}
            
        /> ) : ''
    }   
    </Box>
        
    )
}

export default Chart;