import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <p>
          Firman Malik Aziz
        </p>
        <p className='italic'>
          #Berdiridengandocker
        </p>
      </header>
    </div>
  );
}

export default App;
