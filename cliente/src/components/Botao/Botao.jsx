import styles from "./Botao.module.css";

export default function Botao(variante = "primario", childen, className = "", ...props) {
    return (
        <button className={`${styles.butao} ${styles[variante]} ${className}`}>
            {...props}>
            {childen}
        </button>
    ;)
    
}