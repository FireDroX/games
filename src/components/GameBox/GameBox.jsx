import "./GameBox.css";
import { useNavigate } from "react-router-dom";

const GameBox = ({ name, description, color = "var(--bg)", path }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/games/" + path);

  return (
    <div
      className="card-container"
      style={{ backgroundColor: color }}
      onClick={handleNavigate}
    >
      <h6>{name}</h6>
      <small>{description}</small>
    </div>
  );
};

export default GameBox;
