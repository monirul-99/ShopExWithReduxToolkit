import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [error, setError] = useState("");
  console.log(setError);
  const navigate = useNavigate();
  const handleAddProducts = (event) => {
    event.preventDefault();

    const title = event.target.product.value;
    const price = event.target.price.value;
    const Location = event.target.Location.value;
    const OriginalPrice = event.target.OriginalPrice.value;
    const uses = event.target.uses.value;
    const condition = event.target.Condition.value;
    const describe = event.target.describe.value;
    const phone = event.target.phone.value;
    const image = event.target.image.files[0];
    // const productsId = event.target.productsId.value;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=70e236d404851847a6c8351a4a847f4b`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const items = {
            title: title,
            price: price,
            phone: phone,
            location: Location,
            img: imgData.data.display_url,
            OriginalPrice: OriginalPrice,
            useDuration: uses,
            condition: condition,
            describe: describe,
            time: new Date().toLocaleString(),
            // owner: user?.displayName,
            // email: user?.email,
            // productsId: parseInt(productsId),
            reported: false,
            status: "available",
            advertise: false,
          };
          fetch(`http://localhost:8000/add-product`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(items),
          })
            .then((res) => res.json())
            .then(() => {
              // toast.success(`${user?.displayName} added successful!`);
              navigate("/dashboard/myProducts");
            });
        }
      });
  };
  return (
    <div className="p-2 lg:p-0 mt-10">
      <div className="font-Babes text-4xl tracking-wide border-l-8 border-accent mt-0 lg:mt-10 w-5/6 mx-auto ">
        <h1 className="px-3 text-[21px] text-black">
          All Seller {""}
          <span className="text-accent tracking-widest">Environment</span>{" "}
        </h1>
        <h1 className="px-3 text-accent">
          products <span className="text-black">Card Create</span>
        </h1>
      </div>
      <div className="lg:w-5/6 mx-auto bg-gray-100 rounded-sm text-black mt-10">
        <form
          onSubmit={handleAddProducts}
          noValidate=""
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid p-12 font-Ubuntu text-white"
        >
          <div className="space-y-4">
            <div className="grid lg:grid-cols-3 gap-12 mb-10 lg:mt-0">
              <div>
                <label
                  htmlhtmlFor="product"
                  className="block mb-2 text-xl text-black"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="product"
                  id="product"
                  placeholder="Products Name"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label
                  htmlhtmlFor="price"
                  className="block mb-2 text-xl text-black"
                >
                  Product Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Products price"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label
                  htmlhtmlFor="Location"
                  className="block mb-2 text-xl text-black"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="Location"
                  id="Location"
                  placeholder="Location"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                  data-temp-mail-org="0"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-12 mb-10 lg:mt-0">
              <div>
                <label
                  htmlhtmlFor="OriginalPrice"
                  className="block mb-2 text-xl text-black"
                >
                  Original Price
                </label>
                <input
                  type="text"
                  name="OriginalPrice"
                  id="OriginalPrice"
                  placeholder="Original Price"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlhtmlFor="uses" className="text-xl text-black">
                    Year Of Purchase
                  </label>
                </div>
                <input
                  type="text"
                  name="uses"
                  id="uses"
                  required
                  placeholder="Year Of Use"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlhtmlFor="Condition" className="text-xl text-black">
                    Product Condition
                  </label>
                </div>
                <input
                  type="text"
                  name="Condition"
                  id="Condition"
                  required
                  placeholder="Good || Better || Best"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* <div className="mt-9 lg:mt-0">
                <label
                  htmlhtmlFor="productsId"
                  className="block mb-2 text-xl text-black"
                >
                  Special Product Number
                </label>
                <input
                  type="number"
                  name="productsId"
                  id="productsId"
                  placeholder="Between 1 | 2 | 3"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                  data-temp-mail-org="0"
                />
              </div> */}
              <div>
                <label
                  htmlhtmlFor="phone"
                  className="block mb-2 text-xl text-black"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number Here"
                  className="w-full px-4 py-3 border rounded-md text-sm   bg-gray-200 text-black"
                  data-temp-mail-org="0"
                />
              </div>
            </div>

            <div className="py-8">
              <label
                htmlhtmlFor="image"
                className="block mb-2 text-xl text-black"
              >
                Select Products Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="text-black"
                required
              />
            </div>

            <div>
              <label
                htmlhtmlFor="image"
                className="block mb-2 text-xl text-black"
              >
                Product Describe
              </label>
              <textarea
                name="describe"
                className="w-full h-28 rounded-sm p-2 bg-white text-black"
                placeholder="Products Info Provide"
              ></textarea>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="w-full px-8 py-3 font-semibold rounded-md bg-accent  text-gray-100">
                Add To Product
              </button>
              <p className="text-red-400">{error}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
