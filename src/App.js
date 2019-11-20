import React, {Component} from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import MainProductsGrid from './components/main_products_grid/main_products_grid';

const APIProducts = "/data/products.json";

class App extends Component {
 
  state = {
    dataProducts: []
  };
  // llamada a funcion de Fetch para obtener datos de productos
  componentDidMount() {
    this.obtenerProductos();
  }
  obtenerProductos() {
    //Conexion al fetch
    fetch(APIProducts)
      .then(res => res.json())
      .then(data => {
        this.setState({
          dataProducts: data.products
        });
      })
      .catch(function(error) {
        console.log(`error conectando a productos ${error}`);
      });
  }
  render() { 
    return ( <div className="App">
       <Header/>
       <Sidebar/>
       <MainProductsGrid
        dataProducts = {this.state.dataProducts}
       />
     </div> );
  }
}

export default App;
