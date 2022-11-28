import React from "react";
import { memo } from "react";
import ReactImageMagnify from "react-image-magnify";
import { Box } from "@mui/system";
import "./react-slick.css";
import { useTranslation } from "react-i18next";

const ZoomImage = ({ img }) => {
  const { t } = useTranslation();
  const rimProps = {
    isHintEnabled: false,
    shouldHideHintAfterFirstActivation: false,
    enlargedImagePosition: "over",
  };

  return (
    <Box className="box_slick">
      <div className="fluid react-slick ">
        <div className="fluid__image-container">
          <div className="wrapper_zoom">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Zoom",
                  isFluidWidth: true,
                  src: img.small.toString(),
                  srcSet: img,
                  // sizes: "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px"
                },
                largeImage: {
                  src: img,
                  width: 1426,
                  height: 2000,
                },
                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
              }}
              {...rimProps}
            />
            <div id={"ps_product__badge"}>
              <span>{t("zoom")}</span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default memo(ZoomImage);
