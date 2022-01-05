import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/Firebase";
import { Spinner } from "@chakra-ui/react";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return <Spinner />;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
