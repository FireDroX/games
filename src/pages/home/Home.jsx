import "./Home.css";
import GameBox from "../../components/GameBox/GameBox";

const Home = () => {
  return (
    <section className="App">
      <div>
        <div className="home-container">
          <GameBox
            name="RPS"
            description="Rock Paper Scissors"
            path="rps"
            color="#9E87F1"
          />
          <GameBox color="#9B6869" />
          <GameBox color="#E9A57E" />
          <GameBox color="#BAABBF" />
          <GameBox color="#EC5ED8" />
          <GameBox color="#D3FE79" />
          <GameBox color="#6277AE" />
          <GameBox color="#6ECFAA" />
          <GameBox color="#D14159" />
        </div>
      </div>
    </section>
  );
};

export default Home;
