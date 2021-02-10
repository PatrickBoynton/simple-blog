import Form from './components/Form';
import BlogList from './components/BlogList';
import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <BlogList/>
      </div>
    );
  }
}

export default App;
