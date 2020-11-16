import './App.css';
import PatientInfo from "./Components/patientInfo"
import { FaNutritionix } from "react-icons/fa";
import Button from "./Components/button";

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
            <div className="data">hello2</div>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 2</div>
            <div className="data">hello4</div>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 3</div>
            <div className="data">hello4</div>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 4</div>
            <div className="data">hello4</div>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 5</div>
            <div className="data">hello4</div>
          </div>
          <div className="wrapperMini">
            <div className="data">Week 6</div>
            <div className="data">hello4</div>
          </div>
        </div>
        <div className="wrapper4">
          <div className="wrapper5">
            <div className="start">
              <Button name="Temperatura"/>
            </div>
            <div className="end">end</div>
          </div>
          <div className="grafica">grafica</div>
        </div>
      </div>
    </div>
  );
}

export default App;
