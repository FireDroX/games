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
          <GameBox
            name="Password"
            description="REGEX Verification"
            path="password"
            color="#9B6869"
          />
          <GameBox
            name="Horloge"
            description="7seg Clock"
            path="horloge"
            color="#E9A57E"
          />
          <GameBox
            name="Pokemon"
            description="Choose your Pokemon"
            path="pokemon"
            color="#BAABBF"
          />
          <GameBox
            name="Sudoku"
            description="Just a random Sudoku"
            path="sudoku"
            color="#EC5ED8"
          />
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
