import { useState } from "react";
import Button from "../components/Button";
import handRock from "../assets/suit/batu.png";
import handPaper from "../assets/suit/kertas.png";
import handScissors from "../assets/suit/gunting.png";
import quesionMark from "../assets/suit/question-mark.png";

const Suit = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  setTimeout(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((e) => observer.observe(e));
  }, 100);

  const [comSign, setComSign] = useState(quesionMark);
  const [result, setResult] = useState("Pick Hand Sign!");
  const [isStart, setIsStart] = useState(false);

  const [playerWin, setPlayerWin] = useState(0);
  const [comWin, setComWin] = useState(0);

  /////START GAME/////
  const signArr = [handRock, handPaper, handScissors];
  const resultArr = ["Rock", "Paper", "Scissors"];
  let randomSign;

  const playerChoice = (name) => {
    randomSign = Math.floor(Math.random() * 3);
    setComSign(signArr[randomSign]);
    setIsStart(true);

    switch (name) {
      case "Rock":
        document.getElementById("player-paper").style.opacity = "0";
        document.getElementById("player-scissors").style.opacity = "0";
        break;
      case "Paper":
        document.getElementById("player-rock").style.opacity = "0";
        document.getElementById("player-scissors").style.opacity = "0";
        break;
      case "Scissors":
        document.getElementById("player-rock").style.opacity = "0";
        document.getElementById("player-paper").style.opacity = "0";
        break;
    }

    handleResult(name, resultArr[randomSign]);
  };

  /////RESULT/////
  const handleResult = (player, com) => {
    if (player === com) {
      setResult("It's a tie");
    } else if (player === "Rock" && com === "Scissors") {
      setResult("Player wins!");
      setPlayerWin(playerWin + 1);
    } else if (player === "Paper" && com === "Rock") {
      setResult("Player wins!");
      setPlayerWin(playerWin + 1);
    } else if (player === "Scissors" && com === "Paper") {
      setResult("Player wins!");
      setPlayerWin(playerWin + 1);
    } else {
      setResult("Computer wins!");
      setComWin(comWin + 1);
    }
  };

  /////Play Again/////
  const refresh = () => {
    document.getElementById("player-rock").style.opacity = "1";
    document.getElementById("player-paper").style.opacity = "1";
    document.getElementById("player-scissors").style.opacity = "1";
    setComSign(quesionMark);
    setIsStart(false);
    setResult("Pick Hand Sign!");
  };

  return (
    <>
      <main>
        <Button name="Back" customStyle="back-button hidden" target="/" />
        <h1 className="title hidden" style={{ transform: "translateX(0)" }}>
          Suit Game
        </h1>
        <div className="content hidden" style={{ transform: "translateX(0)" }}>
          <div className="game">
            <div className="field">
              <div className="suit-container">
                <h3>PLAYER</h3>
                <div className="hand">
                  <img
                    id="player-rock"
                    src={handRock}
                    alt="Rock"
                    onClick={() => {
                      if (!isStart) return playerChoice("Rock");
                    }}
                  />
                  <img
                    id="player-paper"
                    src={handPaper}
                    alt="Paper"
                    onClick={() => {
                      if (!isStart) return playerChoice("Paper");
                    }}
                  />
                  <img
                    id="player-scissors"
                    src={handScissors}
                    alt="Scissors"
                    onClick={() => {
                      if (!isStart) return playerChoice("Scissors");
                    }}
                  />
                </div>
              </div>
              <h1>vs</h1>
              <div className="suit-container">
                <h3>COM</h3>
                <div className="hand">
                  <img src={comSign} alt={comSign} />
                </div>
              </div>
            </div>
            <div className="suit-result">
              <h1>Count Player Win : {playerWin}</h1>
              <h1>Count Com Win : {comWin}</h1>
              <h1>Result : {result}</h1>
              <Button name="Refresh" customStyle="refresh-button" handleOnClick={() => refresh()} />
            </div>
          </div>
          <div className="score-board">Score Board</div>
        </div>
      </main>
    </>
  );
};

export default Suit;
