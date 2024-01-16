import { preferenceStates } from "./redux/allSelector/allSelector";
import { useSignal } from "@preact/signals-react";
import { usePreferenceMutation } from "./redux/slice/preference/preferenceApi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userLoggedIn } from "./redux/slice/authentication/authSlice";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { responseInterface } from "./utils/interface/response.interface";
import { useLocation } from "react-router-dom";
import { isEmpty } from "./utils/helper/helper.utlity";

const useApp = () => {
    const [preference, { isLoading }] = usePreferenceMutation();
    const { preference: preferences } = useSelector(preferenceStates);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            const authCookie = Cookies.get("auth");
            const userInfoFromStorage = authCookie
                ? JSON.parse(authCookie)
                : {};
            dispatch(userLoggedIn(userInfoFromStorage));
            isEmpty(preferences) && preference("");
        }
        return () => {
            isMounted = false;
        };
    }, []);
    const route = pathname?.match("/admin")?.index === 0;
    return { preferenceData: preferences, isLoading, route };
};
export default useApp;
