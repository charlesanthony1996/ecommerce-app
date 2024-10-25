import { FC, useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addProducts } from "../redux/features/productSlice"
import ProductCard from "../components/ProductCard";
import { Product } from "../models/Product"

const AllProducts: FC = () => {
    const dispatch = useAppDispatch()
    const sortRef = useRef<HTMLSelectElement>(null)
    const [currentProducts, setCurrentProducts] = useState<Product[]>([])
    const allProducts = useAppSelector((state) => {
        state.productReducer.allProducts
    }) 

    return (
        <div className="container mx-auto min-h-[83vh] p-4 font-karla">
            <div className="grid grid-cols-4 gap-1">
                <div className="col-span-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg dark:text-white">Products</span>
                        <select
                        ref={sortRef}
                        className="border border-black dark:text-white"
                        onChange={(e) => sortProducts(e.target.value)}
                        >
                            <option value="default"></option>
                            <option value="asc">Price (low to high)</option>
                            <option value="desc">Price (high to low)</option>
                        </select>
                    </div>
                    <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {currentProducts.map((product) => (
                            <ProductCard key={product.id} {...product}></ProductCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}