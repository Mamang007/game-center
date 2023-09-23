const Home = () => {
  const isHome = true;

  return (
    <>
      {isHome && (
        <main>
          <h1 className="title">ABDANSYAK Game</h1>
          <div className="content">
            <div className="game-list">
              <div className="game-box">
                <img src="../assets/game-icon/suit.png" alt="Suit Game" />
                <h2>Game Suit</h2>
              </div>
              <div className="game-box">
                <img src="../assets/game-icon/suit.png" alt="Suit Game" />
                <h2>Game TicTacToe</h2>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
