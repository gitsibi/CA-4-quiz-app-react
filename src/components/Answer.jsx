/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Question from './Question';
import "./Answer.css";
export default function Answer({ score, onRestart }) {
  const handleRestart = () => {
    if (onRestart) {
      onRestart();
    }
  };

  return (
    <div>
      <div className="displayOutput">
        <p> <h5>Final Results</h5>{score / 20} out of 10 are correct - ({score}%)</p>
        <button onClick={handleRestart}>RESTART</button>
      </div>
    </div>
  );
}
