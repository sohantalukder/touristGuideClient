import PropTypes from "prop-types";
const Skeleton = ({ style }) => {
    return (
        <div
            style={style}
            role='status'
            className='max-w-sm animate-pulse bg-mediumGray w-full h-full'
        >
            <div className='bg-gray-200 rounded-full dark:bg-gray-700 w-full h-full mb-4'></div>
        </div>
    );
};

export default Skeleton;
Skeleton.propTypes = {
    style: PropTypes.object,
};
