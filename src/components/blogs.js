import "../App.css";
import Blog from "./blog";

function Blogs(props) {
  return (
    <>
      <div className="Blogs">
        <div className="mainbodyU"><h2>ALL Blogs</h2><div className="box-1">
            <div className="btn btn-one"><span>Add Blog</span></div></div>
        </div>
        <ul className="Blog">
          {props.blogList.map((item) => (
            <Blog itemObject={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blogs;
