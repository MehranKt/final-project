import { useEffect, useRef, useState } from "react";
import { Services } from "../services";
import { useParams } from "react-router-dom";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { Accordion, Button, Select } from "../components";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import RecommendationBar from "../sections/RecommendationBar";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleAddItem = (event) => {
    dispatch(addItem({ product }));
    event.preventDefault();
  };
  const [isLiked, setIsLiked] = useState(false);
  function toggleLike(event) {
    setIsLiked(!isLiked);
    event.preventDefault();
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    Services.Product.getOne({ id }).then((productEdge) => {
      setProduct(productEdge);
    });
  }, [id]);

  if (!product) {
    return null;
  }

  const discountedPrice = Math.floor(
    product.price - (product.discountPercentage * product.price) / 100
  );

  return (
    <>
      <div className="product__wrapper">
        <div className="product__gallery">
          {product.images.map((image, index) => (
            <img src={image} alt="" key={index} />
          ))}
        </div>
        <div className="product__content">
          <div className="product__info">
            <div className="product__info__title">{product.title}</div>
            <div className="product__info__color">Black</div>
            <div className="product__info__price__group">
              <div className="product__info__price-discount">
                ${discountedPrice}
              </div>
              <div className="product__info__price">${product.price}</div>
            </div>
            <div className="product__info__variants">
              <form>
                <div className="select__group">
                  <div className="select__wrapper">
                    <label htmlFor="size" className="select-label">
                      Choose Size
                    </label>
                    <Select name={"size"}>
                      <option value="sm">Sm</option>
                      <option value="m">M</option>
                      <option value="lg">Lg</option>
                      <option value="xl">Xl</option>
                    </Select>
                  </div>
                  <div className="select__wrapper">
                    <label htmlFor="color" className="select-label">
                      Choose Color
                    </label>
                    <Select name={"color"}>
                      <option value="Black">Black</option>
                      <option value="Red">Red</option>
                      <option value="White">White</option>
                      <option value="Gray">Gray</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <div className="button__group">
                    <Button
                      size={"md"}
                      color={"tertiary"}
                      onClick={handleAddItem}
                    >
                      {"Add to card"}
                    </Button>
                    <button className="like" onClick={toggleLike}>
                      {isLiked ? <SolidHeart /> : <OutlineHeart />}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* chat gpt den goturdum Accordionu */}
            <div className="accordion__group">
              <Accordion title={"Description"} isDefaultShow={true}>
                We may be a long way from the '90s, but these Ozelia Shoes are
                rooted in that loud, experimental era. Inspired by the adidas
                archives, the bold trainers have a chunky build that's all about
                being noticed. They're sleek with a fast look, and when your
                days are fast-paced, the Adiprene cushioning helps out on the
                comfort side of things. This product is made with recycled
                content as part of our ambition to end plastic waste. 20% of
                pieces used to make the upper are made with minimum 50% recycled
                content.
              </Accordion>
              <Accordion title={"Details"}>
                We may be a long way from the '90s, but these Ozelia Shoes are
                rooted in that loud, experimental era. Inspired by the adidas
                archives, the bold trainers have a chunky build that's all about
                being noticed. They're sleek with a fast look, and when your
                days are fast-paced, the Adiprene cushioning helps out on the
                comfort side of things. This product is made with recycled
                content as part of our ambition to end plastic waste. 20% of
                pieces used to make the upper are made with minimum 50% recycled
                content.
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <RecommendationBar />
    </>
  );
};

export default ProductDetail;
