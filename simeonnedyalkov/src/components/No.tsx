import { useNavigate } from "react-router-dom";
import sorry from "../assets/sorry/sorry-3905517_960_720.webp";
import { Button } from "./ui/button";

export default function NoDemo() {
  const navigation = useNavigate();
  const returnHome = () => {
    navigation("/projects");
  };
  return (
    <div className="no-demo-container">
      <img
        src={sorry}
        width={200}
        height={200}
        alt="Sorry illustration"
        className="no-demo-image"
      />
      <h1 className="no-demo-title">Demo Unavailable</h1>
      <p className="no-demo-message">
        Unfortunately, there is no demo yet deployed for this project.
      </p>
      <p className="no-demo-suggestion">
        Please check back later or contact me for more information!
      </p>
      <Button onClick={returnHome} variant="outline" className="no-demo-button">
        Go Back To Projects
      </Button>
    </div>
  );
}
