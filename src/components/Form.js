import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        this.props.addPost(this.state);
        localStorage.setItem("posts", JSON.stringify(this.state));
        this.setState({title: "", text: ""});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Blog Title</label>
                <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInput}/>
                <label htmlFor="text" />
                <input type="text" name="text" value={this.state.text} onChange={this.handleInput}/>
                <button className="btn">Add Post</button>
            </form>
        )
    }
}

export default Form;