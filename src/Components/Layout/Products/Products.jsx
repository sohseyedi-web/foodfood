import "./Products.scss";
import { Link } from "react-router-dom";
import Product from "../../Common/Product/Product";
import { useProducts } from "../../../Context/ProductsProvider";

const Products = () => {
  const { data } = useProducts();
  const filterProduct = data.filter((i) => i.id <= 6);

  return (
    <section className="products" dir="rtl">
      <div className="container products-container">
        <div className="products-container__items">
          {filterProduct.map((product, index) => (
            <Product key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="products-container__more">
          <Link to={"/menu"}>
            <button>مشاهده موارد بیشتر</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
