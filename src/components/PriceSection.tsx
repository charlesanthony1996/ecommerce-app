import { FC } from "react";
import useDiscount from "../hooks/useDiscount"

const PriceSection: FC<{price: number; discountPercentage: number}> = ({
    price,
    discountPercentage = 0
}) => {
    const result = useDiscount({ price, discount: discountPercentage})
    const discount = parseFloat(discountPercentage.toString())
    
    if(Math.floor(discount) == 0) {
        return <h2 className="">${price}</h2>
    }
    return (
        <div>
            <h2>
                ${result.toFixed(2)}
            </h2>
            <span>
                ${price}
            </span>
            <span>
                -{discountPercentage}%
            </span>
        </div>
    )
}

export default PriceSection