import Wave from './components/wave.component';
import SkillsComponent from './components/skills.component';
import './App.css';

function App() {
  return (
    <div className="">
        <div className="App">
          <section className="sticky-section">
            <div className="sub-container">
                <h1>About me</h1>
                <Wave isAC="false"></Wave>
                <p className="description">
                  I am an experienced Web Developer adept in all stages of advanced web development. Knowledgeable in the user interface, testing, 
                  and debugging processes. Bringing forth expertise in design, installation, testing, and maintenance of web apps. Equipped with a 
                  diverse and promising skill-set. Proficient in an assortment of technologies, including <span>Angular</span>, <span>JavaScript</span>, 
                  <span>HTML</span>, <span>CSS</span>, <span>SASS</span>, and <span>Java.</span> Able to effectively self-manage during independent projects, 
                  as well as collaborate in a team setting. 
                </p>
              </div>
          </section>
          <section  className="sticky-section">
            <div className="sub-container">
                <h1>Skills</h1>
                <Wave isAC="true"></Wave>
                <p className="description">
                  <SkillsComponent></SkillsComponent>
                </p>
              </div>
          </section>
        </div>
    </div>
  );
}

export default App;
