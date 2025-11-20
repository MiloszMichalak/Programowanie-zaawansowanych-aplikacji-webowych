import EmailInput from "./inputs/EmailInput"
import ClassDataInput from "./inputs/ClassDataInput"
import './App.css';
import Checkout from "./inputs/FunctionDataInput";

function App() {
  return (
    <div className="App">
      <EmailInput/>
      <Checkout/>
      <ClassDataInput />
    </div>
  );
}

export default App;
