import { useState } from "react";
import Home from "./pages/Home";
import Suit from "./pages/Suit";
import TicTacToe from "./pages/TicTacToe";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isSuit, setIsSuit] = useState(false);
  const [isTicTacToe, setIsTicTacToe] = useState(false);

  return (
    <div>
      <Home />
      <Suit />
      <TicTacToe />
    </div>
  );
}

export default App;
