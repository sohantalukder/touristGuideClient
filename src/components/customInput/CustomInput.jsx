import PropTypes from "prop-types";
const CustomInput = ({
    type = "text",
    style,
    placeholder = "",
    name = "",
    error,
    isError,
    leftIcon,
    rightIcon,
    label = "",
    labelStyle = "",
    required = false,
    ref,
    editable = false,
    value,
    onChange,
    passwordShown,
    maxLength = "",
    minLength = "",
    onBlur,
}) => {
    return (
        <>
            {label && (
                <label
                    htmlFor={name}
                    className={`${labelStyle} text-start ${
                        required &&
                        `after:content-['*'] after:ml-0.5 after:text-red mb-1`
                    } block`}
                >
                    {label}
                </label>
            )}
            {rightIcon}
            <input
                type={passwordShown ? "text" : type}
                className={`control-form ${style}  ${
                    isError && !editable
                        ? `!border-red focus:!border-red`
                        : editable
                        ? "!border-mediumGray !bg-mediumGray"
                        : "!border-mediumGray focus:!border-green"
                }
                `}
                ref={ref}
                id={name}
                value={value}
                required={required}
                placeholder={placeholder}
                name={name}
                maxLength={maxLength}
                minLength={minLength}
                disabled={editable}
                onChange={onChange}
                onBlur={onBlur}
            />
            {leftIcon}
            {isError && error && (
                <p className='text-red pt-1 text-left text-sm '>
                    {error?.trim()?.charAt(0).toUpperCase() + error.slice(1)}
                </p>
            )}
        </>
    );
};

export default CustomInput;

CustomInput.propTypes = {
    type: PropTypes.string,
    style: PropTypes.string || PropTypes.object,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    isError: PropTypes.bool,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    label: PropTypes.string,
    labelStyle: PropTypes.string || PropTypes.object,
    required: PropTypes.bool,
    ref: PropTypes.any,
    editable: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    passwordShown: PropTypes.bool,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    onBlur: PropTypes.func,
};
