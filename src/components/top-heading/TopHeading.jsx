import PropTypes from "prop-types";
const TopHeading = ({ header = "", description = "", style }) => {
    return (
        <div style={style}>
            <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header'>
                {header}
            </h1>
            <p className='mb-12'>{description}</p>
        </div>
    );
};

export default TopHeading;

TopHeading.propTypes = {
    header: PropTypes.string,
    style: PropTypes.object,
    description: PropTypes.string,
};
