import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost';


// import { Link } from 'react-router-dom'  adding this i can manage where need to go the posts with link


class Posts extends Component {
    
    state = {
        posts : [],
    }

    postSelectedHandler = (id) =>{
        // this.setState({selectedPostId:id}) i use this when nav with links
        //this.props.history.push({'/posts/' + id}); this works too!
        this.props.history.push({pathname: '/posts/' + id}); // i can navigate programmatically using the history
    }

        //axios use promises of Js ES6
    componentDidMount(){
            axios.get('/posts')
            .then (response =>{
                //Now i can manage the data, i can slice o add some to response of te server
                const post = response.data.slice(0, 4) //only store 4 of the post for show in a section post 
                const updatedPosts = post.map(post => {
                    return {
                        ...post,
                        author: 'Julian' //i change the original author for Julian
                    }
                })
                this.setState({posts:updatedPosts})
            })
            .catch(error =>{
                console.log(error)
                //this.setState({error: true})
            })
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Something went wrong! The data can't be reached</p>;

            if(!this.state.error){
                post = this.state.posts.map(post => {
                    return <Post
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler (post.id)}/>
                    




                    // i don't use this form, but it's an option --- USING LINK

                    // return <Link to={'/posts/' + post.id} key={post.id} >
                    // <Post
                    // title={post.title} 
                    // author={post.author}
                    // clicked={() => this.postSelectedHandler (post.id)}/>
                    // </Link>
                })
            
            }
        return (<div>
                    <section className="Posts">
                    {post}
                    </section>
                    <Route 
                    path={this.props.match.url + '/:id'}
                    // path="/posts/:id" // generate dinamically a path whit Id, i need put here because the new-post is an id
                    exact 
                    component={FullPost} 
                    />
             </div>
            
        )
    }
}

export default Posts
