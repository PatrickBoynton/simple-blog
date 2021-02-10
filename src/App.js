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
    localStorage.setItem("posts", this.state);
  }

  addPost(post) {
    const posts = [...this.state.posts];
    localStorage.setItem("posts", this.state);
  }
  render() {
    <>
      <Form />
      <BlogList />
    </>
  }
}

export default App;