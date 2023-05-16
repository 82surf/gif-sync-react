const cacheImages = async (srcArray) => {
  const promiseArray = srcArray.map((src) => {
    if (src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.onerror = () => {
          reject();
        };
        img.src = src;
      });
    }
  });

  await Promise.all(promiseArray);
};

export default cacheImages;
