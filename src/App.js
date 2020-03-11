import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Features />
      </main>
    </div>
  );
}

export default App;
