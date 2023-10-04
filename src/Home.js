import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import  pokeball from "./pokeball.png"
const Home=()=>{
    const [posts,setPosts]=useState([]);


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data)
            setPosts(res.data.slice(0,10))
        })

    },[])
    const  postList=posts.length?(
        posts.map((post)=>{
            return(
               
               
               <div className="post card" key={post.id}>
                    <div className="card-content">
                        <img src={pokeball}></img>
                    <Link to={"/"+post.id}>
                        <span  className="card-title red-text">
                            <b>{post.title}</b>
                        </span>
                        </Link>
                        <p>{post.body}</p>
                    </div>

                </div>
              
            )
        })
    ):(
        <div  className="center">no posts</div>
    );
    return (
        <div className="container home">
            <h4 className="center">this is Home Page </h4>
            {postList}
        </div>
    )
}

export default Home;