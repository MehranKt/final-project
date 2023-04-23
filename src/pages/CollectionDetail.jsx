import { useParams } from "react-router-dom";
import { Services } from "../services";
import ProductGrid from "../sections/ProductGrid";

const CollectionDetail = () => {
  const { handle } = useParams();

  return (
    <ProductGrid
      key={handle}
      service={async ({ limit, skip }) =>
        await Services.Product.getProductsByCollection({ limit, skip, handle })
      }
    />
  );
};

export default CollectionDetail;
