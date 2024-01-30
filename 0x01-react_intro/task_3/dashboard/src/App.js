import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" className="logo"></img>
        <h1>School dashboard</h1>
      </div>
      <hr className="myHr" />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label>
            Email:
            <input placeholder="e-mail"></input>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input placeholder="password"></input>
          </label>
        </div>
        <button>OK</button>
      </div>
      <hr className="myHr" />
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
