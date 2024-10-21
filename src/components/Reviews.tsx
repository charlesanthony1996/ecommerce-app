import { FC, useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import { ReviewItem } from "../models/ReviewItem";

const reviews: ReviewItem[] = [
    {
        username: "charles",
        rating: 5,
        review: "The product is amazing, never seen anything like it before"
    }
]

const getShuffledArr = () => {
    const arr: ReviewItem[] = []
    const start = Math.floor(Math.random() * 4)
    for(let index = start; index < start + 5; index++) {
        arr.push(reviews[index])
    }
    return arr
}

const Reviews: FC<{ id: number }> = ({ id }) => {
    const [items, setItems] = useState<ReviewItem[]>([])

    useEffect(() => {
        const _arr = getShuffledArr()
        setItems(_arr)
    }, [id])
    return (
        <div>
            
        </div>
    )
}

export default Reviews