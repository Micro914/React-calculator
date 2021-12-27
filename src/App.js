import React from 'react';
import Calculator from './components/Calculator';
import Title from './components/Title';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Title title="React Calculator"/>
      <Calculator/>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
