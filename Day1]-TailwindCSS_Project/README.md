# Code & Workout 1st-Day Challenge 🏋️‍♂️💻 
Date:[25-3-25]

Welcome Day-1 to my **Code & Workout 1-Week Challenge**! 🚀 

## 📌 Goal:
- Create basic website using Tailwind CSS 
- Proper Installation of Tailwind CSS


BASIC_REACT
   ├── TAILWIND_TUT
   └── TAILWIND_LEARN


===================


# Tailwind CSS Way

#### Documentation -

### Tailwind
- A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- Tailwind similar as Inline CSS(at end export only used CSS)

Features of Tailwind -
- API for our design system -> automatically write through already defined class.
- Never ship unused CSS again 
- Tailwind by default is 'Responsive'(mobile 1st approach)
  - By default CSS write for mobile screen.
  - Automatic CSS for Big screens.
- State variant
- Dark mode

--------

(Not Recommended)
## Installation Setup
1] index.html

2] Play CDN
- <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

3] Check installed or not?
Check Live index.html

--------

#### Problems of that way 

Problem 1] - The suggestion of tailwind not showing
Problem 2] - Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not intended for production. 


======================


## Recommended Installation Setup (Proper Installation of tailwind CSS)

### Tailwind using Tailwind CLI
- Check version of node -> `node -v`


#### Steps -

Step-1] File structure

- Create 2 folder distribution -> `dist` & source -> `src`
- `dist`=> its in that final output files for production or server(majorly work on distribution).
- Create -> dist/`index.html`

TAILWINDDEMO
   ├── dist
   │    └── index.html
   └── src
        

Step-2] Install Tailwind CSS

- Install `tailwindcss` and `@tailwindcss/cli` via npm.

```Terminal
npm install tailwindcss @tailwindcss/cli
```


Step-3] Import Tailwind in your CSS

- Add the `@import "tailwindcss";` import to your main CSS file.

TAILWINDDEMO
   ├── dist
   │    └── index.html
   └── src
        └── input.css

src/input.css
```CSS
@import "tailwindcss";

```



Step-4] Start the Tailwind CLI build process

Use the Tailwind CLI to process your `src/input.css` and output the generated CSS to `dist/output.css`. The `--watch` flag enables automatic recompilation when changes are detected.

```Terminal
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

Step-5] Link the Compiled CSS in Your HTML:

In your `dist/index.html`, link the generated `output.css` file.

`dist/index.html`

```HTML
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./output.css">
  <title>Document</title>

</head>
<body class="bg-slate-900">
  <h1 class="text-white text-4xl m-4">Test</h1>
</body>
</html>
```

===================================================


Tailwind Practice -

- Documentation
- VS Code editor
- Target

- See website in component form

===================================================

