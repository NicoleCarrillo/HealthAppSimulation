import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles,makeStyles} from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#ff0066',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ff6600',
        },
        '&:hover fieldset': {
          borderColor: '#e6b800',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ff0066',
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));


  export default function CustomizedInputs() {
    const classes = useStyles();
    const [age, setAge] = React.useState("");
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className="wrapper">
          <div className="name"> 
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Patient Name</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Patient Name"
              >
              <MenuItem value="">
                <em>Patients Name</em>
              </MenuItem>
              <MenuItem value={10}>Nicole Carrillo Capristán</MenuItem>
              <MenuItem value={20}>Luis Eduardo Núñez Altamirano</MenuItem>
              <MenuItem value={30}>Edgar Pérez Villa</MenuItem>
              </Select>
            </FormControl>
            </div>
            <form className={classes.root} noValidate>
                <div className="name"> 
                    <CssTextField
                        className={classes.margin}
                        id="age"
                        label="Pantient Height"
                        variant="outlined"
                    />
                </div>
            </form>
            <form className={classes.root} noValidate>
                <div className="name"> 
                    <CssTextField
                        className={classes.margin}
                        id="gender"
                        label="Pantient Age"
                        variant="outlined"    
                    />
                </div>
            </form>
      </div>
    );
  }