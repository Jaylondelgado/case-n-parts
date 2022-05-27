import React from "react";
import ReactDOM from "react-dom";
import FlipCard from "./FlipCard";
import "./styles.css";

const FrontCard = () => <div>Front CARD </div>;

const BackCard = () => <div>Back CARD </div>;

function App() {
  return (
    <div className="App">
      <h1>Styled Flip card</h1>
      <FlipCard
        height={300}
        width={400}
        FrontCard={FrontCard}
        BackCard={BackCard}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
