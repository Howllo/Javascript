const Comment = ({id, comments}) => {
    return (
        <div className='child-grid'>
            {
                comments.filter(comment => comment.postId === id)
                    .map(comment =>(
                        <div className='child-comment' key={comment.id}>
                            <p>{comment.body}</p>
                            <p>- {comment.author}</p>
                        </div>
                    ))
            }
        </div>
    )
}

export default Comment;