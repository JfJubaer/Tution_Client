import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Pages/spinner/Spinner";



const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <>
      <Spinner></Spinner>
    </>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;