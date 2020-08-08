import React, { Component } from 'react'
import axios from "axios"

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMasag: ""
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMasag: "Error Retreving Datat"})
        })
    }
    
    render() {
        const { posts, errorMasag } = this.state
        // console.log(posts.length)
        return (
            <div>
            List of Posts
                {
                    posts.length?
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
                {errorMasag? <div>{errorMasag}</div>: null}
            </div>
        )
    }
}

export default PostList
