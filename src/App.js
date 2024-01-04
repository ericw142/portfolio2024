import logo from './eric_w.jpeg';
import './App.css';
import { ContentSection } from './components/ContentSection';
import { About } from './components/About';
import { SkillsServices } from './components/SkillsServices';
import { Portfolio } from './components/Portfolio';
import { ContactInformation } from './components/ContactInformation';

function App() {
  return (
    <div className="App">
      <header id="brand-header">
        <div className="logo">
            <img src={logo} alt="eric-warshawsky" />
        </div>
        <div className="brand-name">
            <p className="font-32 font-bold">Eric Warshawsky</p>
            <p className="font-16">Full-Stack Web Developer</p>
        </div>
      </header>
      <ContentSection title="About" innerContent={<About />} />
      <ContentSection title="Skills and Services" innerContent={<SkillsServices />} />
      <ContentSection title="Portfolio" innerContent={<Portfolio />}/>
      <ContentSection title="Contact Information" innerContent={<ContactInformation />}/>
    </div>
  );
}

export default App;
