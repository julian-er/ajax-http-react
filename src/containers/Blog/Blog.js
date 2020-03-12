import React, { Component } from 'react';
// import axios from 'axios' -> i comment this because now use my new axios whit the default settings 

//no  this was comment because i use Router now and use in other components

// import axios from '../../axios'
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../Blog/NewPost/NewPost';

// this was comment because i use Router now and use in other components


import './Blog.css';
import { Route, Link } from 'react-router-dom'
import Posts from './Posts/Posts'

class Blog extends Component {

    render () {
            



        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li>
                            {/* i need to use a Link tag because a tag reload the page, and this is how i can say to react for render */}
                                <Link to="/">Home</Link> 
                            </li>
                            <li>
                                <Link to={{
                                    pathname:"/new-post",
                                    hash:'#submit', //this notation is valid and go to Id submit directly
                                    search: '?quick-submit=true' //this notation is valid 
                                    }}>New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>     
                {/* <Route  path="/" exact render={()=><Posts></Posts>} />        i can do that but is better use  component  */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;

