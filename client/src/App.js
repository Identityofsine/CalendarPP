import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainPage/>
      </header>
    </div>
  );
}

export default App;
