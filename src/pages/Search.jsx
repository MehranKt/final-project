import { useSearchParams } from "react-router-dom";
import { Services } from "../services";
import ProductGrid from "../sections/ProductGrid";

const Search = () => {
  const [params] = useSearchParams();

  return (
    <ProductGrid
    key={params}
      service={async ({ limit, skip }) =>
        await Services.Product.getSearch({
          text: params.get("text"),
          limit,
          skip,
        })
      }
    />
  );
};

export default Search;
