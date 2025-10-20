import "./App.css";
import { useState } from "react";
import Loader from "./components/Loader";
import { One, Two, Three, Four, Five, Six } from "./components/SVG";
let Dice = {
  1: <One />,
  2: <Two />,
  3: <Three />,
  4: <Four />,
  5: <Five />,
  6: <Six />,
};

function App() {
  const [dice, setDice] = useState({ dice1: "", dice2: "" });
  const [loading, setLoading] = useState(false);

  const random = (min, max) => {
    return {
      dice1: Math.floor(Math.random() * (max - min + 1) + 1),
      dice2: Math.floor(Math.random() * (max - min + 1) + 1),
    };
  }; ////

  const handleRoll = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDice(random(1, 6));
    }, 2000);
  };
  return (
    <div className="App">
      <h1> Roll the dices</h1>
      {!loading ? Dice[dice.dice1] : ""}
      {!loading ? Dice[dice.dice2] : ""}
      {loading ? <Loader /> : ""}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button style={{ width: "100px", height: "30px" }} onClick={handleRoll}>
          {" "}
          Roll the dices
        </button>
      </div>
    </div>
  );
}
////////
export default App;
