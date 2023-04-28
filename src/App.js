import AOS from "aos";
import "aos/dist/aos.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { productAttachToCart, getUser } from "./Features/Auth/AuthSlice";
import auth from "./Firebase/Firebase.config";
import { Router } from "./Router/Routes";
import { useGetWishDataQuery } from "./Features/Wishlist/WishlistApi";
import { loadWishlist } from "./Features/Wishlist/WishlistSlice";
import { useCartDataGetWithEmailQuery } from "./Features/Products/ProductApi";
function App() {
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();

  const { data: newData } = useGetWishDataQuery(email);
  const { data } = useCartDataGetWithEmailQuery(email);
  const wishData = newData?.data;
  const cartData = data?.data;
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user?.email));
        dispatch(loadWishlist(wishData));
        dispatch(productAttachToCart(cartData));
        setEmail(user?.email);
      }
    });
  }, [dispatch, wishData, cartData]);

  return (
    <div className="bg-white font-Josefin">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
