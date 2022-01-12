# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Toggle the color scheme between light and dark mode *(optional)*


### Links

- Live Site URL: https://2xg-dev.github.io/CountriesRestAPIWebsite/

## My process

Started with the markup of the site in mobile view , mocking up the country card element which was going to be generated dynamically in the javascript.

Added styles , based on the mobile design , which I broke up into different style sheets all imported from the main style.css file , altough this is not a recommended practice because the client will have
to request multiple files. A better practice would have been to use a css transpiler like SASS to build/prefix/minify the css for production.

When I was happy with the way the website looked with the mockup country cards, I copied the markup over to the javascript side and used string templates to add the data coming from the API

Last I built the contry page , which is different from the challenge page.

For the desktop I only added one media query to center the elements of the country page.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### Continued development

Javascript requires refactoring to improve performace and readability
