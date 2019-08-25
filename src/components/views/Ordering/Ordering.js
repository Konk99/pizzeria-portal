import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  grid: {
     marginTop: 10,
  },
  description: {
     marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
     transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
  order: {
    fontSize: 16,
    maxWidth: 500,
    height: 36,
  },
  ready: {
    fontSize: 16,
    maxWidth: 500,
    height: 36,
    backgroundColor: '#EAF47D',
  },
});

export default function Ordering() {
  const classes = useStyles();
  return (
   <Grid className={classes.grid} container spacing={1}>
     <Grid item xs>
       <Card>
         <CardContent>
           <Typography className={classes.title} color="textSecondary" gutterBottom>
             Table 1
           </Typography>
           <Typography className={classes.pos} variant="h5" component="h2">
             Orders
           </Typography>
           <Grid container className={classes.description}>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Order id
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Date
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Cost
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Status
               </Typography>
             </Grid>
             <Grid item xs={2}>
               <Typography variant="body2" component="p">
                 Change status
               </Typography>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">2848720148</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 15:01
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $25,35
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 Ordered
               </Typography>
             </Grid>
             <Grid item xs={2}>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">8760468940</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 15:12
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $12,40
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 Ordered
               </Typography>
             </Grid>
              <Grid item xs={2}>
              </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">3800168792</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 15.08.19 15:45
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $72,31
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.ready} variant="body2" component="p">
                 Ready
               </Typography>
             </Grid>
             <Grid item xs={2}>
               <Button variant="outlined">Delivered</Button>
             </Grid>
           </Grid>
         </CardContent>
         <CardActions>
           <Link to="/ordering/new">
             <Button variant="outlined" size="small">
               New order
             </Button>
           </Link>
         </CardActions>
       </Card>
     </Grid>
     <Grid item xs>
       <Card>
         <CardContent>
           <Typography className={classes.title} color="textSecondary" gutterBottom>
             Table 2
           </Typography>
           <Typography className={classes.pos} variant="h5" component="h2">
             Orders
           </Typography>
           <Grid container className={classes.description}>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Order id
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Date
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Cost
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Status
               </Typography>
             </Grid>
             <Grid item xs={2}>
               <Typography variant="body2" component="p">
                 Change status
               </Typography>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">4036891527</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 12:36
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $20,98
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 Delivered
               </Typography>
             </Grid>
             <Grid item xs={2}>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">3012568491</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 14:25
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $62,30
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.ready} variant="body2" component="p">
                 Ready
               </Typography>
             </Grid>
             <Grid item xs={2}>
               <Button variant="outlined">Delivered</Button>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">9845208316</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 14:56
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $29,31
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.ready} variant="body2" component="p">
                 Ready
               </Typography>
             </Grid>
             <Grid item xs={2}>
               <Button variant="outlined">Delivered</Button>
             </Grid>
           </Grid>
         </CardContent>
         <CardActions>
           <Link to="/ordering/new">
             <Button variant="outlined" size="small">
               New order
             </Button>
           </Link>
         </CardActions>
       </Card>
     </Grid>
     <Grid item xs>
       <Card>
         <CardContent>
           <Typography className={classes.title} color="textSecondary" gutterBottom>
             Table 3
           </Typography>
           <Typography className={classes.pos} variant="h5" component="h2">
             Orders
           </Typography>
           <Grid container className={classes.description}>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Order id
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Date
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Cost
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography variant="body2" component="p">
                 Status
               </Typography>
             </Grid>
             <Grid item xs={2}>
               <Typography variant="body2" component="p">
                 Change status
               </Typography>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">7514895320</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 11:46
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $9,85
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 Delivered
               </Typography>
             </Grid>
             <Grid item xs={2}>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">2039715086</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 12:34
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $42,98
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.ready} variant="body2" component="p">
                 Ready
               </Typography>
             </Grid>
             <Grid item xs={2}>
               <Button variant="outlined">Delivered</Button>
             </Grid>
           </Grid>
           <Grid container>
             <Grid item xs>
               <Link to="/ordering/order/:id">4169800485</Link>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 25.08.19 12:59
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 $30,48
               </Typography>
             </Grid>
             <Grid item xs>
               <Typography className={classes.order} variant="body2" component="p">
                 Ordered
               </Typography>
             </Grid>
             <Grid item xs={2}>
             </Grid>
           </Grid>
         </CardContent>
         <CardActions>
           <Link to="/ordering/new">
             <Button variant="outlined" size="small">
               New order
             </Button>
           </Link>
         </CardActions>
       </Card>
     </Grid>
   </Grid>
    );
}
