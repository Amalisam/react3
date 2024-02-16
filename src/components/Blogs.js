import { useState,useEffect } from "react";
import axios from 'axios';
import List from "./List";

const Blogs = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "weather1",
            author: "Author1",
            content: "Lorem ipsum dolor sit amet consecteturadipisicing n inventore quis esse, voluptatem, "

        },
        {
            id: 2,
            title: "weather2",
            author: "Author2",
            content: "Lorem ipsum dolor sit amet consecteturadipisicing n inventore quis esse, voluptatem, "

        },
        {
            id: 3,
            title: "weather3",
            author: "Author3",
            content: "Lorem ipsum dolor sit amet consecteturadipisicing n inventore quis esse, voluptatem, "

        }
      ]
   

    )

    useEffect(()=>{
        axios('http://localhost:5000/blogs/getblogs').then((data)=>{
          console.log(data)
        })
      },[])



 const deleteBtn = (id)=>{
    const filteredBlogs = blogs.filter((blogList)=>blogList.id!==id)
    setBlogs(filteredBlogs)
 }

    return (

        <div className="blogsBodyContainer">
            <h3>WebDev Blogs</h3>
           
             <List blogLists={blogs} delBtn={deleteBtn}/>   
        </div>

    );
}

export default Blogs;