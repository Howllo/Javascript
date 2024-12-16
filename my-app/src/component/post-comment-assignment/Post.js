import "./Post.css"
import Comment from "./Comment"
import { useState } from "react"

const Post = () => {
    const [posts] = useState ([
        { title: "Testing new Blog", body: 'Lorem ipsumium...', author: 'Fatima', id: 1},
        { title: "Testing Boo", body: 'Lorem...', author: 'Natia', id: 2},
        { title: "Boo", body: 'Lorem IPSUM...', author: 'Jessie', id: 3},
    ]);

    const [comments] = useState([
        { body: 'That Interest!', author: 'Ma', id: 1, postId: 1},
        { body: 'Never knew...', author: 'Mia', id: 2, postId: 1},
        { body: 'Lorem...', author: 'Dia', id: 3, postId: 1},
        { body: 'Wow!', author: 'Kakarot', id: 4, postId: 2},
        { body: 'Curse you...', author: 'Vegita', id: 5, postId: 2},
        { body: 'One...Piece... is real!', author: 'Luffy', id: 6, postId: 2},
        { body: 'SUPER!', author: 'Frankie', id: 7, postId: 3},
        { body: 'AH!', author: 'Toni-Toni Chopper', id: 8, postId: 3},
        { body: 'Curses', author: 'Ceasar', id: 9, postId: 3},
    ])

    return (
        <div className="grid-container">
              <h2>Assignment Post and Comment</h2>
            {
                posts.map(post =>{
                    const randomDays = Math.floor(Math.random() * 300) + 1;
                    const date = new Date();
                    date.setDate(date.getDate() - randomDays);

                    return(
                        <div className="post-name" key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <p>- {post.author}</p>
                            <p>{date.toLocaleDateString()}</p>
                            <hr className="post-br"></hr>
                            <Comment id={post.id} comments={comments}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post;