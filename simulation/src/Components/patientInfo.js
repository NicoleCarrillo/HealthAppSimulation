import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles,makeStyles} from '@material-ui/core/styles';


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#29a329',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ff6600',
        },
        '&:hover fieldset': {
          borderColor: '#e6b800',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#29a329',
        },
      },
    },
  })(TextField);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'center',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));


  export default function CustomizedInputs() {
    const classes = useStyles();
  
    return (
        <div className="wrapper">
            <form className={classes.root} noValidate>
                <div className="name"> 
                    <CssTextField
                        className={classes.margin}
                        id="name"
                        label="Pantient Name"
                        variant="outlined"
                    />
                </div>
            </form>
            <form className={classes.root} noValidate>
                <div className="name"> 
                    <CssTextField
                        className={classes.margin}
                        id="age"
                        label="Pantient Age"
                        variant="outlined"
                    />
                </div>
            </form>
            <form className={classes.root} noValidate>
                <div className="name"> 
                    <CssTextField
                        className={classes.margin}
                        id="gender"
                        label="Pantient Gender"
                        variant="outlined"    
                    />
                </div>
            </form>
      </div>
    );
  }