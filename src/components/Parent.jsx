import { useState } from "react";

import Child from "./Child";

import useImagePreloader from "../hooks/useImagePreloader.js";
import character from "../static/images/Base_Cobby_Final.gif";

const CLOTH_URL =
  "https://cobby-play.com/api/store/resources/assets/017e9195-ab26-4ef3-bd21-d95c974f0555_1683855145605.gif";

const Parent = () => {
  const [srcList, setSrcList] = useState([character, CLOTH_URL]);
  const { imagesPreloaded } = useImagePreloader(srcList);

  const toggleClickHandler = () => {
    const list = srcList.length == 2 ? [character] : [character, CLOTH_URL];
    setSrcList(list);
  };

  return (
    <>
      <Child imagesPreloaded={imagesPreloaded} srcList={srcList} />
      <button onClick={toggleClickHandler}>Toggle</button>
    </>
  );
};

export default Parent;
