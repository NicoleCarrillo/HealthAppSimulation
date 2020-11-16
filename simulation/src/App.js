import './App.css';
import PatientInfo from "./Components/patientInfo"
import InputWeight from "./Components/inputWeight"
import { FaNutritionix } from "react-icons/fa";
import ButtonStart from "./Components/buttonStart";
import ButtonChange from "./Components/buttonChange";
import Graph from "./Components/graph";

function App() {
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
            <div className="data">Week 1</div>
            <InputWeight/>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 2</div>
            <InputWeight/>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 3</div>
            <InputWeight/>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 4</div>
            <InputWeight/>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 5</div>
            <InputWeight/>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 6</div>
            <InputWeight/>
          </div>
        </div>
        <div className="wrapper4">
            <div className="a">
            <ButtonStart/>
            </div>
            <div className="b">
            <ButtonChange/>
          </div>
          <div className="c">
            <Graph></Graph>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
