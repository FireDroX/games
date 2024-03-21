import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/games/");
  return (
    <div className="nav-container">
      <img src={Logo} alt="Logo" onClick={handleNavigate} />
    </div>
  );
};

export default Navbar;
