import character from "../static/images/Base_Cobby_Final.gif";
import styles from "./Child.module.css";

const Child = ({ clothSrc }) => {
  return (
    <>
      <img src={character} className="character" alt="character" />
      <img src={clothSrc} className={styles.cloth} alt="cloth" />
    </>
  );
};

export default Child;
