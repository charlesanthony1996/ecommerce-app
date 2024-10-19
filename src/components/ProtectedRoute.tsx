import { FC } from "react";
import { Outlet, Navigate} from "react-router-dom"
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute: FC = () => {
    const isLoggedin = useAppSelector((state) => state.authReducer.isloggedIn)
    return isLoggedin ? <Outlet></Outlet> : <Navigate to="/"></Navigate>
}

export default ProtectedRoute