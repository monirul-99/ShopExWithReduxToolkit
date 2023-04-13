import AOS from "aos";
import "aos/dist/aos.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { getUser } from "./Features/Auth/AuthSlice";
import auth from "./Firebase/Firebase.config";
import { Router } from "./Router/Routes";
function App() {
  const dispatch = useDispatch();
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
      }
    });
  }, [dispatch]);
  return (
    <div className="bg-white font-Josefin">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
