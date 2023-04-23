import ProductGrid from "../sections/ProductGrid"
import { Services } from "../services";

const Home = () => {
  return (
    <ProductGrid service={Services.Product.getAll}/>
  )
}

export default Home