import React, { useState } from 'react';
import { fetchQuizQuestions, QuestionState, Difficulty } from './API';
import QuestionCard from "./components/QuestionCard";
// styles for styled components
import { QuizStyle, Wrapper } from './app.styles';

// easy to modify
const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {

  const [loading, setLoading] = useState(false);
  // import `types` for state
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number , setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] =  useState(true);
  // `mode` created to set difficulty
  const [mode, setMode] = useState<Difficulty>(Difficulty.Normal);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    // pass values to function from `./API`;
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      mode
    );

    // resets game with 0 points, blank arrays, and new questions
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  //
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // save user answer
      const answer = e.currentTarget.value;
      // compare to correct answer
      const correct = questions[number].correct_answer === answer;
      if(correct) {
        setScore(score + 1)
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  //
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <QuizStyle />
      <Wrapper>
        {/* Ternary Op to conditionally render `Start` button, `Score`, and `QuestionCard` */}
        {gameOver ? <h1>Comics Quiz</h1> : null}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          (
            <div className='newGame'>
              <h2>Select Difficulty</h2>
              <sub>(for real, though, it's difficult...)</sub>               
              <div className='settings'>
                <button className='modeSelect' onClick={() => setMode(Difficulty.Normal)}>Normal</button>
                <button className='modeSelect' onClick={() => setMode(Difficulty.Hard)}>Hard</button>
              </div>
              {mode !== undefined ? <button className='start' onClick={startQuiz}>Start</button> : "Select Difficulty"}
            </div>
          ) : 
          null
        }
        {gameOver && userAnswers.length === TOTAL_QUESTIONS ?
          userAnswers.map(result => {
            return(
              <div>
                <p>{result.question}</p>
                <p>{result.answer}</p>
                <p>{result.correctAnswer}</p>
                <p>{result.correct}</p>
              </div>
            )
          }):
          null
        })
        
        {!gameOver ? (
          <div className='setting'>
            <p>Difficulty: {mode === Difficulty.Normal ? 'Normal' : 'Hard'} <br/>Score: {score}</p>
          </div>
        ) : ''}
        {loading ? <p>Loading Quiz</p> : ''}
        {!loading && !gameOver ?
          (<QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />)
          : ''
        }

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
          <button
            className="next"
            onClick={nextQuestion}
          >
            Next Question
          </button>
          : null          
        }
      </Wrapper>
    </>
  );
}

export default App;

