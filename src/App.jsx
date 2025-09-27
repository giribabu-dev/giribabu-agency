import { useState } from 'react';
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from './components/TrustedBy';
import Services from "./components/Services";
import Works from './components/Works';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('agency-theme') ? localStorage.getItem('agency-theme') : 'light');

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Works />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  )
}

export default App;