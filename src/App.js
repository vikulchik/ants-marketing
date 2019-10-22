import React from 'react';
import Navigation from './Navigation/index';
import Form from './Form/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="information-form">
        <Navigation />
        <Form />
      </section>
    </div>
  );
}

export default App;
