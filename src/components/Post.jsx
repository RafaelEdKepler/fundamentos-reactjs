import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div
          className={styles.author}
        >
          <img
            className={styles.avatar}
            src="https://github.com/rafaeledkepler.png"
            alt="Foto de perfil do usuário"
          />
          <div
            className={styles.authorInfo}
          >
            <strong>Rafael Eduardo Kepler</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time
          title="Dez de Maio às 17:38"
          dateTime="2024-05-10 17:37"
        >Publicado há 1h</time>
      </header>
      <div
        className={styles.content}
      >
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
      </div>

      <form
        className={styles.commentForm}
      >
        <strong>Deixe um comentário</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
