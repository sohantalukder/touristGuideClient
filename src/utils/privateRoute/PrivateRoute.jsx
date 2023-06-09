import React from "react";
import { useSelector } from "react-redux";
import Login from "../../authentication/login/Login";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();
    const { user } = useSelector((state) => state.auth);
    if (!user?.token) {
        return <Login {...children.props} />;
    } else if (
        (user?.token && pathname === "/login") ||
        (user?.token && pathname === "/register")
    ) {
        return <Navigate replace='/' />;
    }
    return children;
};

export default PrivateRoute;
