import './App.css'
import Age from "./Validation.jsx"
import Props from "./BigValidation.jsx"

function App() {
  return (
    <div className="App">
      <Age age={20} month="5"/>
      <Props propArray={[2,4,6]} propBool={false}/>
    </div>
  )
}

export default App
