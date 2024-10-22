import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { MdFavoriteBorder, MdOutlineAccountCircle, MdOutlineLogout } from "react-icons/md";
import { doLogout } from "../redux/features/authSlice"
import { Link } from "react-router-dom";

const CustomPopup: FC = () => {
    const dispatch = useAppDispatch()
    const [isVisible, setVisible ] = useState(false)
    const username = useAppSelector((state) => state.authReducer.username)

    const handlePopup = () => {
        setVisible((v) => !v) 
    }

    const handleLogout = () => {
        dispatch(doLogout())
        hidePopup()
    }

    const hidePopup = () => {
        setVisible(false)
    }

    return (
        <div className="relative font-karla">
            <div>
                {username}
            </div>
            {isVisible && (
                <div className="" data-test="popup-content-list">
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-center">
                                    <MdOutlineAccountCircle></MdOutlineAccountCircle>
                                </td>
                                <td className="hover:underline cursor-pointer text-lg pl-2">
                                    <Link to="/account" onClick={hidePopup}></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            )}
        </div>
    )
    
}

export default CustomPopup