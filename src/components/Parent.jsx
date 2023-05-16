import { useState } from "react";

import Child from "./Child";

import useCacheImg from "../hooks/useCacheImg";
import character from "../static/images/Base_Cobby_Final.gif";

const HAT_URL =
  "https://cobby-play.com/api/store/resources/assets/799715f9-90ed-4a2a-b553-cb9fc8b2b355_1684135108236.gif";
const CLOTH_URL =
  "https://cobby-play.com/api/store/resources/assets/017e9195-ab26-4ef3-bd21-d95c974f0555_1683855145605.gif";
const EFFECT_URL =
  "https://cobby-play.com/api/store/resources/assets/30d25c11-dda6-4faa-8aa4-c166f457da5b_1683856206593.gif";

const Parent = () => {
  const [cobby, setCobby] = useState({
    character: character + "?" + Date.now(),
    hat: null,
    cloth: null,
    effect: null,
  });

  const isLoading = useCacheImg(cobby);

  const newImgReq = (src) => {
    return src + "?" + Date.now();
  };

  const toggleHat = () => {
    setCobby((state) => {
      const nextState = state.hat
        ? { ...state, hat: null }
        : {
            character: newImgReq(character),
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
            character: newImgReq(character),
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
            character: newImgReq(character),
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
