import { FC } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { setCartState } from "../redux/features/cartSlice"
import 