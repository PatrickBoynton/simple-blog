
function BlogList(props) {
        const post = JSON.parse(props.blogs).map((blog, index) => (
            <li key={index}>
            <h1>{blog.title}</h1>
                <p>{blog.text}</p>
            </li>
        ));
        return (<ul>
            {post}
        </ul>)
}

export default BlogList;