import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ comment }) {
  console.log(comment);

  return (
    <div
      className={styles.comment}
    >
      <Avatar hasBorder={false} src="https://github.com/rafaeledkepler.png" />
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
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}