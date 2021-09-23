import './App.css';
import About from './components/About';
import { Header } from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
