/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import questions from '../questions';
import './Question.css';
import Answer from './Answer';

export default function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [darkModeText, setDarkModeText] = useState("Dark Mode");
  const totalQuestions = 10; 
  const currentQuestion = questions[currentIndex];
  const handleButtonClick = (selectedOption) => {
    if (selectedOption.isCorrect) {
      setCurrentScore((prevScore) => prevScore + 20);
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setHighlighted(false);
  };

  const handleHighlight = () => {
    setHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setHighlighted(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setCurrentScore(0);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setDarkModeText(darkMode ? "Dark Mode" : "Light Mode");
  };

  return (
    <div className={`quiz-app ${darkMode ? 'darken' : ''}`}>
      <div>
        <div className={`navbar ${darkMode ? 'darken' : ''}`}>
          <p>Kalvium</p>
          <h1>QUIZ</h1>
          <div className="lightNdark">
            <button className='dark' onClick={toggleDarkMode}>{darkModeText}</button>
          </div>
        </div>
        {
          currentQuestion ? (
            <div className={`QuestionsBox ${darkMode ? 'darken' : ''}`}>
              <h6>Question {currentIndex + 1} of {totalQuestions}</h6>
              <h2 className={`question ${highlighted ? 'highlighted' : ''}`}>{currentQuestion.text}</h2>
              <div className={`options ${darkMode ? 'darken' : ''}`}>
                {currentQuestion.options.map((option, index) => (
                  <button className={`optBtn ${darkMode ? 'darken' : ''}`} key={option.id} onClick={() => handleButtonClick(option)}>
                    {['I', 'II', 'III', 'IV'][index]}. {option.text}
                  </button>
                ))}
              </div>
              <div className="highlightBtns">
                <button onClick={handleHighlight}>HIGHLIGHT</button>
                <button onClick={handleRemoveHighlight}>REMOVE HIGHLIGHT</button>
              </div>
            </div>
          ) : (
              <>
                <div className={`resultPage ${darkMode ? 'darken' : ''}`}>
                  <Answer score={currentScore} onRestart={handleRestart} />
                </div>
              </>
            )
        }
      </div>
    </div>
  );
}
