import { FC, useState } from "react";
import { RxCross1 } from "react-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { emptyCart, setCartState } from "../redux/features/cartSlice"
import CartRow from "./CartRow"
import Toast from "react-hot-toast"

const Cart: FC = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector((state) => state.cartReducer.cartOpen)
    const items = useAppSelector((state) => state.cartReducer.cartItems)
    const [checkout, setCheckout] = useState(false)

    const calculateTotal = () => {
        
    }
}