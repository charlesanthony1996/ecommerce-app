import { FC } from "react"
import { CartItem } from "../models/CartItem"
import { useAppDispatch } from "../redux/hooks"
import useDiscount from "../hooks/useDiscount"
import { RiDeleteBin6Line } from "react-icons/ri"
import { addToCart, reducedFromCart, removeFromCart } from "../redux/features/cartSlice"
import { IoIosAdd, IoIosAddCircleOutline , IoIosRemoveCircleOutline } from "react-icons/io"

const CartRow: FC<CartItem> = ({ id, thumbnail, title, price, quantity, rating, category, discountPercentage}) => {
    const dispatch = useAppDispatch()
    const result = useDiscount({ price, discount: discountPercentage }) 

    return (
        <div className="">
            <img src={thumbnail}></img>
            <div>
                <h3>{title}</h3>
                <div>
                    <h3>{result.toFixed(2)}</h3>
                    <span></span>
                </div>

                <div>
                    <IoIosRemoveCircleOutline>
                    </IoIosRemoveCircleOutline>
                    <span></span>
                    <IoIosAddCircleOutline>
                    </IoIosAddCircleOutline>
                </div>
            </div>

            <div>
                <RiDeleteBin6Line>
                </RiDeleteBin6Line>
            </div>
        </div>
    )
}

export default CartRow