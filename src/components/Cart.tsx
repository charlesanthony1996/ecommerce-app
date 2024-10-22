import { FC, useState } from "react";
import { RxCross1 } from "react-icons/rx"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { emptyCart, setCartState } from "../redux/features/cartSlice"
import CartRow from "./CartRow"
import toast from "react-hot-toast"

const Cart: FC = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector((state) => state.cartReducer.cartOpen)
    const items = useAppSelector((state) => state.cartReducer.cartItems)
    const [checkout, setCheckout] = useState(false)

    const calculateTotal = () => {
        let total = 0
        items.forEach((item) => {
            if(item.quantity && item.discountPercentage) {
                total += (item.price - (item.price * item.discountPercentage) / 100) * item.quantity
            }
        })
        return total.toFixed(2)
    }

    const handleOrder = () => {
        dispatch(setCartState(false))
        dispatch(emptyCart())
        setCheckout(false)
        toast.success("your order has been confirmed", { duration: 3000})
    }

    if (isOpen) {
        return (
            <div>
                <div>
                    <h1>Checkout</h1>
                    <p>Welcome to the checkout section</p>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div>
                    <div>
                        <h3></h3>
                    </div>
                    <div>
                        <div>
                            <img></img>
                            <p>Your cart is empty</p>
                        </div>
                    </div>
                    <div>
                        <h2></h2>
                        <h2></h2>
                    </div>
                    <button>
                        Checkout
                    </button>
                </div>
            </div>
        )

    }
}

export default Cart