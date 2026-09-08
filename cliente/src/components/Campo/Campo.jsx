import styles from "./Campo.module.css";

export default function Campo({ rotulo, children, erro }) {
  return (
    <label className={styles.campo}>
      <span className={styles.rotulo}>{rotulo}</span>
      {children}
      {erro && <span className={styles.erroCampo}>{erro}</span>}
    </label>
  );
}