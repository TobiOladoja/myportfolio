import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Features />
        <Projects />
      </main>
    </div>
  );
}

export default App;
