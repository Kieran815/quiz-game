import styled, { createGlobalStyle } from 'styled-components';
import QuizBG from './quizBG.jpg';

// use `createGlobalStyle` for global styling
export const  QuizStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${QuizBG});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Dancing Script', sans-serif;
  }
`;

// use `styled` to create styled components
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    color: #fff;
    font-size: 4rem;
  }

  .score, .setting {
    color: #000;
    font-size: 2rem;
    margin: 0
  }

  h1 {
    font-family: 'Montserrat Subrayada', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 400
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .settings {
    display: flex;
    justify-content: space-around;
  }

  .start, .modeSelect, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
  
  .newGame {
    display: flex;
    flex-direction: column;
  }
`;