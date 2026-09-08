import Botao from "../../components/Botao/Botao";
import styles from "./TelaDetalhe.module.css";

export default function TelaDetalhe({ planta, abrirEdicao, abrirExclusao, voltarPara }) {
  return (
    <div className={styles.tela}>
      <Botao variante="fantasma" onClick={voltarPara}>&larr; Voltar</Botao>
      <h2>{planta.nome}</h2>

      <div className={styles.linha}><span className={styles.rotulo}>Espécie</span><span>{planta.especie}</span></div>
      <div className={styles.linha}><span className={styles.rotulo}>Status</span><span>{planta.status === "tenho" ? "Tenho" : "Desejo comprar"}</span></div>
      <div className={styles.linha}><span className={styles.rotulo}>Estágio</span><span>{planta.estagio}</span></div>
      <div className={styles.linha}><span className={styles.rotulo}>Local</span><span>{planta.local}</span></div>
      <div className={styles.linha}><span className={styles.rotulo}>Regar a cada</span><span>{planta.regaDias} dias</span></div>
      <div className={styles.linha}><span className={styles.rotulo}>Cadastrada em</span><span>{planta.criadoEm}</span></div>
      {planta.notas && (
        <div className={styles.linha}><span className={styles.rotulo}>Notas</span><span>{planta.notas}</span></div>
      )}

      <div className={styles.acoes}>
        <Botao variante="fantasma" onClick={() => abrirEdicao(planta)}>Editar</Botao>
        <Botao variante="fantasma" onClick={() => abrirExclusao(planta)}>Excluir</Botao>
      </div>
    </div>
  );
}