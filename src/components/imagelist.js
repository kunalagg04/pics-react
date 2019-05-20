import React from "react";
import ImageCard from "./imagecard";

const ImageList = props => {
  const img = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="imagelist"> {img} </div>;
};

export default ImageList;
