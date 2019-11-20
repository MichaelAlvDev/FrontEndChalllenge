import React, { Component } from "react";
import "./main_products_grid.scss";
import Product from "../product/product.jsx";

class main_products_grid extends Component {
  state = {  }
  render() {
    //Data original
    const dataProducts = this.props.dataProducts;
    //Data luego de filtrar
    let dataProductsFiltered = dataProducts.filter(dataProducts=> dataProducts.sublevel_id===3);
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
