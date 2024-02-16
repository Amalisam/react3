







const List = ({blogLists, delBtn}) => {
    return ( 
        <>
        {blogLists.map((blogList) => {
            return(
                <div className="blogsContainer" key={blogList.id}>
                <div className="topic"><h4>{blogList.title}</h4></div>
                <div className="author"><h5>{blogList.author}</h5></div>
                <div className="content"><p>{blogList.content}</p></div>
            <div className="deletebtn"><button onClick={()=>{delBtn(blogList.id)}}>DELETE</button></div>
                </div>
                )
            })}
       
       </> 

    );
}
 
export default List;