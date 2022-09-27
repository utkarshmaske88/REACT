import "../App.css";

function Blog(props) {
  return (
    <div className="Blogin">
      <div>{props.itemObject.title}</div>
      <div>{props.itemObject.id}</div>
      <div>{props.itemObject.content}</div>
      <div>{props.itemObject.subtitle}</div>
      <div>{props.itemObject.author}</div>
    </div>
  );
}
export default Blog;
