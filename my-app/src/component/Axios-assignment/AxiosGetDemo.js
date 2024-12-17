import { useEffect, useState } from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";

const AxiosGetDemo = () => {
    const [posts, setPosts] = useState([])

    const newPosts = [
        { userId: 1, id: "6", title: "Testing new Blog", body: 'Lorem ipsumium...'},
        { userId: 1, id: "7", title: "Testing Boo", body: 'Lorem...'},
        { userId: 1, id: "8", title: "Boo", body: 'Lorem IPSUM...'},
    ];

    const updatePost = { userId: 1, id: "6", title: "Testing Blog", body: 'Lorem supra...'};

    useEffect(()=> {
        newPosts.map(post =>{
            axios.post("http://localhost:8000/post", post );
        })
    },[]);

    useEffect(()=> {
        axios.put(`http://localhost:8000/post/${updatePost.id}`, {
            userId: updatePost.id,
            title: updatePost.title,
            body: updatePost.body
        });
    },[])

    useEffect(()=> {
        newPosts.map(post =>{
            axios.delete("http://localhost:8000/post/1")
                .then(() =>{
                    console.log("Successfully delete post 1.");
                })
                .catch((error) =>{
                    console.log(error);
                });
        })
    },[])

    useEffect(()=> {
        axios.get("http://localhost:8000/post")
            .then(res =>{
                setPosts(res.data);
            })
    },[]);
    
    return (
        <>
            <h2>Axios Demo</h2>
            <hr></hr>
            <DisplayPost posts={posts}/>
        </>
    )
}

export default AxiosGetDemo;