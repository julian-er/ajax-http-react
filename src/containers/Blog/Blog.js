import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {


    state = {
        posts : [],
        selectedPostId : null
    }

    //axios use promises of Js ES6
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (response =>{
            //Now i can manage the data, i can slice o add some to response of te server
            const post = response.data.slice(0, 4) //only store 4 of the post for show in a section post 
            const updatedPosts = post.map(post => {
                return {
                    ...post,
                    author: 'Julian'
                }
            })
            this.setState({posts:updatedPosts})
        })
    }

    postSelectedHandler = (id) =>{
            this.setState({selectedPostId:id})
    }

    render () {

        let post = <p>Loading post... <br />  this action can be slow, that depends on your internet access</p>;

        if (this.state.posts){
            post = this.state.posts.map(post => {
                return <Post
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler (post.id)}/>
            })}
        


        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;