# Core Intro to Git and GitHub
## for Girl Develop It Raleigh-Durham
This is a fork of the official Girl Develop It Core Intro to Git and Github course. Material based on original material by Kim Moir, Daniel Fischer, Aurelia Moser, Carina C. Zona and Izzy Johnston.

The course is meant to be taught in a two-hour workshop.

###Resources for Learning Git & GitHub
* [The Official Docs](http://git-scm.com/doc)
* [Git Cheatsheet](http://ndpsoftware.com/git-cheatsheet.html): There are lots of cheatsheets out there, but this one is a visual illustration of git structure and commands.
* [Git Immersion](http://gitimmersion.com/): a great in-depth tutorial with hands-on exercises.
* [Pro Git](http://git-scm.com/book/en/v2): a very thorough reference. If Git can do it, you'll find it here.
* [Atlassian's Git Tutorials](https://www.atlassian.com/git/tutorials):from the creator of (among other things) [SourceTree](https://www.atlassian.com/software/sourcetree/overview), a free visual git tool for Mac & Windows.
* [Git Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows/#!workflow-gitflow): an overview of different ways that teams can use git.

### Slidedeck details
[Reveal.js](https://github.com/hakimel/reveal.js) is a library that lets you create a slick slidedeck. It is installed here as a submodule (a git repository within a git repository, if you will). See the [Pro-Git chapter on submodules](http://git-scm.com/book/en/v2/Git-Tools-Submodules).

### Gulp
[Gulp.js](https://github.com/gulpjs/gulp) is used here to compile Sass, build the site, deploy it locally, and watch for changes, among other tasks. You can use this repo without using Gulp. But if you want to use it, you'll need to install Node, and then install Gulp globally (via [npm](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md_)) as well as in your project. See [the Gulp project repo](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) for instructions on installation and use. 

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
