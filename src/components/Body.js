import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#e5e5e5',
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: '#e5e5e5',
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    backgroundColor: '#e5e5e5',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e5e5e5',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  fontSizeContent: {
    fontSize: '13px'
  },
 }));

export default function Body() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography component="h2" variant="h5" align="center" color="textPrimary" gutterBottom>
              How Can I Help You?
            </Typography>
            <Typography variant="p" align="center" color="textSecondary" paragraph>
              Our work then targeted, best practices outcomes social innovation synergy. <br />
              Venture philanthropy, revolutionary inclusive policymaker relief. User-centered <br />
              program areas scale.
            </Typography>
            </Container>
            <Container className={classes.root}>
          {/* End hero unit */}
          <Grid container spacing={4}>
             {/* 1st Content */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Consult
                    </Typography>
                    <Typography className={classes.fontSizeContent}>
                      Co-create, design thinking; strengthen infrastructure resist <br />
                      granular. Revolution circular, movements or framework <br />
                      social impact low-hanging fruit. Save the world <br />
                      compelling revolutionary progress.
                    </Typography>
                  </CardContent>
                  </Card>                
              </Grid>

              {/* 2nd Content */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Design
                    </Typography>
                    <Typography className={classes.fontSizeContent}>
                      Policymaker collaborates collective impact humanitarian <br />
                      shared value vocabulary inspire issue outcomes agile. <br />
                      Overcome injustice deep dive agile issue outcomes vibrant <br />
                      boots on the ground sustainable.
                    </Typography>
                  </CardContent>
                  </Card>               
              </Grid>

              {/* 3rd Content */}
                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Develop
                    </Typography>
                    <Typography className={classes.fontSizeContent}>
                      Revolutionary circular, movements a or impact framework <br />
                      social impact low-hanging. Save the compelling <br />
                      revolutionary inspire progress. Collective impacts and <br />
                      challenges for opportunities of thought provoking.
                    </Typography>
                  </CardContent>
                  </Card>               
              </Grid>

               {/* 4th Content */}
               <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Marketing
                    </Typography>
                    <Typography className={classes.fontSizeContent}>
                      Peaceful; vibrant paradigm, collaborative cities. Shared <br />
                      vocabulary agile, replicable, effective altruism youth. <br />
                      Mobilize commitment to overcome injustice resilient, uplift <br />
                      social transparent effective.
                    </Typography>
                  </CardContent>
                  </Card>               
              </Grid>

              {/* 5th Content */}
               <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Manage
                    </Typography>
                    <Typography className={classes.fontSizeContent}>
                      Change-makers innovation or shared unit of analysis. <br />
                      Overcome injustice outcomes strategize vibrant boots on <br />
                      the ground sustainable. Optimism, effective altruism <br />
                      invest optimism corporate social.
                    </Typography>
                  </CardContent>
                  </Card>               
              </Grid>

              {/* 6th Content */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Evolve
                    </Typography>
                    <Typography className={classes.fontSizeContent}>
                      Activate catalyze and impact contextualize humanitarian. <br />
                      Unit of analysis overcome injustice storytelling altruism. <br />
                      Thought leadership mass incarceration. Outcomes big <br />
                      data, fairness social game-changer.
                    </Typography>
                  </CardContent>
                  </Card>               
              </Grid>

          </Grid>
        </Container>
        </div>      
      </main>
    </React.Fragment>
  );
}