import styled, { createGlobalStyle } from 'styled-components';
import mVdc from './marvelVdc.jpg';

// use `createGlobalStyle` for global styling
export const  QuizStyle = createGlobalStyle`
// set styles like you would in a css file
  html {
    height: 100%;
    max-height: 100vh;
    overflow-y: scroll;
  }

  body {
    background-color: #000;
    background-image: url(${mVdc});
    background-size: 90%;
    background-position: center;
    background-repeat: no-repeat;
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

  .setting {
    display: flex;
    justify-content: space-around;
    color: #000;
    font-size: 2rem;
    margin: 0.25em;
    padding: 0.15em;
    max-width: 90%;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #000;
    box-shadow: 0px 5px 10px rgba(255,0,255,0);
    text-align: center;
  }

  h1 {
    font-family: 'Baloo Da 2', sans-serif;
    color: black;
    border: 2px solid #000;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 400
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin-bottom: 0.1em;
    background: #ebfeff;
    border-radius: 10px;
    padding: 20px;
  }

  .settings {
    display: flex;
    justify-content: space-around;
    background: #ebfeff;
    border-radius: 10px;
    padding: 20px;
  }

  .start, .modeSelect, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #000;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
    background: linear-gradient(180deg, #56ffa4, #59bc86)
  }
  
  .newGame {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 90%;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #000;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: center;
  }
`;