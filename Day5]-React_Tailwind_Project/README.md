# Code & Workout 4th-Day Challenge 🏋️‍♂️💻 
Date:[29-3-25]

Welcome Day-5 to my **Code & Workout 1-Week Challenge**! 🚀 

## 📌 Goal:
- Project Configure React & Props with Tailwind using vite 
- Background changer project


## React installation steps :-

Step 1]
  - `npm create vite@latest`

Step 2]
  - Add project name : `04bgchanger`
  - Select a framework : `React`
  - Select a variant : `JavaScript`

Step 3]
  - `cd 04bgchanger`
  - `npm install`

Step 4]
  - `npm run dev`


## Tailwind CSS through framework  Vite steps :-

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

<!-- 
Old Step 6] 

  - add file to path : `tailwind.config.js`
  
  /** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
	  extend: {},
	},
	plugins: [],
  };
-->

### NOTE -



