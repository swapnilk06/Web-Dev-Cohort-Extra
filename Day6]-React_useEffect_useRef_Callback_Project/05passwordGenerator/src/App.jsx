import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  // for length count
  const [length, setLength] = useState(8)
  // for number - true or flase for checkboxes
  const [numberAllowed, setNumberAllowed] = useState(false);

  // for character - true or flase for checkboxes
  const [charAllowed, setCharAllowed] = useState(false);

  // for input field 
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  // for password generator method
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}<>,.?/~*`"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);

    }
    // read value
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-orange-500 p-4">
        <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className='text-white text-center my-3 text-4xl pb-5'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={password}
            className="outline-none w-full bg-white py-1 px-3"
            placeholder="Password" 
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
      </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
              <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}  
            />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charcterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}  
            />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App