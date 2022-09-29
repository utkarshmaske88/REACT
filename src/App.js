import Header from "./components/header";
import { useState } from "react";
import Footer from "./components/Footer";
import Addnewblog from "./components/Addblog";
import Blogs from "./components/blogs";

import "./App.css";

let defaultBlogList = [
  
];

function App() {


  const [blogList, setblogs] = useState(defaultBlogList);

  const addnewblogs = (newblogobject) => {
    setblogs([...blogList,newblogobject ]);
  };

  return (
    <div>
      <Header text="BlogSite" />
      <Blogs blogList={blogList} />
      <Addnewblog addblogfunction={addnewblogs} />
      <Footer />
    </div>
  );
}

export default App;
