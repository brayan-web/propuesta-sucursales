// import logo from './logo.svg';
import './App.css';
import './sass/main.scss'
import ServiciosDeAnalisisClinicos from './components/ServiciosDeAnalisisClinicos ';
import AboutSection from "./components/AboutSection";
import Card from "./components/Card";
import UbiacionLaboratorios from "./components/UbiacionLaboratorios";


// import OurLabs from "./OurLabs";
// import CardUltrasonidos from "./CardUltrasonidos";
// import BranchUbications from "./BranchUbications";

function App() {
  return (
    <div className="App">
      <main>
          <AboutSection/>
          <Card/>
          <UbiacionLaboratorios/>
          {/*<OurLabs/>*/}
          {/*<CardUltrasonidos/>*/}
          {/*<BranchUbications/>*/}
      </main>
    </div>
  );
}

export default App;
