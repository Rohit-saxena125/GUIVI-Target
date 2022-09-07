import './App.css';
import Homepage from './Homepage/homepage';
import Signup from './Component/Signup'
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
      <header >
      <Homepage />
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      <h1>Hiiii</h1>
      </header>
    </div>
  );
}

export default App;
