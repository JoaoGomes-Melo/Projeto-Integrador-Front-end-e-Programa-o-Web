import styles from "./Botao.module.css";

export default function Botao({ variante = "primario", children, className = "", ...props }) {
  return (
    <button className={`${styles.btn} ${styles[variante]} ${className}`} {...props}>
      {children}
    </button>
  );
}