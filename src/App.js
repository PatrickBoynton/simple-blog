import { Component } from 'react';
import Form from './components/Form';
import BlogList from './components/BlogList';

class App extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    const posts = [
      {
        title: "This is a fun tile!",
        text: "This is a fun body@",
      },
      {
        title: "This is another title!",
        text: "This is a second post!"
      }
    ]
    this.setState({posts});
    localStorage.setItem("posts", JSON.stringify(posts));
  }

  addPost(post) {
    const posts = [...this.state.posts];
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  render() {
   const posts = JSON.parse(localStorage.getItem("posts"))
   return  (<div>
      <Form  addPost={this.addPost}/>
      <BlogList  posts={posts}/>
    </div>)
  }
}

export default App;