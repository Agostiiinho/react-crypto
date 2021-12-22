import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

body{
    background-color: #03091F;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
}

a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
}

p{
    line-height: 2rem;
}

.before{
    position: relative;
    padding-left: 3rem;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 35px;
        height: 2px;
        background-color: #395FF6;
    }
}

.after{
    position: relative;
    padding-right: 3rem;
    &::after{
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 35px;
        height: 2px;
        background-color: #395FF6;
    }
}

.GradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    padding: 0 1rem;
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
}

.gradient-cards-con{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
}
`;

export default GlobalStyle;
