import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks"
import { addToCart, setCartState } from "../redux/features/cartSlice"
import { Product } from "../models/Product"
import RatingStar from "../components/RatingStar"
import PriceSection from "../components/PriceSection"
import toast from "react-hot-toast"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaHandHoldingDollar } from "react-icons/fa6"
import ProductList from "../components/ProductList"
import Reviews from "../components/Reviews"
import useAuth from "../hooks/useAuth"
import { MdFavoriteBorder } from "react-icons/md"
import { addToWishlist } from "../redux/features/productSlice"


const lorem = `It is important to take care of the patient, 
to be followed by the patient, but it will happen at such a time
that there is a lot of work and pain. For to come to the smallest detail,
no on should practice any kind of work unless he derives some benefit
from it. Do not be angry with the pain in the reprimand in the pleasure
he wants to be a hair from the pain in the hope that there is no breeding.
`

const singleProduct: FC = () => {
    const dispatch = useAppDispatch()
    const { productID } = useParams()
    const [product, setProduct ] = useState<Product>()
    const [imgs, setImgs] = useState<string[]>()
    const [selectedImg, setSelectedImg] = useState<string>()
    const [sCategory, setScategory] = useState<string>()
    const [similar, setSimilar] = useState<Product[]>([])
    const { requireAuth } = useAuth()

    useEffect(() => {
        const fetchProductDetails = () => {
            fetch(`https://dummyjson.com/products/${productID}`)
            .then((res) => res.json())
            .then((data) => {
                const { thumbnail, images, category } = data
                setProduct(data)
                setImgs(images)
                setScategory(category)
                setSelectedImg(thumbnail)
            })
        }
        fetchProductDetails()
    }, [productID])

    useEffect(() => {
        const fetchPrefences = (cat: string) => {
            fetch(`https://dummyjson.com/products/category/${cat}`)
            .then((res) => res.json())
            .then((data) => {
                const _products: Product[] = data.product
                const filtered = _products.filter((product) => {
                    if (productID && product.id !== parseInt(productID)) return product
                })
                setSimilar(filtered)
            })
        }
        if (sCategory && sCategory !== "") fetchPrefences(sCategory)
    }, [productID, sCategory])


    const addCart = () => {
        requireAuth(() => {
            if (product)
                dispatch(
                    addToCart({
                        id: product.id,
                        price: product.price,
                        title: product.title,
                        category: product.category,
                        rating: product.rating,
                        thumbnail: product.thumbnail,
                        discountPercentage: product.discountPercentage
                    })
            )
            toast.success("item added to the cart successfully", {
                duration: 3000
            })
        })
    }

    const buyNow = () => {
        requireAuth(() => {
            if (product)
                dispatch(
                    addToCart({
                        id: product.id,
                        price: product.price,
                        title: product.title,
                        category: product.category,
                        rating: product.rating,
                        thumbnail: product.thumbnail,
                        discountPercentage: product.discountPercentage
            })
        )
        dispatch(setCartState(true))
        })
    }

    const addWishList = () => {
        requireAuth(() => {
            if (product) {
                dispatch(addToWishlist(product))
                toast.success("item added to your wishlist", {
                    duration: 3000
                })
            }
        })
    }

    return (
        <div className="container mx-auto pt-8 dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 font-karla">
                <div className="space-y-2">
                    <img></img>
                    <div>

                    </div>
                </div>
                <div>
                    <h2></h2>
                    <div>

                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-2">
                        <h2>About the product</h2>
                        <p className="leading-5">
                            {product?.description} {lorem}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
                        <button
                        type="button"
                        className="flex items-center space-x-1 mb-2 hover:bg-pink-700 text-white p-2 rounded bg-pink-500"
                        onClick={addToCart}
                        >
                            <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            <span>Add to cart</span>
                        </button>
                        <button
                        type="button"
                        className="flex items-center space-x-1 mb-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        onClick={buyNow} 
                        >
                            <FaHandHoldingDollar></FaHandHoldingDollar>
                        </button>
                        <span>Buy now</span>
                        <button
                        type="button"
                        className="flex items-center space-x-1 mb-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
                        onClick={addWishList}
                        >
                            <MdFavoriteBorder></MdFavoriteBorder>
                        </button>
                        <span>Add to wishlist</span>
                    </div>
                </div>
                {product && <Reviews id={product.id} ></Reviews>}
            </div>
            <hr className="mt-4"></hr>
            <ProductList title="Similar products" products={similar}></ProductList>
            <br />
        </div>
    )

}

export default singleProduct