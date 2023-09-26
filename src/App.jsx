import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Suit from "./pages/Suit";
import TicTacToe from "./pages/TicTacToe";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="suit" element={<Suit />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
