import logo from './logo.svg';
import './App.css';
import { Widget } from "./Widget";

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Widget />
    </div>
  );
}

export default App;
