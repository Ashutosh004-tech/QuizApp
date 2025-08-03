import question from "./questions.js";
export default function Result({ score }) {
  let style = {
    color: "#1c8cfdff",
    textAlign: "center",
    margin: "0",
  };
  return (
    <>
    <h2 className="text-center mt-5 mb-5 text-decoration-underline">Your Score</h2>
    <div style={{ textAlign: "center", margin: "0 auto" }}>
      <p style={{ color: "gold", fontSize: "1.5rem" }}>
        Congratulations &#129395;
      </p>
      <h3 style={style}>Your final Score is : <span style={{color:"#fddc1fff"}}>{score}/{question.length}</span></h3>
    </div>
    </>
  );
}
