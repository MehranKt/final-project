import { Fragment, useEffect, useRef, useState } from "react";
import { ProductCard, ProductCardSkeleton } from "../components";

const ProductGrid = ({ service }) => {
  const loadMoreRef = useRef();

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isEnded, setIsEnded] = useState(false);

  const handleLoadProducts = () => {
    if (loading || isEnded) return;
    setLoading(true);
    service({ limit: 12, skip: page * 12 })
      .then((productsEdge) => {
        setProducts((prev) => [...prev, ...productsEdge.products]);
        setPage((prev) => prev + 1);
        setIsEnded(productsEdge.limit === 0);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        handleLoadProducts();
      }
    });
    observe.observe(loadMoreRef.current);
    return () => {
      observe.disconnect();
    };
  }, [page, loading, isEnded]);

  useEffect(() => {
    handleLoadProducts();
  }, []);

  return (
    <Fragment>
      <div className="products__group">
        {products?.length
          ? products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : Array(12)
              .fill()
              .map((_, index) => <ProductCardSkeleton key={index} />)}
      </div>
      <div ref={loadMoreRef} />
    </Fragment>
  );
};

export default ProductGrid;
