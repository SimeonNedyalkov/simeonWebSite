import {
  ScrollText,
  GraduationCap,
  BicepsFlexed,
  PersonStanding,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Skills from "./Skills";
import Code from "./Bio";

export default function Resume() {
  const [selectedSection, setSelectedSection] = useState("Experience");
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
      <nav>
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
          <div>
            <Code />
          </div>
        )}
        {selectedSection === "Education" && (
          <div>Education content goes here.</div>
        )}
        {selectedSection === "Skills" && <Skills />}

        {selectedSection === "Certificates" && (
          <div>About Me content goes here.</div>
        )}
      </div>
    </div>
  );
}
