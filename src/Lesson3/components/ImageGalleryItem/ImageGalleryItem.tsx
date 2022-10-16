import s from "../ImageGalleryItem/ImageGalleryItem.module.css";
import React from "react";

interface IGallery {
  image: {
    id: string;
  } | any;
  tags: string;
  onModal(largeImageURL: string): void;
  largeImageURL: string;
}

const ImageGalleryItem: React.FC<IGallery> = ({
  image,
  tags,
  onModal,
  largeImageURL,
}) => {
  return (
    <>
      <li className={s.ImageGalleryItem} data-id={image.id}>
        <img
          className={s.ImageGalleryItemimage}
          src={image}
          alt={tags}
          onClick={() => onModal(largeImageURL)}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
