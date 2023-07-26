import StarRating from "../../../../../components/star-rating/StarRating";
import { Link } from "react-router-dom";
import Image from "../../../../../components/image/Image";
import PropTypes from "prop-types";
const RenderItem = ({ guider = {} }) => {
    const { id, price, description, profileImage, name, rating } = guider || {};
    return (
        <>
            <div className='absolute top-4 right-4'>
                <p className='font-semibold'>${price}/ hr</p>
            </div>
            <div className='px-16 pt-16 flex flex-col justify-center items-center '>
                <div className='rounded-full w-[150px] h-[150px] overflow-hidden'>
                    <Image src={profileImage} alt='' />
                </div>

                <p className='pt-7 pb-2 text-center'>
                    {description?.length > 30
                        ? description?.slice(0, 50) + "..."
                        : guider?.description}
                </p>
                <StarRating stars={rating} />
                <h3 className='text-green font-semibold text-lg pb-2 pt-2'>
                    {name}
                </h3>
            </div>
            <div className='flex justify-center  h-10'>
                <Link
                    to={`/hire/${id}`}
                    className='hover:bg-green text-gray absolute bottom-0 hover:text-white transition-all w-full text-center py-3'
                >
                    Hire Me
                </Link>
            </div>
        </>
    );
};

export default RenderItem;

RenderItem.propTypes = {
    guider: PropTypes.object,
};
