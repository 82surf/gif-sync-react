const newImgReq = (src) => {
  return src + "?" + Date.now();
};

export default newImgReq;
