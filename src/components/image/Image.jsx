import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Image = ({ src, className, alt = "", width, height }) => {
    return (
        <LazyLoadImage
            alt={alt}
            height={width}
            src={src}
            width={height}
            style={className}
        />
    );
};

export default Image;
