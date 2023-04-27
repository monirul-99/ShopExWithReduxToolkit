import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWishlistRemoveMutation } from "../../Features/Wishlist/WishlistApi";
import { removeLocalWishlist } from "../../Features/Wishlist/WishlistSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addToCartForWish } from "../../Features/Auth/AuthSlice";
import { useAddToCardPostMutation } from "../../Features/Products/ProductApi";

const WishlistCard = ({ product }) => {
  const { img, price, title, status, _id } = product;
  const { cart, user } = useSelector((state) => state.Auth);
  const [postAddToCart] = useAddToCardPostMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wishRemove] = useWishlistRemoveMutation();

  const wishDataRemove = (id) => {
    console.log(id);
    wishRemove(id).then((res) => {
      if (res?.data?.data?.acknowledged) {
        dispatch(removeLocalWishlist(id));
        toast.success("Remove Success!");
      }
    });
  };

  const addToCartList = ({
    _id,
    title,
    img,
    price,
    describe,
    status,
    availableQuantity,
    mainId,
  }) => {
    if (!user?.email) {
      navigate("/signIn");
      return;
    }

    const provideData = {
      mainId,
      title,
      email: user?.email,
      describe,
      image: img,
      price,
      productQuantity: availableQuantity,
      status,
      quantity: 1,
    };
    let findData = cart?.find((item) => item.title === title);

    if (findData) {
      toast.error(`${findData.title} Already added in Cart List`);
      return;
    }

    postAddToCart({ ...provideData, paid: false }).then((res) => {
      if (res?.data?.data?.acknowledged) {
        dispatch(addToCartForWish(provideData));
        wishRemove(_id).then((res) => {
          if (res?.data?.data?.acknowledged) {
            dispatch(removeLocalWishlist(_id));
            toast.success("Move To Cart Section");
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="w-full grid grid-cols-5 py-5">
          <aside className="grid col-span-1 p-1">
            <div className="inline-flex items-center gap-x-3">
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-16 h-16 rounded-full"
                  src={img}
                  alt=""
                />
                <div className="hidden lg:block">
                  <h2 className="font-medium text-gray-800 font-Libre">
                    {title}
                  </h2>

                  <p className="font-Poppins text-sm">@no_brand</p>
                </div>
              </div>
            </div>
          </aside>
          <aside className="grid col-span-1 justify-center p-1">
            <aside className="flex items-center space-x-3">
              <p className="font-Poppins text-sm font-light text-[#4F938C]">
                {status === "available" && "in Stock"}
              </p>
            </aside>
          </aside>

          <aside
            onClick={() => {
              wishDataRemove(_id);
            }}
            className="grid col-span-1 justify-center p-1"
          >
            <div className="flex items-center gap-x-6">
              <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </aside>
          <aside className="grid col-span-1 justify-center items-center p-1">
            ${price}
          </aside>
          <aside className="grid col-span-1 justify-center items-center p-1">
            <button
              htmlFor="my-modal-3"
              onClick={() => {
                addToCartList(product);
              }}
              className="bg-[#001646] px-5 py-[10px] text-white w-full rounded-full text-sm"
            >
              <span className="hidden lg:block md:block"> Add To Cart</span>
              <span className="block lg:hidden md:hidden">Cart</span>
            </button>
          </aside>
        </div>
        <p className="h-0.5 bg-gradient-to-r from-white via-slate-800/25 to-white"></p>
      </div>
    </div>
  );
};

export default WishlistCard;
