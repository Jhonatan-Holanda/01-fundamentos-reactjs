export function Post(props){
  const {author, content} = props;
  return (
    <>
     <strong>{author}</strong>
     <p>{content}</p>
    </>
  )
}