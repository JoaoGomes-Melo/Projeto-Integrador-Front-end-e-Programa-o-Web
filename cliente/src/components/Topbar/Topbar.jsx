import styles from "./Topbar.module.css";

export default function Topbar({ nomeUsuario, aoSair }) {
  return (
    <header className={styles.topbar}>
      <h1 className={styles.titulo}>🌱 Broto</h1>
      <div className={styles.usuario}>
        {nomeUsuario && <span>Olá, {nomeUsuario} — </span>}
        <button onClick={aoSair}>Sair</button>
      </div>
    </header>
  );
}