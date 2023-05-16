import styles from "./Child.module.css";

const Child = ({ isLoading, cobby }) => {
  if (!isLoading) {
    return (
      <>
        <img src={cobby.character} alt="cobby" />
        {cobby.hat && (
          <img src={cobby.hat} alt="hat" className={styles.cobby} />
        )}
        {cobby.cloth && (
          <img src={cobby.cloth} alt="cloth" className={styles.cobby} />
        )}
        {cobby.effect && (
          <img src={cobby.effect} alt="effect" className={styles.cobby} />
        )}
      </>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default Child;
