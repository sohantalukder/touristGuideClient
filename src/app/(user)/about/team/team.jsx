import React from "react";

const Team = ({ team }) => {
    const { name, designation, image } = team;
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={image} alt='' />
            <div className='info flex flex-col items-center -mt-5'>
                <h2 className='text-base font-bold'>{name}</h2>
                <p className='text-sm'>{designation}</p>
            </div>
        </div>
    );
};

export default Team;
