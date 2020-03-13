import React, { Component } from 'react';
// import axios from 'axios'
import axios from '../../../axios'

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost:null
    }

    componentDidMount(){
        console.log(this.props);
        this.loadData();
       
    }


    // i need to implemetn componentDidUpdate because the component is mounted and so don't change 

    componentDidUpdate(){
        this.loadData();
    }

    loadData(){
        if(this.props.match.params.id){
            // i need to compare with != because they are a string and number types or maybe use a +
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ){
                axios.get('/posts/'+ this.props.match.params.id)
                    .then( response =>{
                        this.setState({loadedPost:response.data})
                        console.log(response.data)
                    })
            }
            
        }
    }

    deletePostHandler = () =>{
                axios.delete('/posts/'+ this.props.match.params.id)
                .then(response => {
                    console.log(response) //show the data to delete
                })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id){
            post = <p style={{textAlign: 'center'}}>Loading...</p>
        }
        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
}

export default FullPost;