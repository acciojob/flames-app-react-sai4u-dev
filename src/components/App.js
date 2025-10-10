import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateRelationship = () => {
    if (name1.trim() === "" || name2.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    let name1Arr = name1.split("");
    let name2Arr = name2.split("");

    for (let i = 0; i < name1Arr.length; i++) {
      const indexInName2 = name2Arr.indexOf(name1Arr[i]);
      if (indexInName2 !== -1) {
        name1Arr[i] = "";
        name2Arr[indexInName2] = "";
      }
    }

    const remainingLettersCount =
      name1Arr.filter((ch) => ch !== "").length +
      name2Arr.filter((ch) => ch !== "").length;

    const relationshipMap = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    const flamesResult = remainingLettersCount % 6;
    setResult(relationshipMap[flamesResult]);
  };

  const clearInputs = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      <input
        type="text"
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" name="clear" onClick={clearInputs}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
