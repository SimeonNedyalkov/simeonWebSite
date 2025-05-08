import {
  ScrollText,
  GraduationCap,
  BicepsFlexed,
  PersonStanding,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Skills from "./Skills";
import Code from "./Code";
import Bio from "./Bio";
import Education from "./Education";
import Certificates from "./Certificates";

function Resume() {
  const [selectedSection, setSelectedSection] = useState("About Me");
  const menuItems = [
    { name: "About Me", icon: PersonStanding },
    { name: "Education", icon: GraduationCap },
    { name: "Skills", icon: BicepsFlexed },
    { name: "Certificates", icon: ScrollText },
  ];

  return (
    <div
      className="app-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <nav className="resumeNav grid-layout">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="menu-item"
            onClick={() => setSelectedSection(item.name)}
          >
            <Button variant="outline" className="resumeButtons">
              <item.icon className="menu-icon" />
              {item.name}
            </Button>
          </div>
        ))}
      </nav>
      <div className="resumeContainer">
        {selectedSection === "About Me" && (
          <div className="flex aboutme">
            <Bio />
            <Code />
          </div>
        )}
        {selectedSection === "Education" && <Education />}
        <div id="skills">{selectedSection === "Skills" && <Skills />}</div>

        {selectedSection === "Certificates" && <Certificates />}
      </div>
    </div>
  );
}
export default Resume;
