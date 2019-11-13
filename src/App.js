import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import MainProductsGrid from './components/main_products_grid/main_products_grid';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <MainProductsGrid/>
    </div>
  );
}

export default App;
