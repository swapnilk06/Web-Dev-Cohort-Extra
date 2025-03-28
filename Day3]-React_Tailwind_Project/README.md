# Code & Workout 3rd-Day Challenge 🏋️‍♂️💻 
Date:[27-3-25]

Welcome Day-3 to my **Code & Workout 1-Week Challenge**! 🚀 

## 📌 Goal:
- Create basic flow of portfolio website using React JS & Tailwind CSS

- Projects folder structure :

REACTPORTFOLIO
   ├── 01portfolio
   └──  

## React installation steps :-

Step 1]
  - `npm create vite@latest`

Step 2]
  - Add project name : `01vitereact`
  - Select a framework : `React`
  - Select a variant : `JavaScript`

Step 3]
  - `cd 01vitereact`
  - `npm install`

Step 4]
  - `npm run dev`


## Tailwind CSS installation steps :-

Step 1]
  - `npm install tailwindcss @tailwindcss/vite`

Step 2] 
  - for handling email form
    - `npm install emailjs-com`

Step 3]
- Boiler code `01portfolio/src/App.jsx`
```jsx
import './App.css'
function App() {
  return (
    <> </>
  )
}
export default App
```

Step 4]
- Fresh start CSS
  - `01portfolio/src/index.css`  
  ```css
  @import "tailwindcss";

  html, body {
    margin: 0;
    padding: 0;
    font-family: "Space Grotesk", sans-serif;
    background: #0a0a0a;
    color #ffffff;
  }
  ```
- Fresh start CSS with empty canvas
  - `01portfolio/src/App.css`

Step 5] 
- Creating folder structure for our project
  - `src/components`
    - `src/components/sections`

- Strcture:

  src
  ├─ components
  |   ├─ sections
  |   |   ├─ Home.jsx
  |   |   ├─ Projects.jsx
  |   |   ├─ About.jsx
  |   |   └─ Contact.jsx
  |   ├─ LoadingScreen.jsx

### NOTE -



