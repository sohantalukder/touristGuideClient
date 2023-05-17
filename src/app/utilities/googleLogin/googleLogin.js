import { useGoogleLogin } from "@react-oauth/google";
import { userLoggedIn } from "../../redux/slice/authentication/authSlice";
import { mutation } from "../../utilities/apiRequest/apiRequest";
import { BASE_API_URL } from "../../../../config";
export const googleLogin = async (dispatch) => {
    console.log("first");
    return useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const userInfo = await query(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                "GET",
                tokenResponse?.access_token
            );
            const getLogin = await mutation(
                `${BASE_API_URL}/auth/googleLogin`,
                "POST",
                userInfo
            );
            dispatch(
                userLoggedIn({
                    user: getLogin?.response?.records,
                })
            );
        },
    });
};
