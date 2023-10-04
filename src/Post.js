import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const Post=()=>{
    const param=useParams()
    const postId=param.postId
    const [post,setPost]=useState(null)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/"+postId).then((res)=>{
            setPost(res.data)
            console.log(res.data)

        })
        
    },[])
    const displayPost=post?( <div className="center"><h4>{post.title}</h4> <p>{post.body}</p></div>):(<div className="center"><h4>Loading ...........</h4></div>)
    return (
        <div className="container">{displayPost}</div>
    )
}

export default Post;