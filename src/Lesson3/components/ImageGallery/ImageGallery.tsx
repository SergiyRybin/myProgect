import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "../ImageGallery/ImageGallery.module.css";
import React from "react";

interface IImages {
  id: string;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
}

interface IGallary {
  images: IImages[];
  modalOpen: (largeImageURL: any)=> void;
}

const ImageGallery: React.FC<IGallary> = ({ images, modalOpen }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images &&
          images.map(({ id, largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              largeImageURL={largeImageURL}
              onModal={modalOpen}
              tags={tags}
            />
          ))}
      </ul>
    </>
  );
};

export default ImageGallery;
