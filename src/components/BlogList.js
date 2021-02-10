

function BlogList(props) {
    console.log(props);
    // Remember not to do explicit returns.
    const posts =  props.posts?.map((post, index) => (
        <li key={index}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </li>
    ))
    return (
        <ul>
            {posts}
        </ul>
    )
}

export default BlogList;