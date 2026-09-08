import Botao from "../Botao/Botao";
import styles from "./ModalExcluir.module.css";

export default function ModalExcluir({ nomePlanta, aoConfirmar, aoCancelar }) {
  return (
    <div className={styles.fundo} onClick={aoCancelar}>
      <div className={styles.caixa} onClick={(e) => e.stopPropagation()}>
        <p>Excluir "{nomePlanta}" do seu diário de plantas?</p>
        <div className={styles.acoes}>
          <Botao variante="fantasma" onClick={aoCancelar}>Cancelar</Botao>
          <Botao onClick={aoConfirmar}>Excluir</Botao>
        </div>
      </div>
    </div>
  );
}