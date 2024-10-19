import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FC } from "react"
import FeatureCard from "./FeatureCard";

const data = [
    {
        icon: <TbTruckDelivery className="text-4xl dark:text-white"></TbTruckDelivery>,
        title: "Free Delivery",
        desc: "Orders from all the items"
    },
    {
        icon: <RiRefund2Fill className="text-4xl dark:text-white"></RiRefund2Fill>,
        title: "Return & Refund",
        desc: "Money Back Guarantee"
    },
    {
        icon: <TbDiscount className="text-4xl dark:text-white"></TbDiscount>,
        title: "Member Discount",
        desc: "On order over 999"
    },
    {
        icon: <MdSupportAgent className="text-4xl dark:text-white"></MdSupportAgent>,
        title: "Support 24/7",
        desc: "Contact us 24 hours a day"
    }
]

const Features: FC = () => (
    <div className="">
        {data.map((item) => (
            <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            >
            </FeatureCard>
        ))}
    </div>
)

export default Features