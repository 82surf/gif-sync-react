import { useState } from "react";

import Child from "./Child";

import useCacheImg from "../hooks/useCacheImg";
import newImgReq from "../utils/newImgSrc";

import characterGif from "../static/images/cobby.gif";
import hatGif from "../static/images/hat.gif";
import clothGif from "../static/images/cloth.gif";
import effectGif from "../static/images/effect.gif";

// START -- 이미지 경로 변경은 여기를 수정해주세요.
const CHARACTER_URL = characterGif;
const HAT_URL = hatGif;
const CLOTH_URL = clothGif;
const EFFECT_URL = effectGif;
// END --

const IMAGE_SOURCES = {
  character: CHARACTER_URL,
  hat: HAT_URL,
  cloth: CLOTH_URL,
  effect: EFFECT_URL,
};

const Parent = () => {
  const [cobby, setCobby] = useState({
    character: newImgReq(IMAGE_SOURCES.character),
    hat: null,
    cloth: null,
    effect: null,
  });

  const isLoading = useCacheImg(cobby);

  const toggleHandler = (e) => {
    // 버튼이 클릭되면
    // 해당 값이 있거나 없거나
    const key = e.target.id;

    setCobby((state) => {
      const nextState = {
        character: newImgReq(IMAGE_SOURCES.character),
        hat: state.hat ? newImgReq(IMAGE_SOURCES.hat) : null,
        cloth: state.cloth ? newImgReq(IMAGE_SOURCES.cloth) : null,
        effect: state.effect ? newImgReq(IMAGE_SOURCES.effect) : null,
      };
      nextState[key] = state[key] ? null : newImgReq(IMAGE_SOURCES[key]);
      return nextState;
    });
  };

  return (
    <>
      <Child isLoading={isLoading} cobby={cobby} />
      <button onClick={toggleHandler} id="hat">
        HAT
      </button>
      <button onClick={toggleHandler} id="cloth">
        CLOTH
      </button>
      <button onClick={toggleHandler} id="effect">
        EFFECT
      </button>
    </>
  );
};

export default Parent;
