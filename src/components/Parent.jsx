import { useState } from "react";

import Child from "./Child";

import useCacheImg from "../hooks/useCacheImg";
import character from "../static/images/Base_Cobby_Final.gif";

const CLOTH_URL =
  "https://cobby-play.com/api/store/resources/assets/017e9195-ab26-4ef3-bd21-d95c974f0555_1683855145605.gif";
const HAT_URL =
  "https://cobby-play.com/api/store/resources/assets/799715f9-90ed-4a2a-b553-cb9fc8b2b355_1684135108236.gif";
const EFFECT_URL =
  "https://cobby-play.com/api/store/resources/assets/30d25c11-dda6-4faa-8aa4-c166f457da5b_1683856206593.gif";

const Parent = () => {
  const [srcList, setSrcList] = useState([
    character,
    CLOTH_URL,
    HAT_URL,
    EFFECT_URL,
  ]);
  const isLoading = useCacheImg(srcList);

  const toggleClickHandler = () => {
    const list =
      srcList.length === 4
        ? [character]
        : [character, CLOTH_URL, HAT_URL, EFFECT_URL];
    setSrcList(list);
  };

  return (
    <>
      <Child isLoading={isLoading} srcList={srcList} />
      <button onClick={toggleClickHandler}>Toggle</button>
    </>
  );
};

export default Parent;
