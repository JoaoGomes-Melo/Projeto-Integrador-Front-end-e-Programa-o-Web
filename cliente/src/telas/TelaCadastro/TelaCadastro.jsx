import { useState } from "react";
import Campo from "../../components/Campo/Campo";
import Botao from "../../components/Botao/Botao";
import styles from "./TelaCadastro.module.css";

export default function TelaCadastro({ aoCadastrar, abrirLogin }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCadastrar(e) {
    e.preventDefault();
    aoCadastrar(nome || "visitante");
  }

  return (
    <div className={styles.tela}>
      <form className={styles.caixa} onSubmit={handleCadastrar}>
        <h2>Criar conta</h2>
        <Campo rotulo="Nome">
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
        </Campo>
        <Campo rotulo="E-mail">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Campo>
        <Campo rotulo="Senha">
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </Campo>
        <Botao type="submit">Cadastrar</Botao>
        <button type="button" className={styles.link} onClick={abrirLogin}>
          Já tem conta? Entrar
        </button>
      </form>
    </div>
  );
}