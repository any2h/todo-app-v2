import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        transition: all .15s ease-in-out;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul {
        list-style: none;
        padding: 0;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        padding-inline: 1rem;
        text-rendering: optimizeSpeed;
        font-family: 'Karla', sans-serif;
        line-height: 1.5;
        font-size: 1.125rem;
        color: ${({theme}) => theme.fontColor};
        background-color: ${({theme}) => theme.body};
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    input[type="checkbox"]+label,
    button {
        font: inherit;
        cursor: pointer;
    }

    ${'' /* input:focus {
        outline: 1px solid #DC7BFE;
    } */}
` 
