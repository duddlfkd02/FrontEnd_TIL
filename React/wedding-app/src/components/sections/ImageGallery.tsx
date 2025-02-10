import classNames from "classnames/bind";

import Section from "../shared/Section";
import styles from "./ImageGallery.module.scss";

import ImageViewer from "../ImageViewr";
import { useState } from "react";

const cx = classNames.bind(styles);

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const open = selectedIdx > -1;

  const handleSelecetedImage = (index: number) => {
    setSelectedIdx(index);
  };

  const handleClose = () => {
    setSelectedIdx(-1);
  };

  return (
    <>
      <Section title="사진첩">
        <ul className={cx("wrap-images")}>
          {images.map((src, index) => (
            <li
              key={index}
              className={cx("wrap-image")}
              onClick={() => handleSelecetedImage(index)}
            >
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  );
}

export default ImageGallery;
