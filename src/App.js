import Addition from './Components/Addition'
import SubtractionData from './data/subtraction.json'
import AdditionData from './data/additon.json'

import './App.css';

function App() {
  let subtractionList = SubtractionData.map((dataset, i) => {
    return <div key={i}>
      <p>{dataset.problem}</p>
      <p>{dataset.answer}</p>
    </div>
  })
  let additionList = AdditionData.map((dataset, i) => {
    return <div key={i}>
      <p>{dataset.problem}</p>
      <p>{dataset.answer}</p>
    </div>
  })
  return (
    <div className="App">
      {/* {subtractionList}
      {additionList} */}
      <Addition />

    </div>
  );
}

export default App;
