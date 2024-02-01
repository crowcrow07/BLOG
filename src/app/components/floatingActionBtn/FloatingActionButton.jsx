import styles from "@/styles/FloatingActionButton.module.scss";

export default function FloatingActionButton() {
  return (
    <div>
      <input id="fabCheckbox" type="checkbox" className={styles.fabCheckbox} />
      <label className={styles.fab} htmlFor="fabCheckbox">
        <span className={`${styles.fabLine} ${styles.fabLine1}`}></span>
        <span className={`${styles.fabLine} ${styles.fabLine3}`}></span>
      </label>
      <div className={styles.fabWheel}>
        <a className={`${styles.fabAction} ${styles.fabAction1}`}>
          <i className="">1</i>
        </a>
        <a className={`${styles.fabAction} ${styles.fabAction2}`}>
          <i className="">2</i>
        </a>
        <a className={`${styles.fabAction} ${styles.fabAction3}`}>
          <i className="">3</i>
        </a>
        <a className={`${styles.fabAction} ${styles.fabAction4}`}>
          <i className="">4</i>
        </a>
      </div>
    </div>
  );
}
