import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div className="App">
        <NavBar />
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
    </div>
    </>
  );
}

export default App;
