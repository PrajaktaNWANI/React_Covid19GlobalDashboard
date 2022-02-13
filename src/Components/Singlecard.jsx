import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CountUp from 'react-countup';

import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles({
    cardstyle: {
        borderBottom: "10px solid yellow !important"
    },
    heading: {
        backgroundColor: "#f5f5f5",
        padding:"5px 15px"
    }
})

const Singlecard = ({ cardtitle, cases, desc, lastUpdate }) => {

    const classes = useStyle();

    return (
        <Grid component={Card} className={classes.cardstyle}>
            <Box>
                <Typography className={classes.heading} variant="h5" color="textSecondary">{cardtitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <CountUp start={0} end={cases} duration={2} separator=","></CountUp>
                </Typography>
                <Typography>{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    )
}

export default Singlecard;