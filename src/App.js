import './App.css';
import { useState, useEffect } from 'react';
import { BrandHeader } from './components/BrandHeader';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';

function App() {
  const [isMobile, setIsMobile] = useState(false)
 
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  useEffect(() => {
    handleResize()
  }, [])

  return (
    <div className="App">
      {isMobile ? (
        <div id="brand-wrapper">
          <div className="flex-col">
            <BrandHeader />
            <About />
            <Portfolio />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
