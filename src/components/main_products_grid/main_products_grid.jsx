import React, { Component } from "react";
import "./main_products_grid.scss";
import Product from "../product/product.jsx";
const APIProducts = "/data/products.json";

class main_products_grid extends Component {
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
    //Data original
    const dataProducts = this.state.dataProducts;
    //Data luego de filtrar
    let dataProductsFiltered = dataProducts;
    return (
      <div className="jumbotron col-md-10 Grid-container">
        {dataProductsFiltered.map(product => (
          <Product
            key={product.id}
            productName={product.name}
            productQuantity={product.quantity}
            productPrice={product.price}
            productAvailable={product.avalailable}
            productSublevel={product.sublevel_id}
            productId={product.id}
          />
        ))}
      </div>
    );
  }
}

export default main_products_grid;
