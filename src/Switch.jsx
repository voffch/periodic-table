import styles from './Switch.module.css'

export default function Switch({textBefore = '', textAfter = '', rounded = true, checked = false, handler}) {
  const spanStyles = rounded ? `${styles.slider} ${styles.slider_round}` : styles.slider;
  return (
    <div className={styles.wrapper}>
      {textBefore && <span>{textBefore}</span>}
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={(e) => handler(e.target.checked)} />
        <span className={spanStyles}></span>
      </label>
      {textAfter && <span>{textAfter}</span>}
    </div>
  );
}