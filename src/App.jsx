import Navbar from "./components/Navbar";
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div className="darK:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App;