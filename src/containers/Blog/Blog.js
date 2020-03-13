import React, { Component } from 'react';
// import axios from 'axios' -> i comment this because now use my new axios whit the default settings 

//no  this was comment because i use Router now and use in other components

// import axios from '../../axios'
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';

// this was comment because i use Router now and use in other components


import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {

    render () {
            



        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li>
                            {/* i need to use a Link tag because a tag reload the page, and this is how i can say to react for render */}
                                <NavLink to="/" 
                                exact 
                                activeClassName="active" // this is a reference, but i can change the css whit that
                                activeStyle={{}} // i can use inline styles
                                >Home</NavLink> 
                            </li>
                            <li>
                                <NavLink to={{
                                    // pathname: this.props.match.url + '/new-post' it's a relative pathc
                                    pathname:"/new-post", //always be a exact patch
                                    hash:'#submit', //this notation is valid and go to Id submit directly
                                    search: '?quick-submit=true' //this notation is valid 
                                    }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>     
                {/* <Route  path="/" exact render={()=><Posts></Posts>} />        i can do that but is better use  component  */}
                {/* i can use /post/ to select where render my page instead Switch, switch stops when find the route */}
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" // generate dinamically a path whit Id, i need put here because the new-post is an id
                    exact 
                    component={FullPost} 
                    />
                </Switch>
            </div>
        );
    }
}

export default Blog;

