import { useEffect, useState } from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";

const AxiosGetDemo = () => {
    const [posts, setPosts]=useState([])

    const [newPosts, setNewPosts] = useState ([
        { title: "Testing new Blog", body: 'Lorem ipsumium...', userId:1, id: 1},
        { title: "Testing Boo", body: 'Lorem...', author: 'Natia', id: 2},
        { title: "Boo", body: 'Lorem IPSUM...', author: 'Jessie', id: 3},
    ]);

    useEffect(()=> {
        axios.get("http://localhost:8000/posts")
            .then(res =>{
                setPosts(res.data);
            })
    },[])

    useEffect(()=> {
        axios.post("http://localhost:8000/posts", { })
            .then()
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