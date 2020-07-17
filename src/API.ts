// https://opentdb.com/api.php?amount=10&category=29
import { shuffleArray } from './utils';

// establish `type` for all used variables so JS knows what data types to look for/interpret (i.e. string, number, array, boolean, any, null, etc)
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

//
export type QuestionState = Question & { answers: string[] }

// use `enum` to 
export enum Difficulty {
  Normal = 'medium',
  Hard = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=29&difficulty=${difficulty}`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer
    ]) 
  }));
}