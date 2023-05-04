import React, {useRef, useEffect} from 'react';

const WebImageFilter = ({ filter, image, onImageLoad }) => {
  const filterStyle = () => {
    switch (filter) {
      case 'grayscale':
        return { filter: 'grayscale(100%)' };
      case 'blur':
        return { filter: 'blur(10px)' };
      case 'brightness':
        return { filter: 'brightness(150%)' };
      case 'contrast':
        return { filter: 'contrast(150%)' };
      case 'hue':
        return { filter: 'hue-rotate(90deg)' };
      case 'saturation':
        return { filter: 'saturate(200%)' };
      default:
        return {};
    }
  };

  const handleImageLoad = (event) => {
    if (onImageLoad) {
      const originalImage = event.target;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      canvas.width = originalImage.width;
      canvas.height = originalImage.height;
      ctx.filter = filterStyle().filter;
      ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);
  
      const dataURL = canvas.toDataURL("image/png");
      onImageLoad(dataURL);
    }
  };
  
  

  const imgRef = useRef();

  return (
    <img
      src={image}
      style={{ ...filterStyle(), width: 300, height: 300 }}
      alt="Filtered"
      onLoad={handleImageLoad}
    />
  );
};

export default WebImageFilter;