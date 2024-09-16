import "./Pokemon.css";

import { useState } from "react";

function Pokemon() {
  const [list, setList] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [showSelection, setShowSelection] = useState(false);
  const [loading, setLoading] = useState({});
  const [finished, setFinished] = useState(false);

  // Modified updateList function
  const updateList = (index) => {
    if (list.length !== 0) {
      return new Promise(async (resolve, reject) => {
        try {
          setLoading((prevLoading) => ({
            ...prevLoading,
            [index]: true,
          })); // Start loading
          const random = list[Math.floor(Math.random() * list.length)];
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-form/${random}/`
          );
          const newPokemon = await response.json();
          setList((prevList) => {
            const newList = prevList.filter((n) => n !== random);
            return newList; // Update list correctly
          });
          setPokemon((prevPokemon) => ({
            ...prevPokemon,
            [index]: newPokemon,
          }));
          setLoading((prevLoading) => ({
            ...prevLoading,
            [index]: false,
          }));
          resolve(); // Resolve the promise after the state updates
        } catch (error) {
          console.error("Error fetching data or updating state:", error);
          setLoading((prevLoading) => ({
            ...prevLoading,
            [index]: false,
          }));
          reject(error); // Reject the promise if there is an error
        }
      });
    } else {
      setFinished(true);
      setPokemon((prevPokemon) => ({
        ...prevPokemon,
        [index]: undefined,
      }));
      console.log(pokemon);
    }
  };

  const rangeArray = (min, max) => {
    let result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    setList(result);
    setShowSelection(true);
  };

  return (
    <section className="App">
      <div>
        <div className="pokemonApp">
          <h1>
            Choose your{" "}
            <span
              style={{
                background: `linear-gradient(120deg, var(--primary), var(--accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Pokemon{" "}
            </span>
            !
          </h1>
          <div>
            {!showSelection && (
              <div className="gen">
                <button onClick={() => rangeArray(1, 151)}>Kanto</button>
                <button onClick={() => rangeArray(152, 251)}>Johto</button>
                <button onClick={() => rangeArray(252, 386)}>Hoenn</button>
                <button onClick={() => rangeArray(387, 493)}>Sinnoh</button>
                <button onClick={() => rangeArray(494, 649)}>Unys</button>
                <button onClick={() => rangeArray(650, 721)}>Kalos</button>
                <button onClick={() => rangeArray(722, 807)}>Alola</button>
                <button onClick={() => rangeArray(808, 898)}>Galar</button>
                <button onClick={() => rangeArray(899, 905)}>Hisui</button>
                <button onClick={() => rangeArray(906, 1025)}>Paldea</button>
                <button onClick={() => rangeArray(1, 1025)}>All of them</button>
              </div>
            )}
            {showSelection && (
              <>
                <div className="choose">
                  {!pokemon[0] && !finished ? (
                    <button
                      className="loading-button"
                      onClick={() => updateList(1).then(() => updateList(0))}
                    >
                      Load the Pokemons !
                    </button>
                  ) : (
                    <>
                      {pokemon[0] ? (
                        <div
                          className="pokemon"
                          onClick={() => !loading[0] && updateList(1)}
                        >
                          {loading[0] ? (
                            <div className="loading"></div>
                          ) : (
                            <>
                              <img
                                src={pokemon[0]?.sprites.front_default}
                                alt="Default form"
                              />
                              <img
                                src={pokemon[0]?.sprites.front_shiny}
                                alt="Shiny form"
                              />
                              <small>
                                {pokemon[0]?.pokemon.name?.toUpperCase()}
                              </small>
                            </>
                          )}
                        </div>
                      ) : (
                        false
                      )}
                      {pokemon[1] ? (
                        <div
                          className="pokemon"
                          onClick={() => !loading[1] && updateList(0)}
                        >
                          {loading[1] ? (
                            <div className="loading"></div>
                          ) : (
                            <>
                              <img
                                src={pokemon[1]?.sprites.front_default}
                                alt="Default form"
                              />
                              <img
                                src={pokemon[1]?.sprites.front_shiny}
                                alt="Shiny form"
                              />
                              <small>
                                {pokemon[1]?.pokemon.name?.toUpperCase()}
                              </small>
                            </>
                          )}
                        </div>
                      ) : (
                        false
                      )}
                    </>
                  )}
                </div>
                {!pokemon[0] ? (
                  false
                ) : (
                  <small style={{ color: "var(--text65)" }}>
                    {list.length !== 0
                      ? `${list.length} more !`
                      : finished
                      ? `That's your favorite Pokemon !`
                      : `That's the Last one !`}
                  </small>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pokemon;
