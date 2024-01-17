import './App.css';
import { useState, useEffect } from 'react';
import { BrandHeader } from './components/BrandHeader';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { CanvasAnimation } from './components/CanvasAnimation';
import { LinkedInButton } from './components/LinkedInButton';

function App() {
    const [isMobile, setIsMobile] = useState(false);
    
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
            <CanvasAnimation />
            {isMobile ? (
                <div id="mobile-wrapper">
                    <div className="flex-col">
                        <BrandHeader showLinkedIn={false}/>
                        <About />
                        <Portfolio />
                        <LinkedInButton />
                    </div>
                </div>
            ) : (
                <div id="page-wrapper">
                    <div className="padding">
                    <div className="flex-row">
                        <div className="flex-col">
                        <Portfolio />
                        <About />
                        </div>
                        <div className="flex-col">
                            <BrandHeader showLinkedIn={true}/>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
