import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (l = String) => navigate("/games/" + l);
  return (
    <section className="App">
      <div>
        <div onClick={() => handleNavigate("rps")}>Go to RPS</div>
      </div>
    </section>
  );
};

export default Home;
