import React, { Component } from "react";
import "./product.scss";

class product extends Component {
  state = {};
  render() {
    return (
      <div className="product-box col-md-3 col-sm-6 col-xs-6 mb-1">
        <div className="product-container card bg-primary text-white">
          <div className="card-header">
            <h4 className="card-title">{this.props.productName}</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              <b>ID:</b>
              <span>{this.props.productId}</span>
              <br />
              <b>Cantidad:</b>
              <span>{this.props.productQuantity}</span>
              <br />
              <b>Categoria:</b>
              <span>{this.props.productSublevel}</span>
              <br />
              <b>Precio:</b>
              <span>{this.props.productPrice}</span>
              <br />
            </p>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default product;
