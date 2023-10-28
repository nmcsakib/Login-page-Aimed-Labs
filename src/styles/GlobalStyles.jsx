import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

body{
background-color: ${({theme}) => theme.color.backgroundColor};
font-family: 'Inter';
font-weight: 500;
}
`;
export default GlobalStyles;