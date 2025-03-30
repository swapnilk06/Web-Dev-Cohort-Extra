import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen flex items-center justify-center transition-colors duration-500" style={{backgroundColor: color}}
    >
      <div className="fixed bottom-10 w-full flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-3 bg-white p-4 rounded-2xl shadow-xl">
          <button
          onClick ={() => setColor("red")}
          className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "red"}}
          >Red</button>
          
          <button
          onClick ={() => setColor("green")}
          className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "green"}}
          >Green</button>
          
          <button
          onClick ={() => setColor("blue")}
          className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          
          <button
          onClick ={() => setColor("yellow")}
          className="outline-none px-4 py-2 rounded-full text-black font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          
          <button
          onClick ={() => setColor("gray")}
          className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "gray"}}
          >Gray</button>
          
          <button
          onClick ={() => setColor("purple")}
          className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          
          <button
          onClick ={() => setColor("olive")}
          className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "olive"}}
          >Olive</button>

          <button
          onClick ={() => setColor("pink")}
          className="outline-none px-4 py-2 rounded-full text-black font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "pink"}}
          >Pink</button>

          <button
          onClick ={() => setColor("lavender")}
          className="outline-none px-4 py-2 rounded-full text-black font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>

          <button
          onClick ={() => setColor("white")}
          className="outline-none px-4 py-2 rounded-full text-black font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "white"}}
          >White</button>

          <button
          onClick ={() => setColor("black")}
          className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
          style={{backgroundColor: "black"}}
          >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
