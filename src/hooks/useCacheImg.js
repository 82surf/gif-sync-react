import { useState, useLayoutEffect } from "react";

import cacheImages from "../utils/cacheImages.js";

const useCacheImg = (srcList) => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    cacheImages(srcList)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error!");
        setIsLoading(true);
      });
  }, [srcList]);

  return isLoading;
};

export default useCacheImg;
