import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
  font-family: 'VT323', monospace;
  color: white;

  background: #000;

  display: flex;
  justify-content: center;
width: 100vw;
  scroll-behavior: smooth;
}

.bttpai button {

  border: none !important;
}

.wallet-adapter-button wallet-adapter-button-trigger{

border: none !important;

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button, a {
  cursor: pointer;
}

#__next {
  width: 100%;
}
`;
