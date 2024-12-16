import { useEffect, useState } from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";

const AxiosGetDemo = () => {
    const [posts, setPosts] = useState([])

    const newPosts = [
        { userId: 1, id: "1", title: "Testing new Blog", body: 'Lorem ipsumium...'},
        { userId: 2, id: "2", title: "Testing Boo", body: 'Lorem...'},
        { userId: 3, id: "3", title: "Boo", body: 'Lorem IPSUM...'},
    ];

    useEffect(()=> {
        newPosts.map(post =>{
            axios.post("http://localhost:8000/post", post );
        })
    },[])

    useEffect(()=> {
        axios.get("http://localhost:8000/post")
            .then(res =>{
                console.log(res.data)
                setPosts(res.data);
            })
    },[])
    
    return (
        <>
            <h2>Axios Demo</h2>
            <hr></hr>
            <DisplayPost posts={posts}/>
        </>
    )
}

export default AxiosGetDemo;