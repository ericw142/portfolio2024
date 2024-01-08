import './App.css';
import { BrandHeader } from './components/BrandHeader';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <div id="brand-wrapper">
          <div className="padding">
            <div className="flex-row">
              <div className="flex-col">
              <Portfolio />
              <About />
              </div>
              <div className="flex-col">
                  <BrandHeader />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
