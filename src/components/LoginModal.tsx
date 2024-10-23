import { FC, FormEvent, useState } from "react"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { doLogin, updateModal } from "../redux/features/authSlice"
import { FaUnlock } from "react-icons/fa"
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri"
import { GiArchiveRegister } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"


const LoginModal: FC = () => {
    const [clicked, setClicked] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useAppDispatch()
    const open = useAppSelector((state) => state.authReducer.modalOpen)

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(doLogin({ username, password}))
    }

    if(open) {
        return (
            <div className="">
                <div className="relative border shadow rounded p-8">
                    <RxCross1 className="absolute cursor-pointer right-5 top-5 hover:opacity-85">

                    </RxCross1>
                    { clicked ? (
                        <>
                        <div className="flex mb-2 space-x-2 justify-center items-center">
                            <GiArchiveRegister></GiArchiveRegister>
                            <h3 className="font-bold text-center text-xl">Register</h3>
                            <GiArchiveRegister></GiArchiveRegister>
                            <p className="">
                                This is a hobby prohect for development purpose only.No well suited
                                backend has been used here. Please use<b>charles</b> as username &
                                <b>test123</b> as password
                            </p>
                        </div>
                        </>
                    ): (
                        <>
                        <div className="flex mb-2 space-x-2 justify-center items-center">
                            <FaUnlock></FaUnlock>
                            <h3 className="font-bold text-center text-2xl">Login</h3>
                            <FaUnlock></FaUnlock>
                        </div>
                        <form>
                            <div>
                                <input>
                                </input>
                                <RiUser3Fill></RiUser3Fill>
                            </div>
                        </form>
                        </>
                    )}
                </div>
            </div>
        )
    }
}


export default LoginModal