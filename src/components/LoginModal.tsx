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
    

    return (
        <div>

        </div>
    )
}


export default LoginModal