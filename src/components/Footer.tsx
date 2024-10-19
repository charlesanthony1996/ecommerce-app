import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => (
    <div>
        <div></div>
        <div>
            <Link
            to="https://github.com/charlesanthony1996"
            className="
            hover:underline 
            hover:font-bold
            opacity-85
            hover:opacity-100"
            >
                Charles Anthony
            </Link>
        </div>
    </div>
)

export default Footer