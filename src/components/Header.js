import React from 'react';
import Headerpict from './Assets/headerpict.jpg';
import Logo from './Assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import LazyHero from 'react-lazy-hero';
import { Button } from 'terra-component-lib';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  textHeader: {
    color: 'white',
  },
  logo: {
    position: 'absolute',
    left: '50px',
    top: '50px',
    zIndex: '3'
   },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <main>
        <div>
            <LazyHero className={classes.logo}
            imageSrc={Logo}
            opacity="0"
            ></LazyHero>
           <LazyHero imageSrc={Headerpict}
            color="#004a75"
            minHeight="100vh"
            opacity="0.7"
            >
            <Typography className={classes.textHeader}
            component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
            Hello! I'm Dina Mariana
            </Typography>
            <Typography className={classes.textHeader}
            component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
            Consult, Design, and Develop Webistes
            </Typography>
            <Typography className={classes.textHeader}
            component="p" variant="p" align="center" color="textPrimary" gutterBottom>
            Have something in mind? Feel free to contact me.
            </Typography>    
            <Typography className={classes.textHeader}
            component="p" variant="p" align="center" color="textPrimary" gutterBottom>
            I'll help you to make it happen.
            </Typography> 
            <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
            <Grid item>
            <Button
                text="LET'S MAKE CONTACT" 
                className="ter-button--secondary--3"
                />
            </Grid>
            </Grid>
            </div>
            </LazyHero>
            </div>
            
        </main>
    </React.Fragment>
               
  );
}

