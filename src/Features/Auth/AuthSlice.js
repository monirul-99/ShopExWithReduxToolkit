import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { toast } from "react-hot-toast";

const initialState = {
  user: { name: "", email: "", image: "" },
  modalData: {
    _id: "",
    image: "",
    title: "",
    describe: "",
    price: "",
    status: "",
    quantity: 0,
    email: "",
    productQuantity: "",
    secretId: "",
  },
  cart: [],
  cartLength: 0,
  isLoading: false,
  isError: false,
  error: "",
};

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const res = await fetch(
    `${process.env.REACT_APP_DEV_URL}/api/v1/users/${email}`
  );
  const data = await res.json();
  return {
    email: data?.data?.email,
    image: data?.data?.photoURL,
    name: data?.data?.displayName,
  };
});

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user;
  }
);

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    return {
      email: data?.user?.email,
      image: data?.user?.photoURL,
      name: data?.user?.displayName,
    };
  }
);

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user.email = "";
      state.user.name = "";
      state.user.image = "";
      state.cart = [];
    },
    modalInfo: (state, { payload }) => {
      state.modalData._id = payload._id;
      state.modalData.image = payload.img;
      state.modalData.title = payload.title;
      state.modalData.describe = payload.describe;
      state.modalData.price = payload.price;
      state.modalData.status = payload.status;
      state.modalData.email = state.user.email;
      state.modalData.productQuantity = payload.availableQuantity;
    },
    quantityIncrease: (state) => {
      state.modalData.quantity += 1;
      state.modalData.productQuantity -= 1;
    },
    quantityDecrease: (state) => {
      if (state.modalData.quantity === 0) {
        return;
      }
      state.modalData.quantity -= 1;
      state.modalData.productQuantity += 1;
    },
    quantityZero: (state) => {
      state.modalData.quantity = 0;
    },
    addToCart: (state, { payload }) => {
      if (state.modalData.quantity <= 0) {
        toast.error("Please Increase Your Product Quantity!");
        return;
      }
      state.cart = [...state.cart, payload];
    },
    addToCartForWish: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    addToCartTwo: (state, { payload }) => {
      state.cart = [...state.cart, payload];
      toast.success("Product Added Successfully!");
    },
    fetchToCart: (state, { payload }) => {
      console.log(payload);
      state.cart = [...state.cart, payload];
    },
    cartQuantityIncrease: (state, { payload }) => {
      const targetProduct = state.cart.find((item) => item._id === payload);
      targetProduct.quantity += 1;
      targetProduct.productQuantity -= 1;
    },
    cartQuantityDecrease: (state, { payload }) => {
      const targetProduct = state.cart.find((item) => item._id === payload);
      if (targetProduct.quantity === 0) {
        toast.error("Not Negative Quantity Accept!");
        return;
      }
      targetProduct.quantity -= 1;
      targetProduct.productQuantity += 1;
    },
    cartProductRemove: (state, { payload }) => {
      console.log("Cart Remove", payload);
      const findProduct = state.cart.filter((item) => item.mainId !== payload);
      state.cart = findProduct;
    },
    attachCartLength: (state, { payload }) => {
      state.cartLength = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload.email;
        state.user.name = payload.displayName;
        state.user.image = payload.photoURL;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.image = payload.image;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.image = payload.image;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const {
  setUser,
  logout,
  modalInfo,
  quantityIncrease,
  quantityDecrease,
  quantityZero,
  addToCart,
  fetchToCart,
  cartQuantityIncrease,
  cartQuantityDecrease,
  cartProductRemove,
  addToCartTwo,
  addToCartForWish,
  attachCartLength,
} = AuthSlice.actions;
export default AuthSlice.reducer;
