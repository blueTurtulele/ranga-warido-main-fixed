import { FC, MutableRefObject } from "react";
import styles from "./Gallery.module.scss";
import Masonry from "react-masonry-css";
import { Gallery as PhotoswipeGallery, Item } from "react-photoswipe-gallery";
import Image, { StaticImageData } from "next/image";
import "photoswipe/dist/photoswipe.css";

export type GalleryImage = {
  id: number;
  thumbnailData: StaticImageData;
  thumbnailUrl: string;
  fullUrl: string;
  fullWidth: number;
  fullHeight: number;
  altText: string;
};

export type BreakpointCols = {
  [key: number]: number;
  default: number;
};

type Props = {
  images: GalleryImage[];
  breakpointCols?: BreakpointCols;
};

export const Gallery: FC<Props> = ({ images, breakpointCols }) => {
  return (
    <PhotoswipeGallery
      options={{
        padding: { top: 10, left: 10, right: 10, bottom: 10 },
        errorMsg: "Nie udało nam się załadować tego obrazu",
        closeTitle: "Zamknij okno dialogowe",
        zoomTitle: "Powiększ zdjęcie",
        arrowPrevTitle: "Przejdź do poprzedniego zdjęcia",
        arrowNextTitle: "Przejdź do następnego zdjęcia",
      }}
    >
      <Masonry
        breakpointCols={
          breakpointCols ?? {
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }
        }
        className={styles.grid}
        columnClassName={styles.grid__column}
      >
        {images.map(({ thumbnailData, thumbnailUrl, fullUrl, fullWidth, fullHeight, altText, id }) => {
          return (
            <Item key={id} thumbnail={thumbnailUrl} original={fullUrl} width={fullWidth} height={fullHeight}>
              {({ ref, open }) => {
                return (
                  <button title={altText} ref={ref as MutableRefObject<HTMLButtonElement>} onClick={open}>
                    <Image src={thumbnailData} alt={altText} />
                  </button>
                );
              }}
            </Item>
          );
        })}
      </Masonry>
    </PhotoswipeGallery>
  );
};
