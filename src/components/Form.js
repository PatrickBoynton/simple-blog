import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.props.addPost(this.state);
        this.setState({title: "", text: ""});
        event.preventDefault();
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
                <label htmlFor="blog-title">Blog Title</label>
                <input type="text" id="blog-title" name="blog-title" onChange={this.handleInput}/>
                <label htmlFor="blog-text">Blog Text</label>
                <textarea id="blog-text" name="blog-text" onChange={this.handleInput}></textarea>
                <button type="submit" className="btn">Create Post!</button>
            </form>
    }
}

export default Form;