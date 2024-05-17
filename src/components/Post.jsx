import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ content, author, publishedAt }) {

  const [comments, setComments] = useState([]);
  const [commentTextArea, setCommentTextArea] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewComment = () => {
    event.preventDefault();
    setComments([...comments, commentTextArea])
    console.log(comments, commentTextArea);
  }

  return (
    <article className={styles.post}>
      <header>
        <div
          className={styles.author}
        >
          <Avatar src={author.avatarUrl} />
          <div
            className={styles.authorInfo}
          >
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div
        className={styles.content}
      >
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              )
            }
          })
        }
      </div>

      <form
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe um comentário</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={commentTextArea}
          onChange={(e) => setCommentTextArea(e.target.value)}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} comment={comment} />
        ))}
      </div>
    </article>
  )
}
