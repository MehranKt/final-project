import { Drawer } from "../components";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";
import { Services } from "../services";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSearch } from "../store/drawerSlice";

const SearchDrawer = () => {
  const showSearch = useSelector(({ drawer }) => drawer.showSearch);
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const handleButtonClick = () => {
    inputRef.current.focus();
  };
  const [products, setProducts] = useState(null);
  const [total, setTotal] = useState(0);

  const handleSearch = (e) => {
    if (e.target.value.length) {
      Services.Product.getSearch({
        limit: 8,
        skip: 0,
        text: e.target.value,
      }).then((productsEdge) => {
        setProducts(productsEdge.products);
        setTotal(productsEdge.total);
      });
    } else {
      setProducts(null);
      setTotal(0);
    }
  };

  const handleCLose = () => {
    dispatch(closeSearch());
  };

  useEffect(() => {
    if (!showSearch) {
      setProducts(null);
      setTotal(null);
      inputRef.current.value = "";
    }
  }, [showSearch]);

  return (
    <Drawer isVisible={showSearch} onClose={handleCLose} placement="top">
      <div className="container">
        <form action="/search" className="search-drawer__inner">
          <div className="input__group">
            <button
              type="button"
              onClick={handleButtonClick}
              className="input__svg"
            >
              <MagnifyingGlassIcon />
            </button>
            <input
              ref={inputRef}
              type="text"
              name="text"
              className="input"
              placeholder="Type to search..."
              onChange={handleSearch}
            />
          </div>
          <button
            type="button"
            className="icon__button icon__button--default"
            onClick={handleCLose}
          >
            <XMarkIcon />
          </button>
        </form>
      </div>
      {products?.length ? (
        <div className="container">
          <div className="search__result">
            <div className="search__result__header">
              <div className="search__result__header__title">
                Results ({total})
              </div>
              <Link
                onClick={handleCLose}
                to={`/search?text=${inputRef.current.value}`}
                className="search__result__header__button"
              >
                See all
              </Link>
            </div>
            <div className="search__result__body">
              {products?.map((product) => (
                <div className="search__product" key={product.id}>
                  <Link to={`/products/${product.id}`} className="search__product__cover">
                    <img src={product.images[0]} alt="" />
                  </Link>
                  <div className="search__product__content">
                    <Link to={`/products/${product.id}`} className="search__product__content__title">
                      {product.title}
                    </Link>
                    <div className="search__product__content__price">
                      {product.price}$
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </Drawer>
  );
};

export default SearchDrawer;
