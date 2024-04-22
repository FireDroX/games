import "./PwdInput.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PwdInput = () => {
  const [hidden, setHidden] = useState(true);
  const [pwd, setPwd] = useState("");
  const [isAllGood, setIsAllGood] = useState(false);
  const [send, setSend] = useState(false);

  const handleInput = (password) => {
    setPwd(password);

    if (
      password.match(
        /^(?!.*\s)(?=.{8,256}$)(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[~!@#$%^&*()-=_+[\]{}|;:,./<>?])).*$/gm
      )
    )
      setIsAllGood(true);
    else setIsAllGood(false);
  };

  return (
    <section className="App">
      <div>
        <div className="pwd-container">
          {!send ? (
            <>
              <div className="pwd-inputContainer">
                <label className="pwd-label">Username</label>
                <input
                  autoComplete="off"
                  name="Username"
                  className="pwd-input"
                  type="text"
                />
              </div>
              <br />
              <div className="pwd-inputContainer">
                <label className="pwd-label">Password</label>
                <input
                  autoComplete="off"
                  name="Password"
                  className="pwd-input"
                  type={hidden ? "password" : "text"}
                  value={pwd}
                  onChange={(e) => handleInput(e.target.value)}
                />
                <span className="pwd-icon" onClick={() => setHidden(!hidden)}>
                  {hidden ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="pwd-requirements">
                <small
                  style={{
                    color: pwd.match(/^(?!.*\s)(?=.{8,256}$).*$/gm)
                      ? "#a2c11c"
                      : "#bc2525",
                  }}
                >
                  - Entre 8 et 256 caractères.
                </small>
                <small
                  style={{
                    color: pwd.match(/^(?!.*\s)(?=.*[a-z])(?=.*[A-Z]).*$/gm)
                      ? "#a2c11c"
                      : "#bc2525",
                  }}
                >
                  - Une minuscule et une MAJUSCULE.
                </small>
                <small
                  style={{
                    color: pwd.match(
                      /^(?!.*\s)((?=.*[0-9])|(?=.*[~!@#$%^&*()-=_+[\]{}|;:,./<>?])).*$/gm
                    )
                      ? "#a2c11c"
                      : "#bc2525",
                  }}
                >
                  - Un chiffre ou un caractère spécial.
                </small>
              </div>
              <button
                disabled={!isAllGood}
                style={{ borderColor: isAllGood ? "#a2c11c" : "#bc2525" }}
                onClick={() => setSend(!send)}
              >
                Continue
              </button>
            </>
          ) : (
            <div className="wrapper">
              {" "}
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                {" "}
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />{" "}
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PwdInput;
