import Header from "./components/header";
import { useState } from "react";
import Footer from "./components/Footer";
import Addnewblog from "./components/Addblog";
import Blogs from "./components/blogs";

import "./App.css";

let defaultBlogList = [
  {
    id: "uniqueId-1",
    title: "Blog Title",
    subtitle: "Sub Title",
    content: "This is going to be very long line.",
    author: "Username of the user",
  },
  {
    id: "uniqueId-2",
    title: "Blog Title",
    subtitle: "Sub Title",
    content: "This is going to be very long line.",
    author: "Username of the user",
  },
  {
    id: "uniqueId-3",
    title: "Blog Title",
    subtitle: "Sub Title",
    content: "This is going to be very long line.",
    author: "Username of the user",
  },
  {
    id: "uniqueId-4",
    title: "Blog Title",
    subtitle: "Sub Title",
    content: "This is going to be very long line.",
    author: "Username of the user",
  },
  {
    id: "uniqueId-5",
    title: "Blog Title",
    subtitle: "Sub Title",
    content: "This is going to be very long line.",
    author: "Username of the user",
  },
  {
    id: "uniqueId-6",
    title: "Blog Title",
    subtitle: "Sub Title",
    content: "This is going to be very long line.",
    author: "Username of the user",
  },
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
