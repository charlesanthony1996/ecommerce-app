import { updateModal } from "../redux/features/authSlice"
import { useAppSelector, useAppDispatch } from "../redux/hooks"

const useAuth = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector((state) => state.authReducer.isloggedIn)

    const requireAuth = (action: () => void) => {
        if(!isLoggedIn) {
            dispatch(updateModal(true))
        } else {
            action()
        }
    }

    return { requireAuth }
}

export default useAuth