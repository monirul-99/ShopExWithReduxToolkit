import AOS from "aos";
import "aos/dist/aos.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { attachCartLength, getUser } from "./Features/Auth/AuthSlice";
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
  const dataLength = data?.data?.length;
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
        dispatch(attachCartLength(dataLength));
        setEmail(user?.email);
      }
    });
  }, [dispatch, wishData, dataLength]);

  return (
    <div className="bg-white font-Josefin">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
