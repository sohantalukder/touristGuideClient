import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";
const StarRating = ({ stars, styles }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = (index = 0.5);
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className='fill-green' />
                ) : stars >= number ? (
                    <FaStarHalfAlt className='fill-green' />
                ) : (
                    <AiOutlineStar className='fill-green' />
                )}
            </span>
        );
    });
    return (
        <div style={styles} className='flex space-x-0.5'>
            {ratingStar}
        </div>
    );
};

export default StarRating;

StarRating.propTypes = {
    stars: PropTypes.number,
    styles: PropTypes.object,
};
