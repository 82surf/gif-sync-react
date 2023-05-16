import { useState } from "react";

import Child from "./Child";

import useCacheImg from "../hooks/useCacheImg";
import newImgReq from "../utils/newImgSrc";

import character from "../static/images/cobby.gif";
import hat from "../static/images/hat.gif";
import cloth from "../static/images/cloth.gif";
import effect from "../static/images/effect.gif";

// S3 URL로 변경해도 문제 없이 작동합니다.
const CHARACTER_URL = character;
const HAT_URL = hat;
const CLOTH_URL = cloth;
const EFFECT_URL = effect;

const Parent = () => {
  const [cobby, setCobby] = useState({
    character: newImgReq(CHARACTER_URL),
    hat: null,
    cloth: null,
    effect: null,
  });

  const isLoading = useCacheImg(cobby);

  const toggleHat = () => {
    setCobby((state) => {
      const nextState = state.hat
        ? { ...state, hat: null }
        : {
            character: newImgReq(CHARACTER_URL),
            hat: newImgReq(HAT_URL),
            cloth: state.cloth ? newImgReq(CLOTH_URL) : null,
            effect: state.effect ? newImgReq(EFFECT_URL) : null,
          };
      return nextState;
    });
  };
  const toggleCloth = () => {
    setCobby((state) => {
      const nextState = state.cloth
        ? { ...state, cloth: null }
        : {
            character: newImgReq(CHARACTER_URL),
            hat: state.hat ? newImgReq(HAT_URL) : null,
            cloth: newImgReq(CLOTH_URL),
            effect: state.effect ? newImgReq(EFFECT_URL) : null,
          };
      return nextState;
    });
  };
  const toggleEffect = () => {
    setCobby((state) => {
      const nextState = state.effect
        ? { ...state, effect: null }
        : {
            character: newImgReq(CHARACTER_URL),
            hat: state.hat ? newImgReq(HAT_URL) : null,
            cloth: state.cloth ? newImgReq(CLOTH_URL) : null,
            effect: newImgReq(EFFECT_URL),
          };
      return nextState;
    });
  };

  return (
    <>
      <Child isLoading={isLoading} cobby={cobby} />
      <button onClick={toggleHat}>HAT</button>
      <button onClick={toggleCloth}>CLOTH</button>
      <button onClick={toggleEffect}>EFFECT</button>
    </>
  );
};

export default Parent;
