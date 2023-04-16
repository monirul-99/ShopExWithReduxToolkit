import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../Features/Auth/AuthAPI";
import { createUser, loginWithGoogle } from "../../Features/Auth/AuthSlice";
import auth from "../../Firebase/Firebase.config";
import { imageUpload } from "../../Reusable/uploadImage";
import img from "../images/upload.png";

const SignUp = () => {
  const [preview, setPreview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postUser, { isError, isLoading, error }] = useRegisterMutation();
  const imageUrl =
    "https://res.cloudinary.com/dr4o1qswz/image/upload/v1680428128/user-sign-uip_hgqyul.webp";
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "580px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle()).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        postUser({
          displayName: res?.payload?.name,
          email: res?.payload?.email,
          photoURL: res?.payload?.image,
        });
      }
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    const image = event.target.image.files[0];

    imageUpload(image).then((res) => {
      if (res.success) {
        dispatch(createUser({ email, password })).then((response) => {
          console.log("Response", response);

          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: res.data.display_url,
          })
            .then((resX) => {
              console.log(resX);
              postUser({
                displayName: name,
                email,
                password,
                photoURL: res.data.display_url,
              });
              navigate("/");
            })
            .catch((error) => {
              console.log("Error ---", error);
            });
        });
      }
    });
  };

  const handleImageChange = (image) => {
    setPreview(window.URL.createObjectURL(image));
  };
  return (
    <div className="h-[80vh] pt-14 bg-[#EFEFEF] flex justify-center items-center font-Poppins">
      <div className="flex w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg -mt-20">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={styles}></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <form onSubmit={handleSignUp}>
            <div className="flex space-x-4 items-center justify-center pt-5">
              <label
                htmlFor="image"
                className="relative w-32 h-32 border rounded-full cursor-pointer"
              >
                {!preview && <img className="absolute" src={img} alt="" />}
                <input
                  type="file"
                  onChange={(event) => handleImageChange(event.target.files[0])}
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />

                {preview && (
                  <img
                    src={preview}
                    className="absolute object-cover w-32 h-32 rounded-full"
                    alt="preview_img"
                  />
                )}
              </label>
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                className="block w-full px-4 py-2 text-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="name"
              />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
                <p className="text-xs text-gray-500 hover:underline">
                  Forget Password?
                </p>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-5">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>

              <button
                onClick={handleGoogleLogin}
                className="w-20 flex items-center justify-center cursor-pointer hover:bg-gray-400 hover:text-white text-gray-600 transition-colors duration-300 transform border rounded-lg"
              >
                <div className="px-4 py-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>

          {/* <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center mt-4 cursor-pointer hover:bg-gray-400 hover:text-white text-gray-600 transition-colors duration-300 transform border rounded-lg"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </button> */}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>

            <Link
              to="/signIn"
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
