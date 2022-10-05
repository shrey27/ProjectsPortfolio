import React from 'react';
import './App.css';
import { Header, Skills, Projects, Blogs, Footer } from './components';

function App() {
  return (
    <div class='container'>
      <Header />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
