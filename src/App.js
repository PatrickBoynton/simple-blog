import Form from './components/Form';
import BlogList from './components/BlogList';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    const blogs = [
      {
        title: "This is a fun tile!",
        text: "This is from the array!"
      },
      {
        title: "This is a second tile!",
        text: "This is a second blog post!"
      }
    ]
    this.setState({blogs});
  }

  addPost(blog) {
    const blogs = [...this.state.blogs];
    localStorage.setItem("blogs", blogs);

    this.setState({blogs})
  }
  render() {
    return (
      <div className="App">
        <Form addPost={this.addPost}/>
        <BlogList blogs={this.state?.blogs}/>
      </div>
    );
  }
}

export default App;
