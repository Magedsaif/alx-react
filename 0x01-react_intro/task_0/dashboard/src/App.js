import logo from './logo.jpg';
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
      </div>
      <hr className="myHr" />
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
