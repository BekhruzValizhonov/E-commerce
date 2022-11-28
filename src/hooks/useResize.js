import { useEffect, useState } from "react";

const useResize = () => {
  const [isShow, setIsShow] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    if (width > 991) return setIsShow(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleClose = () => setIsShow(!isShow);

  return { handleClose, isShow };
};

export default useResize;
