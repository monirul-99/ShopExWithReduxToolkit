import React from "react";
import { IconContext } from "react-icons";
import {
  RiEyeLine,
  RiShoppingCartLine,
  RiHeart3Line,
  RiHeart3Fill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addToCartTwo, modalInfo } from "../../Features/Auth/AuthSlice";
import { toast } from "react-hot-toast";
import { useCreateWishlistMutation } from "../../Features/Wishlist/WishlistApi";
import { addLocalWishlist } from "../../Features/Wishlist/WishlistSlice";
import { useAddToCardPostMutation } from "../../Features/Products/ProductApi";
import { useNavigate } from "react-router-dom";

const Products = ({ product, openModal, closeModal }) => {
  const { title, img, price } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.Auth);
  const { wishlist } = useSelector((state) => state.Wish);
  const [postWishlist] = useCreateWishlistMutation();
  const [postAddToCart] = useAddToCardPostMutation();

  const provideDataToModal = () => {
    dispatch(modalInfo(product));
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
    console.log(provideData);
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
    <section
      className="border hoverEffect cardHover cursor-pointer"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <aside className="relative bg-white h-[250px] flex flex-col justify-center items-center">
        <img
          className={`object-center duration-300 hover:scale-110 ${
            title === "Simple Summer Dress" ? "w-[110px]" : "w-[170px]"
          }`}
          src={img}
          alt=""
        />
        <div className="absolute top-3 right-3 font-Poppins visibleText duration-300 cursor-pointer">
          <div className="flex flex-row-reverse">
            <div
              onClick={() => {
                wishlistAdded(product);
              }}
              className="px-1 cursor-pointer"
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
                directAddToCart(product);
              }}
              className="cursor-pointer w-10 h-10 bg-black duration-500 hover:bg-[#797B7E] p-3 rounded-full flex items-center justify-center"
            >
              <IconContext.Provider value={{ size: 20, color: "white" }}>
                <RiShoppingCartLine />
              </IconContext.Provider>
            </div>
            <label
              htmlFor="my-modal-3"
              onClick={() => {
                provideDataToModal();
                openModal();
              }}
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
        <h1 className="capitalize font-semibold text-[#121212]">{title}</h1>
        <p>${price}</p>
      </aside>
    </section>
  );
};

export default Products;
