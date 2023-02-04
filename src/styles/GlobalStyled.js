import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Varela Round', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    }

    :root {

        --black: #1A1A1A;
        --grey1: #b5b6ba;
        --grey2: #7a7d85;
        --grey3: #404145;
        --white: #FFFFFF;
    }
    ::placeholder {
        /* color: var(--blue1); */
        opacity: 1;
    }
    ::selection {
        /* background-color: var(--blue1); */
        /* color: var(--blue5); */
    }

    *{
        overflow-y : hidden;
        overflow-x : hidden;
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        /* font-family: 'bar', sans-serif; */
    }

    html, textarea {
        /* color: var(--blue1); */
        direction: rtl;
        font-family: 'Varela Round', sans-serif;
        line-height: 1.6;
    }
    
    body {
        background-color: var(--white);
        /* color: var(--blue1); */
        height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    h1, h2, h3, h4, h5, h6, p {
        /* font-family: 'Lato', sans-serif; */
        font-family: 'Varela Round', sans-serif;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        font-family: 'Varela Round', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        width: 100%;
    }

    .w-80{
        width: 80%;
    }

    .flex {
        display: flex;
    }

    .flex-1{
        flex: 1;
    }

    .flex-end {
        justify-content: flex-end;
    }
    .column {
        flex-direction: column;
    }
    .space-between{
        justify-content: space-between;
    }
    .align-center {
        align-items: center;
    }

    .space-evenly {
        justify-content:space-evenly;
    }

    .justify-center{
        justify-content: center;
    }
    .justify-end{
        justify-content: flex-end;
    }

    .absolute {
        position: absolute;
    }
    .relative {
        position: relative;
    }

    .column-reverse {
        flex-direction: column-reverse;
    }

    .margin-auto{
        margin: 0 auto;
    }
    
    .red{
        background-color:red;
    }

    .green{

        background-color: green;

    }

    .yellow{
        background-color: yellow;
    }
`;

export default GlobalStyle;