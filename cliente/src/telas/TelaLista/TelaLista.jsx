import { useEffect, useState } from "react";
import { listarPlantas, excluirPlanta } from "../../services/plantaService";
import Botao from "../../components/Botao/Botao";
import ModalExcluir from "../../components/ModalExcluir/ModalExcluir";
import styles from "./TelaLista.module.css";

export default function TelaLista({ abrirNovo, abrirEdicao, abrirDetalhe }) {
  const [plantas, setPlantas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [plantaParaExcluir, setPlantaParaExcluir] = useState(null);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    setCarregando(true);
    setErro(null);
    try {
      setPlantas(await listarPlantas());
    } catch (e) {
      setErro(e.message);
    } finally {
      setCarregando(false);
    }
  }

  async function confirmarExclusao() {
    try {
      await excluirPlanta(plantaParaExcluir.id);
      setPlantas((atual) => atual.filter((p) => p.id !== plantaParaExcluir.id));
    } catch (e) {
      setErro(e.message);
    } finally {
      setPlantaParaExcluir(null);
    }
  }

  if (carregando) return <p className={styles.carregando}>Carregando plantas...</p>;
  if (erro) return <p className={styles.erro}>Erro: {erro}</p>;

  return (
    <div className={styles.tela}>
      <Botao onClick={abrirNovo}>Nova planta</Botao>

      {plantas.length === 0 ? (
        <p className={styles.vazio}>Nenhuma planta cadastrada ainda.</p>
      ) : (
        <div className={styles.grade}>
          {plantas.map((p) => (
            <article key={p.id} className={styles.cartao} onClick={() => abrirDetalhe(p)}>
              <h3>{p.nome}</h3>
              <p>{p.especie}</p>
              <p>Status: {p.status === "tenho" ? "Tenho" : "Desejo comprar"}</p>
              <p>Regar a cada {p.regaDias} dias</p>
              <Botao variante="fantasma" onClick={(e) => { e.stopPropagation(); abrirEdicao(p); }}>Editar</Botao>
              <Botao variante="fantasma" onClick={(e) => { e.stopPropagation(); setPlantaParaExcluir(p); }}>Excluir</Botao>
            </article>
          ))}
        </div>
      )}

      {plantaParaExcluir && (
        <ModalExcluir
          nomePlanta={plantaParaExcluir.nome}
          aoConfirmar={confirmarExclusao}
          aoCancelar={() => setPlantaParaExcluir(null)}
        />
      )}
    </div>
  );
}