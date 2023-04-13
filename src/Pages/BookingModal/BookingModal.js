import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";

const BookingModal = ({
  modalData,
  setModalOpenCloseOne,
  refetch,
  modalOpenClose,
  setModalOpenClose,
}) => {
  const { user } = useContext(AuthContext);

  const {
    useDuration,
    time,
    title,
    reported,
    status,
    OriginalPrice,
    img,
    owner,
    location,
    price,
    condition,
    describe,
  } = modalData;

  const shoppingBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.productsName.value;
    const price = form.price.value;
    const orderUser = form.orderUser.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const location = form.location.value;
    const orders = {
      productsName: name,
      img,
      price,
      orderUser,
      phone,
      email,
      location,
    };
    fetch(`http://localhost:8000/orders-products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${user?.displayName} added successful!`);
        setModalOpenCloseOne(null);
        refetch();
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle font-Ubuntu "
      />
      <div className="modal capitalize font-Ubuntu">
        <div className="modal-box  relative border flex justify-center items-center rounded-md bg-white lg:shadow-2xl">
          <label
            htmlhtmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
          >
            ✕
          </label>
          <form
            onSubmit={shoppingBooking}
            className="modal-box relative space-y-5 ml-10 shadow-none bg-white"
            htmlhtmlFor=""
          >
            <input
              type="text"
              name="productsName"
              defaultValue={title}
              readOnly
              className="input input-bordered capitalize w-full max-w-xs bg-gray-300 text-[17px]"
            />
            <input
              type="text"
              name="price"
              defaultValue={price}
              readOnly
              className="input input-bordered capitalize w-full max-w-xs bg-gray-300 text-[17px]"
            />
            <input
              type="text"
              name="orderUser"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered capitalize w-full max-w-xs bg-gray-300 text-[17px]"
            />

            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="E-mail"
              className="input input-bordered capitalize w-full max-w-xs bg-gray-300 text-[17px]"
            />

            <input
              type="text"
              required
              name="phone"
              placeholder="Type Number"
              className="input input-bordered capitalize w-full max-w-xs bg-gray-300 text-[17px]"
            />
            <input
              type="text"
              name="location"
              required
              placeholder="Meet Your Location"
              className="input input-bordered capitalize w-full max-w-xs bg-gray-300 text-[17px]"
            />

            <input
              type="Submit"
              value="Submit"
              className="input input-bordered  text-[17px] w-full max-w-xs text-center bg-teal-400"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
