import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateBanner } from "../redux/features/homeSlice";

const BannerPopup: FC = () => {
    const show = useAppSelector((state) => state.homeReducer.isBannerVisible)
    const dispatch = useAppDispatch()

    if(!show) return null

    return (
        <div className={`fixed ${show ? "opacity-100" : "opacity-0"}`}>
            <div className="relative">
            <img src="./banner.jpg" alt="banner" className="w-[50vw] min-w-[300px] m-auto">
            </img>
            <button onClick={() => {
                dispatch(updateBanner(false))
            }}
            className="absolute top-0 right-0 m-2 bg-white rounded-full p-2"
            >
                ✖
            </button>
            </div>
        </div>
    )
}

export default BannerPopup