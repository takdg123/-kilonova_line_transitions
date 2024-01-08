import React, { useState, useEffect } from 'react';

interface ImageComponentProps {
  location: string;
  type: string;
  species: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ location, type, species }) => {
  const [imageError, setImageError] = useState(false);
  const [filename, setFilename] = useState("");
  const [prevfilename, setPrevfilename] = useState("");

  useEffect(() => {
    let updatedFilename = "";
    if (type === "resonance") {
      updatedFilename = `/figures/res/${location}_all.png`;
    } else {
      updatedFilename = `/figures/line/${location}_${type}_lines.jpeg`;
    }
    setFilename(updatedFilename);

    setImageError(false); // Reset error state when filename changes
  }, [location, type]);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setPrevfilename(filename);
    setImageError(false); // Reset error state when the image is loaded successfully
  };

  return (
    <div>
      {imageError ? (
        <img
          src={prevfilename}
          alt={species}
        />
      ) : (
        <img
          src={filename}
          alt={species}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};

export default ImageComponent;