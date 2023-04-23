import { Link, NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { openCart, openMenu, openSearch } from "../store/drawerSlice";

const Header = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(openCart());
  };
  const handleOpenSearch = () => {
    dispatch(openSearch());
  };
  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  return (
    <>
      <div className="header__wrapper">
        <div className="container">
          <div className="header">
            <button
              className="header__menu icon__button"
              onClick={handleOpenMenu}
            >
              <Bars3Icon />
            </button>
            <Link to="/" className="header__title">
              Ozonepic
            </Link>
            <div className="header__links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/collections/smartphones">Smartphones</NavLink>
              <NavLink to="/collections/laptops">Laptops</NavLink>
              <div className="icon__button__group">
                <button className="icon__button" onClick={handleOpenSearch}>
                  <MagnifyingGlassIcon />
                </button>
                <button
                  className="icon__button shopping-bag"
                  onClick={handleOpenCart}
                >
                  {products.length ? (
                    <div className="badge">{products.length}</div>
                  ) : null}
                  <ShoppingBagIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
