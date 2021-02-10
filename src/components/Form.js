import { Component } from 'react';

class Form extends Component {

    render() {
        return <form>
                <input type="text"/>
                <textarea></textarea>
                <button className="btn">Create Post!</button>
            </form>
    }
}

export default Form;