## Things to do:

- Make Each Component

  - Header
  - Category filter
  - Restaurant List
  - Restaurant Detail Modal
  - AddRestaurant Modal

- Make FigmaJam for project architecture design

- Result Image/Video

## Things that just peaked my interest:

- What is vite?
  - a faster and leaner development experience for modern web projects.
- Why vite?
  - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a development server that provides rich feature enhancements over native ES modules, and a build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.

# During the process

First thing I'm going to make is this Header Component. Personally feel like this is the easiest one to start with.

The approach was simple. I take sections that are divded and make them as a component. Then I just needed to rename from class to className and use the css module for styling.

I also added some of the css that seems to be used in multiple places in the global.css file.

This was the first time I used CSS modules. Had to look at some examples to figure out how to use it.

Had to use {`${style['class-name']}'} due to some of the css being named in kebab-case. I've taken this approach with the help of the docs.

Another issue was where to put the image files. I heard that some people put it in the public folder, but I found out that things that are used in the components should probably go in the src folder.

One of the problems I had was deciding how I should structure my components. I was wondering if I should make a component folder for each component or gather similar components in one folder. In the end I went for the latter.

Found out that my prettier wasn't working properly. After setting prettier as the default formatter for vscode, it formatted the code.
