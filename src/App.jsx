import { useState, useEffect } from 'react'
import './App.css'
import Papa from 'papaparse'
import validateEquipment from './utils/validation/validateEquipment';
import equipmentMap from './utils/validation/equipmentMap';
import Errors from "./components/Errors"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)
  const [allErrors, setAllErrors] = useState([])  
  const [showErrors, setShowErrors] = useState(false)  

  async function fetchErrors() {
    let errors = [];
    await fetch( './equipment_list.csv' )
    .then( response => response.text() )
    .then( responseText => {
        var jsonArray = Papa.parse(responseText, {header: true}).data;
        validateEquipment(jsonArray, equipmentMap, errors);
        console.log(errors);
        setAllErrors(errors)
        console.log(JSON.stringify(errors, null, 4))
    })
  }

  useEffect(() => {
    fetchErrors();
  }, []);

  const errorElements = allErrors.map((error, index) => (
    <Errors 
        key={index} 
        index={index} 
        message={error.message} 
        value={error.value}
        line={error.line}
    />
))

  return (
    <div>
      <h1>Errors Detected upon Validation</h1>
      <div className="error-count">
          Error Count: {allErrors.length}
      </div>

      <div className="card">
        <button onClick={() => setShowErrors((prev) => !prev)}>
          Show Errors
        </button>
      </div>

      
      {showErrors && <div className="errors-container">{errorElements}</div>}
      <Footer />
      
    </div>
  )
}

export default App
