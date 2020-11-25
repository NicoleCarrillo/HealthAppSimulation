import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlayCircle } from "react-icons/fa";
import inputWeight from "../Components/inputWeight"
import Graph from "../Components/graph";

function prueba(){
  return (<Graph/>);
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <div>
      {}
      <Button
        variant="contained"
        color="primary"
        onClick={props.onClickShow }
        className={classes.button}
        endIcon={<FaPlayCircle color="#ffffff" />}
      >
        Start Prediction
      </Button>
     
    </div>
  );
}
