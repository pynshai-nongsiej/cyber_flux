import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Lookbook from './components/Lookbook';
import ProductDrop from './components/ProductDrop';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Lookbook />
      <ProductDrop />
    </Layout>
  );
};

export default App;
