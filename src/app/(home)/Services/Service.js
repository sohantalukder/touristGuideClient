const Service = ({ service }) => {
    return (
        <div className='p-10 shadow border border-lightGray flex group justify-center text-center items-center hover:bg-green transition-all text-green hover:text-white rounded h-[165px]'>
            <div className='flex flex-col justify-center'>
                <span>
                    <service.image className='text-5xl group-hover:text-4xl m-0 group-hover:text-center ' />
                </span>
                <div className='my-1 hidden group-hover:flex gap-2'>
                    <p>{service.name}</p>
                    <p>{service.total}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
