import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
  Button,
} from "../components";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearBasket,
  increaseQty,
  decreaseQty,
  cartSubtotalSelector,
} from "../store/cartSlice";
import { closeCart } from "../store/drawerSlice";

const CartDrawer = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector(cartSubtotalSelector);
  const showCart = useSelector(({ drawer }) => drawer.showCart);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeCart());
  };
  const handleClear = () => {
    dispatch(clearBasket());
  };
  const handleIncrease = (id) => {
    dispatch(increaseQty({ id }));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQty({ id }));
  };
  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };
  console.log(products);
  return (
    <Drawer isVisible={showCart} onClose={handleClose}>
      <DrawerHeader onClose={handleClose} title={`Cart(${products.length})`} />
      <DrawerContent>
        {products.length ? (
          products.map((product) => (
            <div className="cart" key={product.id}>
              <div className="cartItem__cover">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="cartItem__info">
                <div className="cartItem__info--top">
                  <div className="cartItem__title">{product.title}</div>
                  <button
                    className="cartItem__remove"
                    onClick={() => handleRemove(product.id)}
                  >
                    <XMarkIcon />
                  </button>
                </div>
                <div className="cartItem__info--bottom">
                  <div className="cartItem__actions">
                    <button
                      className="decrease"
                      onClick={() => handleDecrease(product.id)}
                    >
                      -
                    </button>
                    <div className="quantity">{product.quantity}</div>
                    <button
                      className="increase"
                      onClick={() => handleIncrease(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cartItem__price">
                    ${product.price * product.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">Your cart is empty</div>
        )}
      </DrawerContent>
      <DrawerFooter>
        <div className="subtotal">
          <div>SUBTOTAL</div>
          <div>${total}</div>
        </div>
        <div className="drawer__footer__buttons">
          <Button size={"md"} color={"primary"} onClick={() => handleClear()}>
            {"Clear"}
          </Button>
          <Button size={"md"} color={"secondary"} onClick={() => handleClear()}>
            {"Complete"}
          </Button>
        </div>
      </DrawerFooter>
    </Drawer>
  );
};

export default CartDrawer;
