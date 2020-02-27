import React, { Component } from 'react';

import './NewPost.css';
// import axios from 'axios'
import axios from '../../axios'
class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    // post, need a second argument. That is the data that we need to send at the server.
    // in this case we need to send a data from our state, we send a object of JS ES6 to the server
    // because axios turn it tho string and JSON format.
    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        };
        axios.post('/posts', post )
            .then (response => {
                console.log(response)
            })
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Julian">Julian</option>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;