import "./RPS.css";

import { useState } from "react";

const RPS = () => {
  const resultsArray = ["✊", "🤚", "✌"];
  const textsArray = [
    "Choose !",
    "YOU WON !",
    "You lost...",
    "It's a TIE :o",
    "The code broke ?",
  ];
  const [difficulty, setDifficulty] = useState(false);
  const [flag, setFlag] = useState(0);
  const [userChoice, setUserChoice] = useState();
  const [aiChoice, setAiChoice] = useState(0);

  const handleGame = (index) => {
    const result = difficulty
      ? index === 0
        ? 1
        : index === 1
        ? 2
        : 0
      : Math.floor(Math.random() * 3);
    setUserChoice(index);
    setAiChoice(result + 1);
    switch (true) {
      case index === result:
        setFlag(3);
        break;

      case index === 0 && result === 1:
      case index === 1 && result === 2:
      case index === 2 && result === 0:
        setFlag(2);
        break;

      case index === 0 && result === 2:
      case index === 1 && result === 0:
      case index === 2 && result === 1:
        setFlag(1);
        break;

      default:
        setFlag(4);
        break;
    }
  };

  const handleReset = () => {
    setUserChoice();
    setAiChoice(0);
    setFlag(0);
  };

  return (
    <section className="App">
      <div>
        <div className="rps-box">
          <div
            className="rps-game"
            style={{
              backgroundColor:
                flag === 1
                  ? "#B0C5A4"
                  : flag === 2
                  ? "#D37676"
                  : flag === 3
                  ? "#9BB0C1"
                  : "var(--text85)",
            }}
          >
            <div className="rps-results">
              {["❔", ...resultsArray][aiChoice]}
            </div>
            <div
              className="rps-text"
              style={{
                color: flag === 0 ? "var(--primary)" : "var(--text)",
              }}
            >
              {textsArray[flag]}
            </div>
            <div className="rps-choose">
              {userChoice !== undefined ? (
                <span onClick={handleReset}>{resultsArray[userChoice]}</span>
              ) : (
                resultsArray.map((item, index) => (
                  <span key={index} onClick={() => handleGame(index)}>
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>
          <div className="rps-settings">
            <div className="rps-selector">
              <h6 style={{ color: difficulty ? "var(--text45)" : "red" }}>
                EASY
              </h6>
              <label className="rps-switch">
                <input
                  type="checkbox"
                  name="difficulty"
                  onChange={() => setDifficulty(!difficulty)}
                />
                <span className="rps-slider rps-round"></span>
              </label>
              <h6 style={{ color: difficulty ? "red" : "var(--text45)" }}>
                IMPOSSIBLE
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RPS;
