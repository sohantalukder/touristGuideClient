import React from "react";

const FavFood = (props) => {
    return (
        <div className='flex flex-row space-x-4 my-2'>
            {props.fvtFoods.map((item, index) => {
                return (
                    <p key={index} className='px-3 py-1 bg-lightGray text-gray'>
                        {item}
                    </p>
                );
            })}
        </div>
    );
};

export default FavFood;
