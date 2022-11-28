import React from "react";
import Floor from "./Floor";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import BrandFilter from "./BrandFilter";

const FullScreenFilters = ({
  style,
  setPrice,
  setBrand,
  setSize,
  setFloor,
  isClear,
}) => {
  return (
    <>
      <PriceFilter style={style} setPrice={setPrice} />
      <hr />
      <BrandFilter setBrand={setBrand} isClear={isClear} />
      <hr />
      <SizeFilter setSize={setSize} isClear={isClear} />
      <hr />
      <Floor setFloor={setFloor} isClear={isClear} />
      <hr />
    </>
  );
};

export default FullScreenFilters;
