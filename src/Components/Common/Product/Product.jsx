import { useState } from "react";
import { useProductsdispatch } from "../../../Context/ProductsProvider";
import { comma } from "./../../../utils/comma";
import "./Product.scss";
import { RiHeart3Fill, RiBookmarkLine } from "react-icons/ri";

const Product = ({ product, index }) => {
  const [like, setLike] = useState(null);
  const dispatch = useProductsdispatch();

  const activeFav = (index) => {
    if (like === index) return setLike(null);
    setLike(index);
  };
  return (
    <div className="items__box" key={product.id}>
      <div className="items__box-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="items__box-detail">
        <div className="items__box-detail__title">{product.title}</div>
        <div className="items__box-detail__love">
          <div
            className={
              like === index
                ? "items__box-detail__love-icon active-icon"
                : "items__box-detail__love-icon"
            }
            onClick={() => activeFav(index)}
          >
            <RiHeart3Fill size={22} />
          </div>
          <div
            className={
              like === index
                ? "items__box-detail__love-icon active-icon"
                : "items__box-detail__love-icon"
            }
            onClick={() => activeFav(index)}
          >
            <RiBookmarkLine size={22} />
          </div>
        </div>
      </div>
      <div className="items__box-actions">
        <button
          onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          className={
            product.price === 0
              ? "items__box-actions__btn btn-dis"
              : "items__box-actions__btn"
          }
        >
          ثبت سفارش
        </button>
        <div className="items__box-actions__price">
          {product.price === 0 ? "موجود نیست" : `${comma(product.price)} تومان`}
        </div>
      </div>
    </div>
  );
};

export default Product;
