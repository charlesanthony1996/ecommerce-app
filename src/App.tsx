import { Provider } from "react-redux";
import "./App.css"
import { store } from "./redux/store";
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import WishList from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPopup from "./components/BannerPopup";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";


function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<AllProducts></AllProducts>}></Route>
        <Route path="/categories" element={<AllCategories></AllCategories>}></Route>
        <Route path="/category/:productID" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="/category/:slug" element={<SingleCategory></SingleCategory>}></Route>
        <Route path="/wishlist" element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/wishlist" element={<WishList></WishList>}></Route>
        </Route>
        <Route path="/account" element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/account" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false}></Toaster>
      <Footer></Footer>
      <Cart></Cart>
      <LoginModal></LoginModal>
      <ScrollToTopButton></ScrollToTopButton>
      <BannerPopup></BannerPopup>
    </Provider>
  )
}

export default App