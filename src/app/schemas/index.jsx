import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
<<<<<<< HEAD
    password: Yup.string().required("Please enter your password"),
=======
    password: Yup.string().min(6).required("Please enter your password"),
>>>>>>> dev
});
