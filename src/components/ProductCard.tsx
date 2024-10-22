import { FC } from "react";
import { Product } from "../models/Product";
import RatingStar from "./RatingStar";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import PriceSection from "./PriceSection";
import useAuth from "../hooks/useAuth"