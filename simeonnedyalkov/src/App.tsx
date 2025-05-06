import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import NoDemo from "./components/No";
import Resume from "./components/Resume";
import Contacts from "./components/contacts/Contacts";
import HireMe from "./components/HireMe";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/no" element={<NoDemo />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/hireme" element={<HireMe />} />
      </Routes>
    </>
  );
}

export default App;
