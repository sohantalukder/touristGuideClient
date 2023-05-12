"use client";
import React from "react";

const CustomInput = ({
    type = "text",
    style,
    placeholder = "",
    name = "",
    pattern = "",
    error,
    isError,
    leftIcon,
    rightIcon,
    label = "",
    labelStyle = "",
    required = false,
    id = "",
    ref,
    editable,
    value,
    onChange,
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
                type={type}
                className={`control-form ${style}  ${
                    isError && !editable
                        ? `!border-red focus:!border-red`
                        : editable
                        ? "!border-mediumGray !bg-mediumGray"
                        : "!border-mediumGray focus:!border-green"
                }
                `}
                ref={ref}
                id={id}
                value={value}
                required={required}
                placeholder={placeholder}
                name={name}
                pattern={pattern}
                disabled={editable}
                onchange={onChange}
            />
            {leftIcon}
            {isError && error && (
                <p className='text-red pt-1 text-left text-sm '>
                    {error?.trim()}
                </p>
            )}
        </>
    );
};

export default CustomInput;
