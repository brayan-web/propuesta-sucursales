// import logo from './logo.svg';
import './App.css';
import './sass/main.scss'
import ServiciosDeAnalisisClinicos from './components/ServiciosDeAnalisisClinicos ';
import AboutSection from "./components/AboutSection";
import Card from "./components/Card";
import UbiacionLaboratorios from "./components/UbiacionLaboratorios";

function App() {
  return (
    <div className="App">
      <main>
          <AboutSection/>
          <Card/>
          <UbiacionLaboratorios/>
      </main>
    </div>
  );
}

export default App;
