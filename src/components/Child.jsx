import styles from "./Child.module.css";

const Child = ({ isLoading, srcList }) => {
  if (!isLoading) {
    return (
      <>
        {srcList.map((src, idx) => (
          <img key={idx} src={src} className={styles.cobby} alt="cobby" />
        ))}
      </>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default Child;
