import React from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import {
  RiFacebookFill,
  RiHeart3Fill,
  RiHeart3Line,
  RiShoppingCart2Line,
  RiTwitterFill,
  RiWhatsappFill,
} from "react-icons/ri";

import Sorted from "./SortItems";
import SignIn from "../SignIn/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useAddToCardPostMutation,
  useGetProductsIdQuery,
} from "../../Features/Products/ProductApi";
import Loader from "../images/7YQl.gif";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  addToCart,
  quantityDecrease,
  quantityIncrease,
} from "../../Features/Auth/AuthSlice";
import { toast } from "react-hot-toast";
import { addLocalWishlist } from "../../Features/Wishlist/WishlistSlice";
import { useCreateWishlistMutation } from "../../Features/Wishlist/WishlistApi";

export function ProductsInfo() {
  const { user, modalData, cart } = useSelector((state) => state.Auth);
  const { wishlist } = useSelector((state) => state.Wish);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postWishlist] = useCreateWishlistMutation();
  const [postAddToCart] = useAddToCardPostMutation();
  const { data, isLoading } = useGetProductsIdQuery(id);
  const productData = data?.data[0];
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <img src={Loader} alt="" />
      </div>
    );
  }
  const {
    OriginalPrice,
    availableQuantity,
    bestSeller,
    describe,
    img,
    price,
    title,
    _id,
  } = productData;

  const handleFacebookShare = () => {
    const facebookURL = `https://www.facebook.com/sharer.php?u=${location.pathname}`;
    window.open(facebookURL, "popup", "width= 500, height= 500");
  };

  const handleTwitterShare = () => {
    const twitterURL = `https://twitter.com/intent/tweet?url=${location.pathname}`;
    window.open(twitterURL, "popup", "width= 500, height= 500");
  };

  const handleWhatsappShare = () => {
    const twitterURL = `https://web.whatsapp.com/send?text=${location.pathname}`;
    window.open(twitterURL, "popup", "width= 500, height= 500");
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

  const addToCartList = ({
    _id,
    title,
    describe,
    img,
    price,
    productQuantity,
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
      productQuantity,
      status,
      quantity: modalData?.quantity,
    };

    let findData = cart?.find((item) => item.title === title);
    if (modalData.quantity === 0) {
      toast.error("Please Increase Your Product Quantity!");
      return;
    }

    if (findData) {
      toast.error(`${findData.title} Already added in Cart List`);
      return;
    }

    postAddToCart({ ...provideData, paid: false }).then((res) =>
      console.log("Res", res)
    );
    dispatch(addToCart({ ...provideData }));
    toast.success(`Product add successful!`);
  };

  const match = wishlist?.find((item) => item.title === title);
  return (
    <>
      {/* <section className="relative bg-[url(https://res.cloudinary.com/dr4o1qswz/image/upload/v1672635981/Tree%20SHOP/UpdateTree/Untitled-2_e9x6ul.jpg)] bg-cover bg-center bg-no-repeat lg:h-[200px] h-[180px]">
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
          <div className="text-center sm:text-left ">
            <h1 className="lg:text-4xl text-3xl text-center font-Poppins text-white font-bold">
              #stayHome
            </h1>

            <p className="mt-4 font-Poppins text-white">
              Save more with coupons & up to 70% off!
            </p>
          </div>
        </div>
      </section> */}

      <section className="py-10">
        <div className="container mx-auto font-Libre">
          <div className="grid lg:grid-cols-2 gap-10 lg:w-[80%] w-[98%] mx-auto">
            <aside className="relative z-10 border-r border-b">
              <img
                className="lg:w-[594px] lg:h-[645px] w-full"
                src={img}
                alt=""
              />
            </aside>
            <aside className="px-5">
              <div>
                <p className="font-Ubuntu">
                  <span className="uppercase font-light text-gray-500 tracking-widest">
                    {bestSeller ? "Best Seller" : "Regular Product"}
                  </span>
                </p>
                <h1 className="font-Poppins text-3xl mt-1 capitalize text-slate-900 font-semibold">
                  {title}
                </h1>
                <div className="flex items-center space-x-3 font-Poppins text-[0.9rem]">
                  <div className="flex items-center py-5">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
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
                  {/* <p>({condition} Review)</p> */}
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <p className="text-[#3A9943] text-2xl font-bold">${price}</p>
                  <sup className="line-through text-xl">
                    ${OriginalPrice ? OriginalPrice : 0}
                  </sup>
                </div>

                <div className="space-y-2 border-b mt-7 pb-4 mb-7">
                  <p>
                    Quantity Available :{" "}
                    <span className="text-[#3A9943]">{availableQuantity}</span>
                  </p>
                  <p>
                    Brand :{" "}
                    <span className="text-[#3A9943] uppercase">Unknown</span>
                  </p>
                  <p>
                    Products Code :{" "}
                    <span className="text-[#3A9943] uppercase">{_id}</span>
                  </p>
                  <p>
                    Available :{" "}
                    <span className="text-[#3A9943]">
                      {availableQuantity <= 0 ? "Sold Out" : "In Stock"}
                    </span>
                  </p>
                </div>

                {describe && (
                  <p className="border-b pb-5 text-[0.9rem] text-justify">
                    {describe}
                  </p>
                )}

                <div className="mt-7 flex items-center space-x-3">
                  <div className="flex items-center space-x-3">
                    <p>Qty</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => dispatch(quantityDecrease())}
                        className={`duration-300 bg-gray-200/80 hover:bg-gray-300/95 p-2.5 rounded-sm ${
                          modalData.quantity === 0 ? "cursor-not-allowed" : ""
                        }`}
                      >
                        <AiOutlineMinus color="gray " size={23} />
                      </button>

                      <h1>{modalData?.quantity}</h1>

                      <button
                        onClick={() => dispatch(quantityIncrease())}
                        className="duration-300 bg-gray-200/80 hover:bg-gray-300/95 p-2.5 rounded-sm"
                      >
                        <AiOutlinePlus color="gray " size={23} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => wishlistAdded(productData)}
                    className="border text-white px-6 py-2.5 rounded-sm font-Poppins text-[0.9rem] hidden lg:block md:block"
                  >
                    {match?.title && <RiHeart3Fill color="red" size={23} />}
                    {!match?.title && (
                      <RiHeart3Line size={23} color="#ABADAF" />
                    )}
                  </button>

                  <button
                    onClick={() => addToCartList(productData)}
                    className="bg-[#f67321] text-white px-6  py-[11.5px] rounded-sm font-Poppins text-[0.9rem] w-[51.3%] hidden lg:block md:block"
                  >
                    <div className=" flex items-center justify-center space-x-2">
                      <IconContext.Provider value={{ color: "", size: 23 }}>
                        <RiShoppingCart2Line />
                      </IconContext.Provider>
                      <span className="text-[0.9rem]"> Add To Cart</span>
                    </div>
                  </button>

                  <button
                    // onClick={() => shoppingBooking(data)}
                    className="bg-[#f67321] text-white px-6  py-[11.5px] rounded-sm font-Poppins text-[0.9rem] lg:hidden md:hidden"
                  >
                    <IconContext.Provider value={{ color: "", size: 23 }}>
                      <RiShoppingCart2Line />
                    </IconContext.Provider>
                  </button>

                  <button
                    // onClick={() => wishlistBooking(data)}
                    className="bg-[#3a9943ce] text-white px-6  py-[11.5px] rounded-sm font-Poppins text-[0.9rem] lg:hidden md:hidden"
                  >
                    <IconContext.Provider value={{ color: "", size: 23 }}>
                      <HiOutlineHeart />
                    </IconContext.Provider>
                  </button>
                </div>

                <div className="mt-10">
                  <p className="font-Poppins text-[0.9rem] mb-3">
                    Share products
                  </p>
                  <aside className="flex items-center space-x-5 mt-2 mb-3">
                    <div
                      onClick={handleFacebookShare}
                      className="border p-1 cursor-pointer"
                    >
                      <IconContext.Provider
                        value={{ color: "#1977F2", size: 18 }}
                      >
                        <RiFacebookFill />
                      </IconContext.Provider>
                    </div>

                    <div
                      onClick={handleTwitterShare}
                      className="border p-1 cursor-pointer"
                    >
                      <IconContext.Provider
                        value={{ color: "#1DA1F2", size: 18 }}
                      >
                        <RiTwitterFill />
                      </IconContext.Provider>
                    </div>

                    <div
                      onClick={handleWhatsappShare}
                      className="border p-1 cursor-pointer"
                    >
                      <IconContext.Provider
                        value={{ color: "#44C553", size: 18 }}
                      >
                        <RiWhatsappFill />
                      </IconContext.Provider>
                    </div>
                  </aside>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="container mx-auto lg:w-[65%] pb-1 lg:mt-16">
          <div className="flex items-center justify-between mt-16 space-x-5 bg-gray-200 h-16">
            <h1 className="text-center lg:text-xl font-Poppins pl-3 text-slate-800">
              {/* {reviewData.length} Review */}
            </h1>
            <aside className="flex items-center font-Libre">
              <Sorted />
            </aside>
          </div>

          <div className="mt-7 font-Libre flex items-center space-x-3 px-3 lg:px-0 mb-20">
            {user?.image && (
              <>
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full ring-2">
                    <img src={user?.image} alt="" />
                  </div>
                </div>

                <div className="w-full flex items-center justify-between gap-5">
                  <input
                    // onChange={(e) => setReview(e.target.value)}
                    className="border lg:py-2.5 py-2 w-10/12 rounded-full pl-5 text-sm text-slate-900 bg-gray-100"
                    type="text"
                    placeholder="Write a Public Review"
                  />

                  <button
                    onClick={() => {
                      // reviewsBooking(review, _id);
                    }}
                    className="bg-slate-800 text-white px-5 lg:py-2.5 rounded py-2 text-sm"
                  >
                    Review
                  </button>
                </div>
              </>
            )}
            {!user?.image && (
              <div className="-mb-10">
                <p className="text-black">
                  First login complete then review add.
                  <div className="dropdown cursor-pointer">
                    <label tabIndex={0} className="cursor-pointer">
                      <p className="text-blue-400 pl-1">Login</p>
                    </label>
                    <div tabIndex={0} className="dropdown-content shadow">
                      <SignIn />
                    </div>
                  </div>
                </p>
              </div>
            )}
          </div>

          {/* <div className="font-Libre space-y-10 px-3 lg:px-0">
            {?.map((rData, inx) => (
              <div className="flex space-x-3" key={inx}>
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full ring-2">
                    <img src={rData.img} alt="" />
                  </div>
                </div>

                <aside>
                  <h1 className="text-slate-900 font-semibold">{rData.user}</h1>
                  <h1 className="text-slate-600 text-sm">
                    {rData.review.slice(0, 130)}
                  </h1>
                </aside>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
