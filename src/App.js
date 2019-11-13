import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import MainProductsGrid from './components/main_products_grid/main_products_grid';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainProductsGrid/>
    </div>
  );
}

export default App;
