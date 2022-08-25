import "./Cart.scss";
import { Helmet } from "react-helmet";
import Empty from "./../Common/isEmpty/isEmpty";
import { RiDeleteBin2Line, RiAddLine, RiSubtractFill } from "react-icons/ri";
import { comma } from "./../../utils/comma";
import Container from "./../../Container/Container";
import {
  useProducts,
  useProductsdispatch,
} from "./../../Context/ProductsProvider";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems } = useProducts();
  const dispatch = useProductsdispatch();

  const hasItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (price, total) => price + total.quantity * total.price,
    0
  );
  const totalCount = cartItems.reduce(
    (quantity, total) => quantity + total.quantity,
    0
  );

  const handleAddToCart = (cart) => {
    dispatch({ type: "ADD_ITEM", payload: cart });
    toast.success("به سبد خرید اضافه شد");
  };
  const handleRemoveToCart = (cart) => {
    dispatch({ type: "REMOVE_ITEM", payload: cart });
    toast.warning("از سبد خرید کم شد");
  };
  const handleDeleteItem = (cart) => {
    dispatch({ type: "DELETE_ITEM", payload: cart });
    toast.error("سفارش حذف شد");
  };

  return (
    <Container>
      <Helmet>
        <title>زود فود / سبد خرید</title>
      </Helmet>
      <section className="cart" dir="rtl">
        <div className="container">
          <div className="cart-container">
            {hasItems ? (
              <>
                <div className="cart-container__details">
                  {cartItems.map((cart) => (
                    <div className="cart-container__details-box" key={cart.id}>
                      <div className="cart-container__details-box__right">
                        <img src={cart.image} alt={cart.title} />
                        <div className="cart-container__details-box__right-product">
                          <div className="cart-container__details-box__right-product__title">
                            {cart.title}
                          </div>
                          <div className="cart-container__details-box__right-product__price">
                            {comma(cart.price)} تومان
                          </div>
                        </div>
                      </div>
                      <div className="cart-container__details-box__left">
                        <button onClick={() => handleAddToCart(cart)}>
                          <RiAddLine />
                        </button>
                        <span className="cart-container__details-box__left-quantity">
                          {cart.quantity}
                        </span>
                        <button onClick={() => handleRemoveToCart(cart)}>
                          <RiSubtractFill />
                        </button>
                        <button
                          className="cart-container__details-box__left-btn"
                          onClick={() => handleDeleteItem(cart)}
                        >
                          <RiDeleteBin2Line size={28} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-container__factor">
                  <div className="cart-container__factor-total">
                    <span>جمع خرید</span>
                    <span>{comma(totalPrice)}</span>
                  </div>
                  <div className="cart-container__factor-count">
                    <span>تعداد سفارشات</span>
                    <span>{totalCount}</span>
                  </div>
                  <div className="cart-container__factor-offprice">
                    <span>تخفیفات</span>
                    <span>{0}</span>
                  </div>
                  <div className="cart-container__factor-finall">
                    <span>جمع نهایی</span>
                    <span>{comma(totalPrice)}</span>
                  </div>
                  <button className="cart-container__factor-btn">
                    ثبت سفارش
                  </button>
                </div>
              </>
            ) : (
              <Empty title={"سبد خرید خالی است"} />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
