import { useState } from "react";
import { criarPlanta, atualizarPlanta } from "../../services/plantaService";
import Campo from "../../components/Campo/Campo";
import Botao from "../../components/Botao/Botao";
import styles from "./TelaFormulario.module.css";

export default function TelaFormulario({ planta, aoSalvar, voltarPara }) {
  const editando = Boolean(planta);
  const [nome, setNome] = useState(planta?.nome || "");
  const [especie, setEspecie] = useState(planta?.especie || "");
  const [status, setStatus] = useState(planta?.status || "tenho");
  const [estagio, setEstagio] = useState(planta?.estagio || "muda");
  const [local, setLocal] = useState(planta?.local || "sol");
  const [regaDias, setRegaDias] = useState(planta?.regaDias || 4);
  const [notas, setNotas] = useState(planta?.notas || "");
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function handleSalvar(e) {
    e.preventDefault();
    const dados = {
      nome: nome.trim(),
      especie: especie.trim(),
      status,
      estagio,
      local,
      regaDias: Number(regaDias),
      notas: notas.trim(),
    };

    setSalvando(true);
    setErro("");
    try {
      const resultado = editando
        ? await atualizarPlanta(planta.id, dados)
        : await criarPlanta(dados);
      aoSalvar(resultado);
    } catch (e) {
      setErro(e.message);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSalvar}>
      <Campo rotulo="Nome">
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </Campo>

      <Campo rotulo="Espécie">
        <input value={especie} onChange={(e) => setEspecie(e.target.value)} />
      </Campo>

      <Campo rotulo="Status">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="tenho">Tenho</option>
          <option value="desejo">Desejo comprar</option>
        </select>
      </Campo>

      <Campo rotulo="Estágio">
        <select value={estagio} onChange={(e) => setEstagio(e.target.value)}>
          <option value="muda">Muda</option>
          <option value="crescendo">Crescendo</option>
          <option value="estabelecida">Estabelecida</option>
          <option value="florida">Florida</option>
        </select>
      </Campo>

      <Campo rotulo="Local">
        <select value={local} onChange={(e) => setLocal(e.target.value)}>
          <option value="sol">Sol pleno</option>
          <option value="meia-sombra">Meia-sombra</option>
          <option value="sombra">Sombra</option>
        </select>
      </Campo>

      <Campo rotulo="Regar a cada quantos dias">
        <input type="number" min="1" max="60" value={regaDias} onChange={(e) => setRegaDias(e.target.value)} />
      </Campo>

      <Campo rotulo="Notas">
        <textarea value={notas} onChange={(e) => setNotas(e.target.value)} />
      </Campo>

      {erro && <p className={styles.erro}>{erro}</p>}

      <div className={styles.acoes}>
        <Botao type="button" variante="fantasma" onClick={voltarPara}>Cancelar</Botao>
        <Botao type="submit" disabled={salvando}>{salvando ? "Salvando..." : "Salvar"}</Botao>
      </div>
    </form>
  );
}