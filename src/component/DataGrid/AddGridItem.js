import React from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Button, Container, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 20,
    marginLeft: 12,
    height: 440,
    width: 500
  },
}));

export const AddGridItem = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card className={classes.root}>
      <Container>
        <Grid>
        <AddIcon style={{marginTop: '180px', marginLeft: '125px' ,fontSize: '50px'}}>
          </AddIcon>
        </Grid>
      </Container>
      
      
      <CardActions disableSpacing>
        <CardActions>
        <Button size="small" style={{marginTop: '150px'}} disableRipple >Add More....</Button>
      </CardActions>
      </CardActions>
      
    </Card>
    
  );
}
