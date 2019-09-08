import React from 'react';
import CookieConsent from "react-cookie-consent";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    textCookie: {
        color: 'black',
        fontSize: '13px'
      },
}));

export default function Cookie() {
    const classes = useStyles();
    return (
<CookieConsent 
    location="top"
    buttonText="Got it"
    style={{ background: "​#e5e5e5", position:"center" }}
    buttonStyle={{ background: "#007bc1", color: "white", position: "center" }}
    >
    <Typography className={classes.textCookie}
    component="p" variant="p" align="center">
    By accessing and using this website, you acknowledge that you have read and <br></br>
    understand our <Link to="/">Cookie Policy,</Link> 
    <Link>Privacy, </Link> and our <Link> Terms of Service.</Link>
    </Typography>
   
</CookieConsent>
    );
}
