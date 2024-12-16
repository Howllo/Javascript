const ListAndKey_Key = ({id, comments, handleDelete}) => {
    return (
        <div className='child-grid'>
            {
                comments.filter(comment => comment.postId === id)
                    .map(comment =>(
                        <div className='child-comment' key={comment.id}>
                            <p>{comment.body}</p>
                            <p>- {comment.author}</p>
                            <button onClick={()=>handleDelete(comment.id)}>Delete Comment</button>
                        </div>
                    ))
            }
        </div>
    )
}

export default ListAndKey_Key;