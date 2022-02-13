import { makeStyles } from '@material-ui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import Singlecard from './Singlecard';

const useStyle = makeStyles({
    componenet: {
        margin: "30px 0",
        width: "100%",
        
    },
    heading: {
        color: "#8ACA28",
        fontSize: "1.8rem",
        marginBottom: "30px",
        textAlign: "center"
    }
})

const Cards = ({data}) => {

    const classes = useStyle();

    if (!data.confirmed) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );

    }

    return (
        <Box className={classes.componenet}>
            <Typography className={classes.heading} >Corona Virus Cases Globally</Typography>

            <Grid container spacing={3} className="justify-content-center">
                <div className="row w-100 text-align-center px-5">
                    <div className="col-md-4 col-12 g-5">
                        <Singlecard
                            cardtitle="Infected"
                            cases={data.confirmed.value}
                            desc="Number of people infected by COVID-19"
                            lastUpdate={data.lastUpdate}
                        />
                    </div>
                    <div className="col-md-4 col-12 g-5">
                        <Singlecard
                            cardtitle="Recovered"
                            cases={data.recovered.value}
                            desc="Number of people recovered from COVID-19"
                            lastUpdate={data.lastUpdate}
                        />
                    </div>
                    <div className="col-md-4 col-12 g-5">
                        <Singlecard
                            cardtitle="Deaths"
                            cases={data.deaths.value}
                            desc="Number of deaths caused by COVID-19"
                            lastUpdate={data.lastUpdate}
                        />
                    </div>
                </div>
            </Grid>

        </Box>
    )
}



export default Cards;