import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Shared/useAdmin";
import { AuthContext } from "../Context/UserContext";
import Spinner from "../Shared/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  const [isSeller, sellerLoading] = useAdmin(user?.email);

  const location = useLocation();

  if (loading || adminLoading || sellerLoading) {
    return <Spinner />;
  }
  if (user && isAdmin) {
    return children;
  }
  if (isSeller) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
