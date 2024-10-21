import { FC } from "react"
import { useAppSelector } from "../redux/hooks"
import ProductList from "../components/ProductList"

const WishList: FC = () => {
    const wishlist = useAppSelector((state) => state.productReducer.wishlist)
    return (
        <div className="container mx-auto font-karla">
            { wishlist.length > 0 ? (
                <ProductList title="Your wishlist" products={wishlist}></ProductList>
            ): (
                <div className="flex flex-col justify-center items-center">
                    <img src="./emptyCart.jpg" className="" alt="empty"></img>
                    <p className="text-center text-xl font-semibold">
                        Your wishlist is empty
                    </p>
                </div>
            )}
        </div>
    )
}

export default WishList