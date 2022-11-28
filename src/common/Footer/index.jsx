import { memo } from "react";
import homeShopApi from "@services/homeShopApi";
import style from "./footer.module.css";

const Footer = () => {
  const { data } = homeShopApi.useFetchContactQuery();
  const { data: socialMedia } = homeShopApi.useFetchSocialMediaQuery();

  return (
    <div className={style.footer}>
      <div
        className={`d-flex flex-column flex-wrap justify-content-center align-items-center
          ${style.footer_address}`}
      >
        <span>
          <b> {data?.address}</b>
        </span>
        <span className="">
          <b>{data?.phone_number}</b>{" "}
        </span>
        <span>
          <b> {data?.email}</b>
        </span>
      </div>
      <div className={style.copy_right}>
        <p className={style.copyright}>Copyright 2022 &copy;</p>
      </div>
      <div
        className={`d-flex flex-column flex-wrap justify-content-center align-items-center ${style.social_media}`}
      >
        <span>
          {socialMedia?.map((social) => {
            return (
              <a href={social?.url} key={social?.id} className="mx-2">
                <img src={social?.icon} alt={social?.icon} width={20} />
              </a>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default memo(Footer);
