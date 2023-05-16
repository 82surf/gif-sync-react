const imgPreload = (imgSrc) => {
  const img = new Image();
  img.src = imgSrc;
  return img;
};

export default imgPreload;
