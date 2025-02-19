import { useState } from "react";
import question from "./questions.js";
import Result from "./Result.jsx";
import "./Quiz.css"
export default function QuizQuestion() {
  const [crnIdx, setCrnIdx] = useState(0);
  const [ans, setAns] = useState("");
  const [result, setResult] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  function handleChange(e) {
    setAns(e.target.value);
  }

  function handleOnclick(e) {
    e.preventDefault();
    if (ans === question[crnIdx].answer) {
      setResult(result + 1);
    }
    if (question.length - 1 > crnIdx) {
      setCrnIdx(crnIdx + 1);
      setAns("");
    } else {
      setIsComplete(true);
    }
  }
  if (isComplete) {
    return <Result score={result} />;
  }
  return (
    <>
      <div className="container">
        <h1 className="question">{question[crnIdx].q}</h1>
        <ul style={{ listStyleType: "lower-alpha" }}>
          <li>{question[crnIdx].option.a}</li>
          <li>{question[crnIdx].option.b}</li>
          <li>{question[crnIdx].option.c}</li>
          <li>{question[crnIdx].option.d}</li>
        </ul>
        <form onSubmit={handleOnclick} className="ansForm">
        <input 
          type="text"
          placeholder="Enter You'r Answer (e.g. a, b, b & d). . . . . . . ."
          onChange={handleChange}
          value={ans}
          required
          className="ansInput"
        />
        <button type="submit" className="submitBtn">Next</button>
      </form>
      </div> 
    </>
  );
}
