import "./Sudoku.css";
import { useState, useEffect } from "react";

const DEFAULT_NUMBERS = 20;

function Sudoku() {
  const [isClicked, setIsClicked] = useState([null, null, null, null]);
  const [board, setBoard] = useState(
    Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
      )
    )
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      const input = parseInt(event.key);
      if (isClicked !== undefined) {
        if (input >= 1 && event.key <= 9) {
          if (
            checkBoard("board", isClicked, input) &&
            checkBoard("column", isClicked, input) &&
            checkBoard("row", isClicked, input)
          ) {
            handleBoardUpdate(
              parseInt(isClicked[0]),
              parseInt(isClicked[1]),
              parseInt(isClicked[2]),
              parseInt(isClicked[3]),
              input
            );
          }
        }
        if (input === 0) {
          handleBoardUpdate(
            parseInt(isClicked[0]),
            parseInt(isClicked[1]),
            parseInt(isClicked[2]),
            parseInt(isClicked[3]),
            null
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isClicked]);

  const handleBoardUpdate = (i1, i2, i3, i4, newValue) => {
    const newBoard = [...board];
    newBoard[i1][i2][i3][i4] = newValue;
    setBoard(newBoard);
  };

  const checkBoard = (type, index, input) => {
    switch (type) {
      case "board":
        if (
          !board[index[0]][index[1]]
            .map((innerArray) => {
              return innerArray.map((values) => values);
            })
            .flat()
            .includes(input)
        )
          return true;
        else return false;
      case "column":
        if (
          !board
            .map((innerArray) => {
              return innerArray[index[1]].map((values) => values[index[3]]);
            })
            .flat()
            .includes(input)
        )
          return true;
        else return false;
      case "row":
        if (
          !board[index[0]]
            .map((innerArray) => {
              return innerArray[index[2]].map((values) => values);
            })
            .flat()
            .includes(input)
        )
          return true;
        else return false;

      default:
        return;
    }
  };
  const generateRandomCases = () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1; // Between 1 and 9
    const i1 = Math.floor(Math.random() * board.length);
    const i2 = Math.floor(Math.random() * board[i1].length);
    const i3 = Math.floor(Math.random() * board[i1][i2].length);
    const i4 = Math.floor(Math.random() * board[i1][i2][i3].length);

    if (
      checkBoard("board", [i1, i2, i3, i4], randomNumber) &&
      checkBoard("column", [i1, i2, i3, i4], randomNumber) &&
      checkBoard("row", [i1, i2, i3, i4], randomNumber)
    ) {
      handleBoardUpdate(i1, i2, i3, i4, randomNumber);
    } else generateRandomCases();
  };

  useEffect(function start() {
    for (let i = 0; i <= DEFAULT_NUMBERS; i++) {
      generateRandomCases();
    }
  }, []);

  const handleRightClick = (event) => {
    event.preventDefault();
    setIsClicked([null, null, null, null]);
  };

  const checkWin = () => {
    const flatBoard = board.flat(Infinity);
    if (flatBoard.includes(null)) return false;
    else return true;
  };

  return (
    <section className="App">
      <div>
        <div className="board">
          <h2>Random Sudoku</h2>
          {board.map((sudoku, i1) => (
            <div key={i1} className="line">
              {sudoku.map((line, i2) => (
                <div key={i1 + "-" + i2} className="large_box">
                  {line.map((box, i3) => (
                    <div key={i1 + "-" + i2 + "-" + i3} className="box">
                      {box.map((smallBox, i4) => (
                        <div
                          key={i1 + "-" + i2 + "-" + i3 + "-" + i4}
                          className="small_box"
                          onClick={() => setIsClicked([i1, i2, i3, i4])}
                          onContextMenu={(event) => handleRightClick(event)}
                          style={{
                            backgroundColor:
                              isClicked[0] === i1 && isClicked[1] === i2
                                ? "var(--secondary)"
                                : isClicked[1] === i2 && isClicked[3] === i4
                                ? "var(--secondary)"
                                : isClicked[0] === i1 && isClicked[2] === i3
                                ? "var(--secondary)"
                                : false,
                          }}
                        >
                          {smallBox}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          {checkWin() ? <h1 className="board-win">You won !</h1> : false}
        </div>
      </div>
    </section>
  );
}

export default Sudoku;
