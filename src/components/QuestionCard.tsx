import React from "react";
import { AnswerObject } from '../App';

// import styled components
import { QuestionCardStyle, ButtonStyle } from './QuestionCard.styles';

// use typescript to establish props variable `types`
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

// use `React.FC` to tell TypeScript what type of component `QuesitionCard` is (Functional Component)...
// then use `<>` to pass in the `Props` type object into the component
// destructure `Props` object into component
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions
}) => {
  return (
    <QuestionCardStyle>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}  
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <ButtonStyle
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback} >
              <span dangerouslySetInnerHTML={{ __html:answer }} />
            </button>
          </ButtonStyle>
        ))}
      </div>
    </QuestionCardStyle>
  );
}

export default QuestionCard;