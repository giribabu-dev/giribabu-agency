import { useState } from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from './components/TrustedBy';
import Services from "./components/Services";
import Works from './components/Works';
import Teams from './components/Teams';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('agency-theme') ? localStorage.getItem('agency-theme') : 'light');

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Works />
      <Teams />
    </div>
  )
}

export default App;