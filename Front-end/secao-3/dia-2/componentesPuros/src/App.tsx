import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting name="Maria" />
      <Greeting name="Miguel" />
    </div>
  );
}

export default App;
