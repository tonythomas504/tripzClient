import React from 'react'
import Navbar from '../Navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Home.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Navbar />
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center">
                <h1>Welcome to Tripz</h1>
                <h2>A place where you plan the tripz of a lifetime.</h2>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
        </div>

        /* <div>
           <Grid container
               direction="row"
               justify="flex-start"
               alignItems="center">
               <Card>
                   <CardActionArea>
                       <CardMedia
                           component="img"
                           alt="Contemplative Reptile"
                           height="140"
                           image="/static/images/cards/contemplative-reptile.jpg"
                           title="Contemplative Reptile"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="h2">
                               Lizard
     </Typography>
                           <Typography variant="body2" color="textSecondary" component="p">
                               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                               across all continents except Antarctica
     </Typography>
                       </CardContent>
                   </CardActionArea>
               </Card>
               <Card>
                   <CardActionArea>
                       <CardMedia
                           component="img"
                           alt="Contemplative Reptile"
                           height="140"
                           image="/static/images/cards/contemplative-reptile.jpg"
                           title="Contemplative Reptile"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="h2">
                               Lizard
     </Typography>
                           <Typography variant="body2" color="textSecondary" component="p">
                               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                               across all continents except Antarctica
     </Typography>
                       </CardContent>
                   </CardActionArea>
               </Card>
               <Card>
                   <CardActionArea>
                       <CardMedia
                           component="img"
                           alt="Contemplative Reptile"
                           height="140"
                           image="/static/images/cards/contemplative-reptile.jpg"
                           title="Contemplative Reptile"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="h2">
                               Lizard
     </Typography>
                           <Typography variant="body2" color="textSecondary" component="p">
                               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                               across all continents except Antarctica
     </Typography>
                       </CardContent>
                   </CardActionArea>
               </Card>
           </Grid>

     </div> */



    )
}

export default Home
