import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Iceberg&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
        font-family: "Iceberg", sans-serif;
        margin: 0;
        padding: 0;
        background-color: #282c34;
    }
    `;

export default GlobalStyle;

export const Container = styled.div`
   max-width: 1024px;
   width: 100%;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 3fr;
   background-color: #282c34;
     font-family: "Iceberg", sans-serif;

`;


