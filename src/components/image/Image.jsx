import { useState } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "../../utils/skeleton/Skeleton";
const Image = ({ src, className, alt = "", width, height }) => {
    const [loading, setLoading] = useState(false);
    return !loading ? (
        <LazyLoadImage
            alt={alt}
            height={width}
            src={src}
            width={height}
            style={className}
            onLoad={() => setLoading(true)}
        />
    ) : (
        <Skeleton />
    );
};

export default Image;

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.object,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
