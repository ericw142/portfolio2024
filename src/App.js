import logo from './eric_w.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="brand-header">
        <div className="logo">
            <img src={logo} alt="eric-warshawsky" />
        </div>
        <div className="brand-name">
            <p className="font-32">Eric Warshawsky</p>
            <p className="font-16">Full-Stack Web Developer</p>
        </div>
      </header>
    </div>
  );
}

export default App;
