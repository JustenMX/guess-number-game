import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function GameContainer() {
  // State Management
  const [guessNum, setGuessNum] = useState(() =>
    Math.floor(Math.random() * 20 + 1)
  );
  const [alert, setAlert] = useState(
    "Adventure. Excitement. A Jedi craves not these things."
  );

  const handleChange = (value) => {
    setGuessNum(value);
  };

  const guessHandler = () => {
    if (guessNum == 12) {
      setAlert("May the Force be with you.");
    } else if (guessNum >= 13 && guessNum <= 20) {
      setAlert(
        "Do. Or do not. There is no try. You can give up now, though near you are"
      );
    } else if (guessNum < 11 && guessNum >= 0) {
      setAlert("The greatest teacher, failure is.");
    } else {
      setAlert("You are beyond our reach, come back here");
    }
  };

  // When NEW GAME button is clicked a random number is generated and state updates
  const newGameHandler = () => {
    const randomNum = Math.floor(Math.random() * 20 + 1);
    setGuessNum(randomNum);
  };

  return (
    <div>
      <p>Guess a number between 1 and 20</p>
      <h1>{guessNum}</h1>
      <Input
        type="number"
        value={guessNum}
        label="Enter Guess"
        guessNumFunc={handleChange}
      />
      <Button label="GUESS!" callFunc={guessHandler} />
      <Button label="NEW GAME" callFunc={newGameHandler} />
      <p>{alert}</p>
    </div>
  );
}

export default GameContainer;
