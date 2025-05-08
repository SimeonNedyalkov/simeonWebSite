import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import NoDemo from "./components/No";
import Resume from "./components/Resume";
import Contacts from "./components/contacts/Contacts";
import HireMe from "./components/HireMe";
import { AnimatePresence } from "framer-motion";
// import Transition from "./functions/Transition";

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation></Navigation>
      <AnimatePresence mode="wait">
        {/* <Transition key={location.pathname}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/no" element={<NoDemo />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
        {/* </Transition> */}
      </AnimatePresence>
    </>
  );
}

export default App;
