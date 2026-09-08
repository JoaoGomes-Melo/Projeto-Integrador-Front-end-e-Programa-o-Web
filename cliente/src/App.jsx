import { useState } from "react";
import TelaLogin from "./telas/TelaLogin/TelaLogin";
import TelaCadastro from "./telas/TelaCadastro/TelaCadastro";
import TelaLista from "./telas/TelaLista/TelaLista";
import TelaFormulario from "./telas/TelaFormulario/TelaFormulario";
import TelaDetalhe from "./telas/TelaDetalhe/TelaDetalhe";
import Topbar from "./components/Topbar/Topbar";
import styles from "./App.module.css";

export default function App() {
  const [tela, setTela] = useState("login");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [plantaEditando, setPlantaEditando] = useState(null);
  const [plantaDetalhe, setPlantaDetalhe] = useState(null);

  function handleEntrar(nome) {
    setNomeUsuario(nome);
    setTela("lista");
  }
  function handleCadastrar(nome) {
    setNomeUsuario(nome);
    setTela("lista");
  }
  function handleSair() {
    setNomeUsuario("");
    setTela("login");
  }

  function abrirNovo() {
    setPlantaEditando(null);
    setTela("form");
  }
  function abrirEdicao(p) {
    setPlantaEditando(p);
    setTela("form");
  }
  function abrirDetalhe(p) {
    setPlantaDetalhe(p);
    setTela("detalhe");
  }
  function aoSalvar() {
    setTela("lista");
  }

  const telasComTopbar = ["lista", "form", "detalhe"];

  return (
    <div className={styles.raiz}>
      {telasComTopbar.includes(tela) && <Topbar nomeUsuario={nomeUsuario} aoSair={handleSair} />}

      {tela === "login" && (
        <TelaLogin aoEntrar={handleEntrar} abrirCadastro={() => setTela("cadastro")} />
      )}

      {tela === "cadastro" && (
        <TelaCadastro aoCadastrar={handleCadastrar} abrirLogin={() => setTela("login")} />
      )}

      {tela === "lista" && (
        <TelaLista abrirNovo={abrirNovo} abrirEdicao={abrirEdicao} abrirDetalhe={abrirDetalhe} />
      )}

      {tela === "form" && (
        <TelaFormulario planta={plantaEditando} aoSalvar={aoSalvar} voltarPara={() => setTela("lista")} />
      )}

      {tela === "detalhe" && (
        <TelaDetalhe
          planta={plantaDetalhe}
          abrirEdicao={abrirEdicao}
          abrirExclusao={() => setTela("lista")}
          voltarPara={() => setTela("lista")}
        />
      )}
    </div>
  );
}