import Addblog from "./AddBlogform";

export default function Addnewblog(props)
 {
  // const saveblogdata = (enteredblog) => 
  // {

  //   const allblogs=
  //   {
  //     ...enteredblog,id:Math.random().toString()
  //   }
  //   props.onaddblogs(allblogs);
  // };

return (
    <div>
      <Addblog addblogfunction={props.addblogfunction} />
    </div>
);
}