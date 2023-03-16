import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
        <ItemListContainer
          itemsUno="Procesadores"
          itemsDos="Madre de placas"
          itemsTres="Fuentes"
          itemsCuatro="Placas de videos"
        />
      </nav>
      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
