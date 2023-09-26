import { Link } from "react-router-dom";
import iconSuit from "../assets/game-icon/suit.png";
import iconTicTacToe from "../assets/game-icon/tictactoe.png";

const Home = () => {
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

  return (
    <>
      <main>
        <h1 className="title hidden" style={{ transform: "translateX(0)" }}>
          AbdanSyak Game
        </h1>
        <div className="content">
          <div className="game-list">
            <Link to="/suit">
              <div className="game-box hidden">
                <img src={iconSuit} alt="Game Suit" />
                <h2>Suit</h2>
              </div>
            </Link>
            <Link to="/tictactoe">
              <div className="game-box hidden">
                <img src={iconTicTacToe} alt="Game Suit" />
                <h2>TicTacToe</h2>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
