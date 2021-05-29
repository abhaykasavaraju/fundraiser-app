import React, { Component } from 'react'
import postdata from '../postdata';
import './Messages.css'
import { CgProfile } from "react-icons/cg";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
export class Messages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             feed: false,
             data : postdata,
             reply: ''
        }
        this.handleChangeReply = this.handleChangeReply.bind(this)
    }
  
    hideFeed = (hide) =>{
        this.setState({
            feed: !hide
        })
    }
    
    onReply = (index) => {

        const temp = [...this.state.data]
        temp [index].showReplyForm = true
        temp [index].showPost = true
        temp [index].showReply = false
        this.setState({
            data : temp
        })

    }

    onPost = (index) => {

        const temp = [...this.state.data]
        temp [index].showReplyForm = false
        temp [index].showPost = false
        temp [index].showReply = true
        temp [index].comments.push(
            {
                sender : "Suraj Pingali",
                message : this.state.reply,
            }
        )
        this.setState({
            data : temp,
            reply : ''
        })
        
    }

    handleChangeReply(event){this.setState({reply : event.target.value})}    
    
    render() {
        return (
            <div className = "wall-main">

                <div className = "post-header">
                    <h3>Feed  {this.state.feed?  <BsFillCaretUpFill onClick = {()=>this.hideFeed(true)}></BsFillCaretUpFill> : <BsFillCaretDownFill onClick = {()=>this.hideFeed(false)}></BsFillCaretDownFill> }</h3>
                </div>
                {this.state.feed? this.state.data.map((post,index)=>(

                    <div class="post-main" key={index}>

                        <h5 className="post-sender" ><CgProfile></CgProfile> {post.sender} </h5>
                    
                        <div className ="post-body">
                            {post.postMessage}
                        </div>

                        {
                            post.comments.map((comment,index)=>(
                            
                            <div>
                                <div className = "post-comments">
                                    <h5 className = "comment-sender"><CgProfile/>  {comment.sender}</h5>
                                    <p className = "comment-body">{comment.message}</p>
                                </div>
                            </div>
                            ))
                            
                            
                        }
                        <div className="post-reply">
                            {post.showReplyForm ? <input placeholder="Enter your reply" className = "form-control" type="text" value={this.state.reply} onChange={this.handleChangeReply}></input> :''}
                        </div>

                        <div className="post-footer">
                                {post.showReply?<button className="footer-button btn btn-primary" onClick={()=>this.onReply(index)}>Reply</button>:''}
                                {post.showPost ? <button className="footer-button btn btn-danger" onClick={()=>this.onPost(index)}>Post</button>:''}
                        </div>

                    </div>



                )):''}
                
                
            </div>
        )
    }
}

export default Messages