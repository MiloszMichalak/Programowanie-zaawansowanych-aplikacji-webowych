import EmailInput from "./inputs/EmailInput"
import ClassDataInput from "./inputs/ClassDataInput"
import './App.css';
import Checkout from "./inputs/FunctionDataInput";
import Checkout2 from "./Checkout";

function App() {
  return (
    <div className="App">
      <EmailInput/>
      <Checkout/>
      <ClassDataInput />
      <Checkout2/>
    </div>
  );
}

export default App;
