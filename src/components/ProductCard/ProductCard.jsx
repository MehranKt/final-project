import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem({ product }));
  };
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-card__cover">
        <img className="product-card__image" src={product.images[0]} alt="" width={100} height={100} />
      </Link>
      <div className="product-card__content">
        <Link to={`/products/${product.id}`}>
          <div className="product-card__content__title">{product.title}</div>
        </Link>
        <div className="product-card__content__price">${product.price}</div>
      </div>
      <div className="product-card__action">
        <Button size={"sm"} color={"tertiary"} onClick={handleAddItem}>
          {"Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
