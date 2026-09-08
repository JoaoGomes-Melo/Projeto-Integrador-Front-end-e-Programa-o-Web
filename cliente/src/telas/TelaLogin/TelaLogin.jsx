import { useState } from "react";
import Campo from "../../components/Campo/Campo";
import Botao from "../../components/Botao/Botao";
import styles from "./TelaLogin.module.css";

export default function TelaLogin({ aoEntrar, abrirCadastro }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleEntrar(e) {
    e.preventDefault();
    aoEntrar(email.split("@")[0] || "visitante");
  }

  return (
    <div className={styles.tela}>
      <form className={styles.caixa} onSubmit={handleEntrar}>
        <h2>🌱 Broto</h2>
        <Campo rotulo="E-mail">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Campo>
        <Campo rotulo="Senha">
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </Campo>
        <Botao type="submit">Entrar</Botao>
        <button type="button" className={styles.link} onClick={abrirCadastro}>
          Não tem conta? Cadastre-se
        </button>
      </form>
    </div>
  );
}