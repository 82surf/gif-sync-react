import styles from "./Child.module.css";

const Child = ({ imagesPreloaded, srcList }) => {
  if (imagesPreloaded) {
    return (
      <>
        {srcList.map((src, idx) => (
          <img key={idx} src={src} className={styles.cobby} />
        ))}
      </>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default Child;
