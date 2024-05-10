export function Post({author, content}) {
  return (
    <>
      <p>
        <b>
        {author}
        </b>
      </p>
      <p>{content}</p>
    </>
  )
}
