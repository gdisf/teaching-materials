# Core Intro to Git and GitHub
## for Girl Develop It Raleigh-Durham
This is a fork of the official Girl Develop It Core Intro to Git and Github course. Material based on original material by Kim Moir, Daniel Fischer, Aurelia Moser, Carina C. Zona and Izzy Johnston.

The course is meant to be taught in a two-hour workshop. 

###Slidedeck details
[Reveal.js](https://github.com/hakimel/reveal.js) is a library that lets you create a slick slidedeck. It is installed here as a submodule (a git repository within a git repository, if you will). See the [Pro-Git chapter on submodules](http://git-scm.com/book/en/v2/Git-Tools-Submodules). 

### Theme customization

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});
```
