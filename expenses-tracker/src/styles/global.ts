import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* global variables */
:root {
    /* colors */
    --color-primary: #24C59B;
    --color-secundary: #0040AE;
    --color-error: #CC6032;
    --color-accent: #535A94;
    --color-gray: #737496;

    --color-black: #000a09;
    --color-white: #ffffff;
    --color-background: #EEEDFF;

    /* fonts */
h1 {
  font-size: clamp(4rem, 5vw, 5rem);
  font-weight: 600;
  text-align: center;
}

h2 {
  font-size: clamp(3.2rem, 5vw, 4rem);
  font-weight: 600;
}

h3 {
  font-size: clamp(2.5rem, 4vw, 3.2rem);
  font-weight: 600;
}

h4 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 400;
}

h5 {
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 400;
}

h6 {
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  font-weight: 400;
  text-transform: uppercase;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Popins', Arial, Helvetica, sans-serif;
    color: var(---color-black);
}

p,
button,
input,
select,
option,
span,
label,
li {
  color: var(---color-black);
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  font-weight: 400;
}
    /* mix */
    --padding: 2rem 6%;

}

/* reset */
/* source: https://piccalil.li/blog/a-modern-css-reset */
/* Box sizing rules, removing default margin and padding */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed 
Ps.: for this, the ul/ol has to be set as <ul role="list"> or <ol role="list"> - this is part of 
*/
ul[role="list"],
ol[role="list"],
ul,
ol,
li {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
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
button,
textarea,
select {
  font: inherit;
}
/* font is a shorthand for the properies: font-family, font-weight, font-strech, font-variant, font-size */

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* global styles */
html {
    font-size: 62.5%;
}

body {
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
}

[disabled]{
    opacity: 0.5;
    cursor: not-allowed;
}
`;
