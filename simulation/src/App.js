import './App.css';
import PatientInfo from "./Components/patientInfo"
import InputWeight from "./Components/inputWeight"
import InputWeight1 from "./Components/inputWeight1"
import InputWeight2 from "./Components/inputWeight2"
import { FaNutritionix } from "react-icons/fa";
import ButtonStart from "./Components/buttonStart";
import ButtonExit from "./Components/buttonExit";
import Graph from "./Components/graph";
import Axios from 'axios';
import { Component } from 'react';


class App extends Component {

  state = {
    show:false
  };

  hide = () => {
    this.setState({
      show: false,
    });
  };

  show = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Diet Project Simulator   
          <FaNutritionix color="#ff6600" />
        </div>
        <PatientInfo/>
        <div className="wrapper2">
          <div className="wrapper3">
            <div className="wrapperMini">
              <div className="data">Actual Week</div>
              <InputWeight />
            </div>
            <div className="wrapperMini">
              <div className="data">Week 2</div>
              <InputWeight1/>
            </div>
            <div className="wrapperMini">
              <div className="data">Week 3</div>
              <InputWeight2/>
            </div>
          </div>
          <div className="wrapper4">
              <div className="a">
              <ButtonStart
                onClickShow={() => this.show()}
              />
              </div>
              <div className="b">
              <ButtonExit
                onClickHide={() => this.hide()}
              />
            </div>
            <div className="c">
              {this.state.show?<Graph/>:null}
          </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
