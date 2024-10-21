import { FC } from "react"
import { CartItem } from "../models/CartItem"
import { useAppDispatch } from "../redux/hooks"
import { useDiscount } from "../hooks/useDiscount"

const CartRow: FC<CartItem> = ({ id, thumbnail, title, price, quantity, rating, category, discountPercentage}) => {
    const dispatch = useAppDispatch()
    const result = useDiscount({ price, discount: discountPercentage }) 

    return (
        <div>
            <img></img>
            <div>
                <h3></h3>
                <div>
                    <h3></h3>
                </div>
            </div>
        </div>
    )

}
export default CartRow