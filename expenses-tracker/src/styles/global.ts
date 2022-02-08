import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #1ea481;
    --color-primary-lg: #24c79c;
    --color-primary-dk: #147058;

    --color-secundary: #0040AE;
    --color-secundary-lg: #0088DF;

    --color-error: #CC6032;
    --color-accent: #535A94;
    --color-gray: #737496;
    --color-gray-lg: #f2f2f2;
    --color-gray-dk: #474968;

    --color-black: #000a09;
    --color-white: #ffffff;
    --color-background: #EEEDFF;

    --padding: 2rem 6.33%;
    --box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.25);
    --border: 01px solid var(--color-gray);
    --border-radius: 4px;

    --svg-color-primary: invert(52%) sepia(53%) saturate(609%) hue-rotate(114deg) brightness(90%) contrast(86%);
    --svg-color-error: invert(38%) sepia(96%) saturate(587%) hue-rotate(337deg) brightness(94%) contrast(84%);
    --svg-color-white: invert(100%) sepia(0%) saturate(7447%) hue-rotate(77deg)
      brightness(106%) contrast(101%);
    --svg-color-gray: invert(55%) sepia(2%) saturate(4948%) hue-rotate(200deg) brightness(84%) contrast(111%);
    --svg-color-gray-lg: invert(100%) sepia(43%) saturate(69%) hue-rotate(47deg) brightness(111%) contrast(90%);
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

html {
    font-size: 62.5%;
}

body {
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;color: var(---color-black);
    font-family: 'Roboto', Arial, Helvetica, sans-serif;     
}

[disabled]{
    opacity: 0.5;
    cursor: not-allowed;
}

/* button {
    padding: 1.25rem 3rem;
    border: none;    
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
} */

p,
button,
input,
select,
option,
label,
li,
span{ 
  font-size: clamp(1.4rem, 2vw, 1.6rem);
}

/* icons */
.icon-close {
     width: 1.6rem;
     filter: var(--svg-color-gray);

     &:hover, &:focus {
    
        filter:  var(--svg-color-gray-lg);    
     }
   }   

.icon-income, .icon-outcome{
  width: 2rem;
      margin-right: 01rem;
}

.icon-income{
  filter: var(--svg-color-primary);
}

.icon-outcome {
  filter: var(--svg-color-error);
}

.icon-money {
  filter: var(--svg-color-white);
}

 .income {
      color: var(--color-primary);
    }

    .income::before{
       content: "+";
    margin-right: 6px;
    }

    .outcome {
      color: var(--color-error);
       }

      .outcome::before {
        content: "-";
    margin-right: 6px;
      }
   

.title {
    font-size: clamp(1.6rem, 4vw, 2rem);
    font-family: 'Poppins', Arial, sans-serif;
    font-weight: 700;
    color: var(--color-gray-dk);
  }

/* modal */
  .modal--overlay{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
}

.modal--content{
  width: 50%;
  position: relative;
  margin-inline: auto;
  padding: 02rem 01rem;
  background: var(--color-white);
  box-shadow: var(--box-shadow);    
}
`;
