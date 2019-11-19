import React, { Component, Fragment } from "react";
import "./menu_categories.scss";
const APICategories = "/data/categories.json";

// alterna las clses "open/closed" para desplegar las listas
function toggle_list(e){
  e.preventDefault();
  let listTarget= e.target.parentElement;
  
  if (listTarget.classList.contains('open')){
    listTarget.classList.replace('open', 'closed');
  }else if(listTarget.classList.contains('closed')){
    listTarget.classList.replace('closed', 'open');
  }
}
const buildMenu = function buildMenu(items, nl = 0) {
  return (
    <ul className="list-group mt-3 ">
      {items.map(item => (
        <li key={item.id} className="list-group-item closed" nestingLvl={nl} >
          <a href="/#" className="text-white" onClick={toggle_list}>
            {item.name}
          </a>
          {item.sublevels && item.sublevels.length > 0
            ? buildMenu(item.sublevels, nl + 1)
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
      <Fragment>
        {buildMenu(categories)}
        {/* {categories.map(categorie=>(
                <a href="/#" class="list-group-item list-group-item-action">{categorie.name}<i class="fas fa-plus-circle"></i></a>
            ))} */}
      </Fragment>
    );
  }
}

export default menuCategories;
