import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #fff;
    --secondary-color: #f3f3f3;
    --highlight-color: #82c3bf;
    --header: #06132f;
    --primary-background: #06132f;
    --secondary-background:rgb(16, 27, 49);
    --font-family: 'Montserrat', sans-serif;
  }
  
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--primary-background);
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
