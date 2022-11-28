import { memo } from "react";

export const DetailsThumb = ({
  images,
  myRef,
  style,
  activeId,
  setActiveId,
}) => {
  return (
    <div className={`${style.thumb}`} ref={myRef}>
      {images?.map((src, index) => (
        <img
          src={`${src?.image}`}
          alt=""
          loading="lazy"
          key={index}
          className={`${activeId === src?.id ? style.active : ""}`}
          onClick={() => setActiveId(src?.id)}
        />
      ))}
    </div>
  );
};

export default memo(DetailsThumb);
