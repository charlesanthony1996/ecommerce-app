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
        <div className="px-2">
            <h1 className="text-2xl font-semibold mb-2">Reviews</h1>
            <div className="space-y-2">
                {items?.map(({ username, rating, review }) =>  (
                <div key={username} className="leading-4" data-test="review-item">
                    <h3 className="font-semibold text-md">{username}</h3>
                    <RatingStar rating={rating}></RatingStar>
                    <p className="text-sm leading-4">{review}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews