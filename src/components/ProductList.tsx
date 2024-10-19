import { FC } from "react";
import { Product } from "../models/Product";
import ProductCard from "./ProductCard"


const ProductList: FC<{ title: string; products: Product[]}> = ({
    title,
    products
}) => (
    <div className="">
        <div className="">
            <h2 className="">{title}</h2>
        </div>

        <div 
        className=""
        data-test="">
            {products?.map((product) => (
                <ProductCard
                key={product.id}
                id={product.id}
                category={product.category}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
                rating={product.rating}
                discountPercentage={product.discountPercentage}
                >
                </ProductCard>
            ))}
        </div>
    </div>
)

export default ProductList