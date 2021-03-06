import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FaStopCircle } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.onClickHide}
        className={classes.button}
        endIcon={<FaStopCircle color="#ffffff" />}
      >
        New Patient
      </Button>
    </div>
  );
}
