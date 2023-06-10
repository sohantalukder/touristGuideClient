import React from "react";
import { useSelector } from "react-redux";
import Login from "../../authentication/login/Login";

const PrivateRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    if (!user?.token) {
        return <Login {...children.props} />;
    }
    return children;
};

export default PrivateRoute;
