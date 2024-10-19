import { FC } from "react";
import { Link } from "react-router-dom";

const HeroSection: FC = () => {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <p className="">
                            Starting at <span>$999</span>
                        </p>
                        <h2>
                            The best notebook collection 2024
                        </h2>
                        <h3>
                            Exclusive offer <span></span>
                        </h3>
                        <Link
                        to="/product/6"
                        data-test="hero-btn"
                        className="
                        inline-block"
                        >
                        Shop Now
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/hero.png" alt="hero" className="ml-auto"></img>
                </div>
            </div>
        </div>
    )
}

export default HeroSection