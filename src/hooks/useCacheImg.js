import { useState, useLayoutEffect } from "react";

import cacheImages from "../utils/cacheImages.js";

const useCacheImg = (cobby) => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    cacheImages(Object.values(cobby))
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error!");
        setIsLoading(true);
      });
  }, [cobby]);

  return isLoading;
};

export default useCacheImg;
