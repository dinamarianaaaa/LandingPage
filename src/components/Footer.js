import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="default" align="center">
        {' © '}
        <Link color="inherit" href="https://www.linkedin.com/in/dinamariana">
          2019 Dina Mariana. All rights reserved.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#004a75',
        padding: theme.spacing(6),
      },
    }));

export default function Footer() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
          <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}