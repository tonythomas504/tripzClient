import React from 'react'
import Navbar from '../Navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Home.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#305e7b',
        height: '100vh',
    },
    paper: {
        height: 240,
        width: 400
    },
    control: {
        padding: theme.spacing(2),
    },
    root2: {
        paddingTop: '50px',
        paddingBottom: '100px',
    },
    root3: {
        padding: '20px',
        paddingBottom: '20px'
    },

}));





function Home() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <div className={classes.root}>

            <Navbar />
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
                className={classes.root2}>
                <Typography variant="h1" style={{ color: "#ffffff" }}>Welcome to Tripz</Typography>
                <Typography variant="h5" style={{ color: "#ffffff" }}>A place where you plan the tripz of a lifetime.</Typography>
            </Grid>

            <Grid container className={classes.root} spacing={10}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>

                        <Grid item>
                            <Paper className={classes.paper} style={{ backgroundColor: "#4C956C" }}>
                                <Typography align="center" variant="h3" style={{ color: "#ffffff" }} className={classes.root3}>CREATE</Typography>
                                <Typography variant="h6" align="center" style={{ color: "#ffffff" }}>Create trips, getaways, and vacations. Plan that next vacation with the Tripz app.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} style={{ backgroundColor: "#4C956C" }} >
                                <Typography align="center" variant="h3" style={{ color: "#ffffff" }} className={classes.root3}>PLAN</Typography>
                                <Typography variant="h6" align="center" style={{ color: "#ffffff" }}>Plan to a tee. Figure out all aspects of your next vacation and budget for the perfect time.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} style={{ backgroundColor: "#4C956C" }}>
                                <Typography align="center" variant="h3" style={{ color: "#ffffff" }} className={classes.root3}>TRAVEL</Typography>
                                <Typography variant="h6" align="center" style={{ color: "#ffffff" }}>Travel to anywhere you please. Tripz enables you to plan your vacation to places you'd never dream of.</Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>


        </div>

    )
}

export default Home
