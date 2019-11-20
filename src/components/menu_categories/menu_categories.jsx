import React, { Component, Fragment } from "react";
import "./menu_categories.scss";
const APICategories = "/data/categories.json";

// alterna las clases "open/closed" para desplegar las listas
function toggle_list(e) {
  e.preventDefault();
  let listTarget = e.target.parentElement;

  if (listTarget.classList.contains("open")) {
    listTarget.classList.replace("open", "closed");
  } else if (listTarget.classList.contains("closed")) {
    listTarget.classList.replace("closed", "open");
  }
}
function sortdata(e) {
  e.preventDefault();
  let listTarget = e.target.parentElement.value;
  console.log(`target = ${listTarget}`);
}
function handle_click(e) {
  toggle_list(e);
  sortdata(e);
}

const buildMenu = function buildMenu(items, nl = 0) {
  return (
    <ul className="list-group mt-3 ">
      {items.map(item => (
        <li key={item.id} value={item.id} className="list-group-item closed">
          <a href="/#" className="text-white" onClick={handle_click}>
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
