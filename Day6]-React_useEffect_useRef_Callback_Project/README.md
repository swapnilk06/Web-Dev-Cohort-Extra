# Code & Workout 6th-Day Challenge 🏋️‍♂️💻 
Date:[30-3-25]

Welcome Day-6 to my **Code & Workout 1-Week Challenge**! 🚀 

## 📌 Goal:
- Learn methods in React JS useEffect, useRef & useCallback
- Password generator in that someone gives random text.


## React installation steps :-

Step 1]
  - `npm create vite@latest`

Step 2]
  - Add project name : `05passwordGenerator`
  - Select a package name : `05passwordGenerator`
  - Select a framework : `React`
  - Select a variant : `JavaScript`

Step 3]
  - `cd 05passwordGenerator`
  - `npm install`

Step 4]
  - `npm run dev`


## Tailwind CSS through framework Vite steps :-

Step 1] Tailwind through vite
  - `npm install tailwindcss @tailwindcss/vite`


Step 2] Update in -> `vite.config.js`
  - configure vite  : `src/vite.config.js`
```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react(), tailwindcss()],
    
  })
```

Step 3] Update in -> `index.css`
  - import Tailwind to path :  `src/index.css`  
  ```
  @import "tailwindcss";
  
  /* use for tailwind CSS suggestion showing */
  @tailwind utilities;
  


Step 4] Run that
  - `npm run dev`

Step 5] Update in -> `App.jsx`
- Check tailwindCSS suggestion working : `src/App.jsx`
```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    </>
  )
}

export default App

```

### NOTE -

- For tracking length we required => "useState"
- useCallback in react => documentation
  - "useCallback" is a React Hook that lets you cache a function definition betn re-renders.
- "useEffect" hook => in a React hook that let you synchronize a component with an external system.
- Clipboard copy is not difficult but, difficult task is what we can copy?
- Every thing in react is also "hook".
- In server site "window" object not work (in nextjs), but in reactjs window object work.

