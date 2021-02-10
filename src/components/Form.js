import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render() {
        return <form>
                <label htmlFor="blog-title">Blog Title</label>
                <input type="text" id="blog-title" name="blog-title"/>
                <lable htmlFor="blog-text">Blog Text</lable>
                <textarea id="blog-text" name="blog-text"></textarea>
                <button type="submit" className="btn">Create Post!</button>
            </form>
    }
}

export default Form;