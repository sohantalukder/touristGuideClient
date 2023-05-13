import { validateEmail } from "../Validtion/Validation";

export const handleSetInfo = (
    name,
    value,
    setInfoValue,
    infoValue,
    setError,
    error,
    setEmailError
) => {
    if (name) {
        if (name === "email") {
            if (validateEmail(value)) {
                setInfoValue({
                    ...infoValue,
                    [name]: value,
                });
                setEmailError(false);
            } else {
                if (value.length > 0) {
                    setInfoValue({
                        ...infoValue,
                        [name]: value,
                    });
                    setEmailError(true);
                } else {
                    setInfoValue({
                        ...infoValue,
                        [name]: value,
                    });
                    setEmailError(false);
                }
            }
        } else {
            setInfoValue({ ...infoValue, [name]: value });
        }
    } else {
        setInfoValue({
            ...infoValue,
            [name]: value,
        });
        setError({ ...error });
    }
};
