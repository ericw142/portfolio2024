import './App.css';
import { BrandHeader } from './components/BrandHeader';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <div id="brand-wrapper">
          <BrandHeader />
          <Portfolio />
      </div>
    </div>
  );
}

export default App;
