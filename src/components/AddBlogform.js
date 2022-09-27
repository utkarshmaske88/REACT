import { useState } from "react";

export default function Addblog(props) {
  const [newtitle, setTitle] = useState("");
  const [newsubtitle, setsubtitle] = useState("");
  const [newcontent, setcontent] = useState("");
  const [newauthor, setauthor] = useState("");
  const [newid, setid] = useState("");

  function onchangeforatitle(event) {
    setTitle(event.target.value);
  }
  function onchangeforsubtitle(event) {
    setsubtitle(event.target.value);
  }
  function onchangeforcontent(event) {
    setcontent(event.target.value);
  }
  function onchangeforauthor(event) {
    setauthor(event.target.value);
  }
  function onchangeforid(event) {
    setid(event.target.value);
  }

  const submit = (event) => {
    event.preventDefault();
    const newblog = {
      title: newtitle,
      subtitle: newsubtitle,
      content: newcontent,
      author: newauthor,
      id: newid,
    };
    props.addblogfunction(newblog);
    setTitle("");
    setsubtitle("");
    setcontent("");
    setauthor("");
    setid("");
  };

  return (
    <div className="addblogu">
      <h1 className="titleaddblog">Add Blog</h1>

      <form className="addblog" onSubmit={submit}>
        <label className="title">
          Title:
          <input
            value={newtitle}
            onChange={onchangeforatitle}
            type="text"
            name="Title"
          />
        </label>

        <label className="content">
          Content:
          <textarea
            value={newcontent}
            onChange={onchangeforcontent}
            type="text"
            name="Title"
          />
        </label>

        <label className="subtitle">  subtitle: <input  value={newsubtitle}onChange={onchangeforsubtitle}  type="text" name="Title"/></label>

        <label className="author">    Author:<input value={newauthor}onChange={onchangeforauthor} type="text" name="Title"/>   </label>
        <label className="id">        id:<input value={newid}onChange={onchangeforid}type="text" name="Title"/>   </label>

        <div className="submitdiv">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
