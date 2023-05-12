import { Listbox } from "@headlessui/react";
import { default as React } from "react";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const DropDown = ({ category }) => {
    return (
        <div>
            <Listbox.Option
                key={category.id}
                className={({ active }) =>
                    classNames(
                        active
                            ? "text-white bg-green cursor-pointer"
                            : "text-gray-900",
                        "cursor-default select-none relative py-2 pr-9"
                    )
                }
                value={category}
            >
                {({ selected, active }) => (
                    <>
                        <div className='flex items-center'>
                            <span
                                className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                )}
                            >
                                {category.name}
                            </span>
                        </div>

                        {selected ? (
                            <span
                                className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                            ></span>
                        ) : null}
                    </>
                )}
            </Listbox.Option>
        </div>
    );
};

export default DropDown;
