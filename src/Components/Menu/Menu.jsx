import "./Menu.scss";
import { Helmet } from "react-helmet";
import Container from "./../../Container/Container";
import Product from "./../Common/Product/Product";
import TopMenu from "./TopMenu/TopMenu";
import {
  useProducts,
  useProductsdispatch,
} from "./../../Context/ProductsProvider";

const Menu = () => {
  const { data } = useProducts();
  const dispatch = useProductsdispatch();

  return (
    <Container>
      <Helmet>
        <title>زود فود / منو</title>
      </Helmet>
      <section className="menu" dir="rtl">
        <div className="container">
          <div className="menu-container">
            <TopMenu dispatch={dispatch} />
            <div className="menu-container__body">
              <div className="menu-container__body-items">
                {data.map((product, index) => (
                  <Product key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Menu;
