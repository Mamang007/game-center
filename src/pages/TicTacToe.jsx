import Button from "../components/Button";

const TicTacToe = () => {
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
        <Button name="Back" customStyle="back-button hidden" target="/" />
        <h1 className="title hidden" style={{ transform: "translateX(0)" }}>
          Tictactoe Game
        </h1>
      </main>
    </>
  );
};

export default TicTacToe;
