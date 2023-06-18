import logo from './logo.svg';
import './App.css';
import GameComponent from './Components/GameComponent';
import Information from './Components/Information';
import Navbar from './Components/Navbar';
import Directions from './Components/Directions';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Information/>
    <GameComponent/>
    <Directions/>
    </div>
  );
}

export default App;
