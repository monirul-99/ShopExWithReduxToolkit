import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import {
  RiEyeLine,
  RiHeart3Fill,
  RiHeart3Line,
  RiShoppingCartLine,
} from "react-icons/ri";
import "./BestProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCartTwo, modalInfo } from "../../Features/Auth/AuthSlice";
import { toast } from "react-hot-toast";
import { useAddToCardPostMutation } from "../../Features/Products/ProductApi";
import { useCreateWishlistMutation } from "../../Features/Wishlist/WishlistApi";
import {
  activeProduct,
  addLocalWishlist,
} from "../../Features/Wishlist/WishlistSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../images/7YQl.gif";

const BestProductsCard = ({ best, openModal }) => {
  const { title, img, price } = best;
  const { cart, user } = useSelector((state) => state.Auth);
  const { wishlist } = useSelector((state) => state.Wish);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postAddToCart] = useAddToCardPostMutation();
  const [postWishlist] = useCreateWishlistMutation();

  const provideDataToModal = () => {
    dispatch(modalInfo(best));
  };

  const directAddToCart = ({
    _id,
    title,
    describe,
    img,
    price,
    availableQuantity,
    status,
  }) => {
    if (!user?.email) {
      navigate("/signIn");
      return;
    }
    const provideData = {
      mainId: _id,
      title,
      email: user?.email,
      describe,
      image: img,
      price,
      productQuantity: availableQuantity,
      status,
      quantity: 1,
    };
    let findData = cart?.find((item) => item._id === _id);
    if (findData) {
      toast.error(`${findData.title} Already added in Cart List`);
      return;
    }

    postAddToCart({ ...provideData, paid: false });
    dispatch(addToCartTwo({ ...provideData }));
  };

  const wishlistAdded = ({
    title,
    status,
    price,
    img,
    _id,
    describe,
    availableQuantity,
  }) => {
    if (!user?.email) {
      navigate("/signIn");
      return;
    }
    const matchProduct = wishlist.find((item) => item.mainId === _id);
    if (matchProduct) {
      toast.error("Already Added!");
      return;
    }
    const mainData = {
      title,
      describe,
      status,
      price,
      img,
      availableQuantity,
      mainId: _id,
      email: user?.email,
    };
    postWishlist(mainData).then((res) => {
      if (res?.data?.success) {
        dispatch(addLocalWishlist(mainData));
        toast.success("Wishlist added Completed!");
      }
    });
  };

  const match = wishlist?.find((item) => item.title === title);

  return (
    <>
      <section
        className="border hoverEffect cardHover cursor-pointer"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <aside className="relative bg-white lg:h-[250px] h-[170px] flex flex-col justify-center items-center">
          <img
            className={`object-center duration-300 hover:scale-110 ${
              title === "Simple Summer Dress"
                ? "w-[110px]"
                : "lg:w-[170px] w-[130px]"
            }`}
            src={img}
            alt=""
          />
          <div className="absolute top-3 right-3 visibleText duration-300 cursor-pointer font-Poppins">
            <div className="flex flex-row-reverse">
              <div
                onClick={() => {
                  wishlistAdded(best);
                }}
                className="px-1"
              >
                {match?.title && <RiHeart3Fill color="red" size={23} />}
                {!match?.title && <RiHeart3Line size={23} color="#ABADAF" />}
              </div>

              {!match?.title && (
                <p className="bg-white text-xs px-2 py-1 text-black duration-300 extraCss">
                  Add To Wishlist
                </p>
              )}
              {match?.title && (
                <p className="bg-white text-xs px-2 py-1 text-black duration-300 extraCss">
                  Already Added
                </p>
              )}
            </div>
          </div>

          <div className="absolute bottom-2 w-full">
            <aside className="flex items-center justify-center space-x-2 visibleCart">
              <div
                onClick={() => {
                  directAddToCart(best);
                }}
                className="cursor-pointer w-10 h-10 bg-black duration-500 hover:bg-[#797B7E] p-3 rounded-full flex items-center justify-center"
              >
                <IconContext.Provider value={{ size: 20, color: "white" }}>
                  <RiShoppingCartLine />
                </IconContext.Provider>
              </div>
              <label
                onClick={() => {
                  openModal();
                  provideDataToModal();
                }}
                htmlFor="my-modal-3"
                className="cursor-pointer w-10 h-10 bg-black duration-500 hover:bg-[#797B7E] p-3 rounded-full flex items-center justify-center"
              >
                <IconContext.Provider value={{ size: 20, color: "white" }}>
                  <RiEyeLine />
                </IconContext.Provider>
              </label>
            </aside>
          </div>
        </aside>
        <aside className="font-Libre flex flex-col items-center py-4 space-y-1">
          <div className="flex items-center">
            {" "}
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <h1 className="capitalize font-semibold text-[#121212] text-sm lg:text-[16px]">
            {title}
          </h1>
          <p>${price}</p>
        </aside>
      </section>
    </>
  );
};

export default BestProductsCard;
