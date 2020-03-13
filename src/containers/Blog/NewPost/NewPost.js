import React, { Component } from 'react';

import './NewPost.css';
import axios from '../../../axios'
import { Redirect } from 'react-router-dom'
class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted:false,
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
                
                this.props.history.push('/posts') //this adds a page to stack and we can the back button to go back
                
                // this.setState({
                //     submitted:true
                // });
            })
    }

    render () {

        // using this redirect we can't go back because this replace the path

        // let redirected = null;

        // if (this.state.submitted){
        //     redirected = <Redirect to="/posts" />;
        // }

        // using this redirect we can't go back because this replace the path
        
        return (
            <div className="NewPost">
                {/* {redirected} */}
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