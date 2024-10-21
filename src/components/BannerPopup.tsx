import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateBanner } from "../redux/features/homeSlice";

const BannerPopup: FC = () => {
    const show = useAppSelector((state) => state.homeReducer.isBannerVisible)
    const dispatch = useAppDispatch()

    if(!show) {
        return null
    }

    return (
        <div className="">
            <div>
                
            </div>
        </div>
    )
}

export default BannerPopup