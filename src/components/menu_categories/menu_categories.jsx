import React, { Component,fragment } from "react";
const APICategories = "/data/categories.json";

const buildMenu = function buildMenu(items, nl = 0) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className=""> 
          <a href="/#">
            {item.name}
            <i class="fas fa-plus-circle"></i>
          </a>
          {item.sublevels && item.sublevels.length > 0
            ? buildMenu(item.sublevels)
            : null}
        </li>
      ))}
    </ul>
  );
};
class menuCategories extends Component {
  state = {
    dataCategories: []
  };
  // llamada a funcion de Fetch para obtener datos de productos
  componentDidMount() {
    this.obtenerCategorias();
  }
  obtenerCategorias() {
    //Conexion al fetch
    fetch(APICategories)
      .then(res => res.json())
      .then(data => {
        this.setState({
          dataCategories: data.categories
        });
        console.log(this.state.dataCategories);
      })
      .catch(function(error) {
        console.log(`error conectando a productos ${error}`);
      });
  }
  render() {
    const categories = this.state.dataCategories;
    return (
      <ul className="list-group mt-3">
        {buildMenu(categories)}
        {/* {categories.map(categorie=>(
                <a href="/#" class="list-group-item list-group-item-action">{categorie.name}<i class="fas fa-plus-circle"></i></a>
            ))} */}
      </ul>
    );
  }
}

export default menuCategories;
