# Code & Workout 2nd-Day Challenge 🏋️‍♂️💻 
Date:[26-3-25]

Welcome Day-2 to my **Code & Workout 1-Week Challenge**! 🚀 

## 📌 Goal:
- Create basic counter like functionality (work with hooks) using React & Vite

- Projects folder structure :

BASIC_REACT
   ├── 01vitereact
   └── 02counter



===================


# 🚀 React using Vite bundler

This project is built using **Vite** for a fast and optimized development experience.  

## 📌 Features  
✅ Fast development with **Vite**  
✅ Component-based architecture with **React**  
✅ State management with **useState**  

## Installation steps :-

Step 1]
  - `npm create vite@latest`

Step 2]
  - Add project name : `01vitereact`
  - Select a framework : `React`
  - Select a variant : `JavaScript`

Step 3]
  - `cd 01vitereact`
  - `npm install` // for node module folder

Step 4]
  - `npm run dev`


### NOTE -
- Browser don't understand React (Only HTML,CSS,JS)
- Main File in => `src/main.jsx`

- Base file in => `App.jsx` 
```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <h1>React</h1>
    </>
  )
}

export default App

```

- React control UI updation
- Changes all over values through hook `useState()`