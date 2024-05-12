import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div
      className={styles.comment}
    >
      <img src="https://github.com/rafaeledkepler.png" alt="Imagem de perfil"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Eduardo Kepler</strong>
              <time
                title="Doze de Maio às 18:04"
                dateTime="2024-05-12 18:04"
              >Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom, Devon. Parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
          Aplaudir
        </footer>
      </div>
    </div>
  )
}