import { Component } from 'react';

class Form extends Component {

    render() {
        return <form>
                <label htmlFor="blog-title">Blog Title</label>
                <input type="text" id="blog-title" name="blog-title"/>
                <lable htmlFor="blog-text">Blog Text</lable>
                <textarea id="blog-text" name="blog-text"></textarea>
                <button className="btn">Create Post!</button>
            </form>
    }
}

export default Form;