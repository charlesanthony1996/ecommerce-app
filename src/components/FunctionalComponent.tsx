import { FC } from "react";

interface myComponentProps {
    name: string
}

const MyComponent: FC<myComponentProps> = ({ name }) => {
    return <div>Hello, {name}!</div>
}

export default MyComponent