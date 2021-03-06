import React, { Component } from 'react'
import postdata from '../postdata';
import './Messages.css'
import { CgProfile } from "react-icons/cg";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap';
export class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feed: false,
            name: props.name,
            reply: '',
            data: [],
            receiver: '',
            postBody: '',
            newpost: false,
            image: '',
            allMembers: []


        }
        console.log(this.state.data)
        this.handleChangeReply = this.handleChangeReply.bind(this)
        this.handleChangeReceiver = this.handleChangeReceiver.bind(this)
        this.handleChangePostBody = this.handleChangePostBody.bind(this)
    }

    componentDidMount() {
        this.loadPosts()

    }

    hideFeed = (hide) => {
        this.setState({
            feed: !hide
        })

        this.loadPosts()
    }

    hidePost = (index, hide) => {
        const temp = [...this.state.data]
        temp[index].show = !hide
        this.setState({ data: temp })
    }

    onReply = (index) => {
        const temp = [...this.state.data]
        temp[index].showReplyForm = true
        temp[index].showPost = true
        temp[index].showReply = false
        this.setState({
            data: temp
        })

    }

    loadPosts = () => {
        console.log(this.state.name)
        axios.get('http://localhost:5000/posts/' + this.state.name)
            .then(response => {
                //console.log(response.data)
                const temp = response.data
                for (let post of temp) {
                    post.showReplyForm = false
                    post.showReply = true
                    post.showPost = false
                    post.show = false
                }
                //console.log(temp)
                this.setState({ data: temp })
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('http://localhost:5000/users/find')
            .then(res => this.setState({ allMembers: res.data }))
        console.log(this.state.allMembers)

    }

    onPost = (index, id) => {
        const comment = {
            sender: this.state.name,
            comment: this.state.reply
        }

        axios.post('http://localhost:5000/posts/addcomments/' + id, comment)
            .then(res => console.log(res.data));


        this.setState({
            reply: ''
        })

        this.loadPosts()


    }

    onSubmitPost = () => {
        const post = {
            sender: this.state.name,
            receiver: this.state.receiver,
            message: this.state.postBody,
            comments: []
        }

        axios.post('http://localhost:5000/posts/add/', post)


        this.setState({
            postBody: '',
            receiver: '',
            newpost: false
        })

        this.loadPosts()


    }

    onCreatePost = () => {

        this.setState({
            newpost: true
        })

    }

    getImage = (name) => {
        axios.get('http://localhost:5000/users/image/' + name)
            .then(res => { this.setState({ image: res.data[0].image }) })
        return this.state.image
    }

    handleChangeReply(event) { this.setState({ reply: event.target.value }) }
    handleChangeReceiver(event) { this.setState({ receiver: event.target.value }) }
    handleChangePostBody(event) { this.setState({ postBody: event.target.value }) }

    render() {
        return (

            <div className="wall-main">
                {/* {console.log(this.state.data)} */}
                <div className="post-header">
                    <h3>Feed  {this.state.feed ? <BsFillCaretUpFill onClick={() => this.hideFeed(true)}></BsFillCaretUpFill> : <BsFillCaretDownFill onClick={() => this.hideFeed(false)}></BsFillCaretDownFill>}</h3>
                </div>
                {this.state.feed ? this.state.data.map((post, index) => (

                    <div class="post-main" key={index}>

                        <div className="post-sender">
                            <Container>
                                <Row>
                                    <Col lg={2} style={{ paddingLeft: '10px' }}>
                                        {post.sender !== this.state.name ? <span class="badge bg-success" style={{ fontSize: '15px' }}>Received From</span> : <span class="badge bg-danger">Sent To </span>}
                                    </Col>

                                    <Col lg={3} style={{ paddingLeft: '50px' }}>
                                        {post.sender !== this.state.name ? <img style={{ height: '90px', width: 'auto', borderRadius: '50%' }} src={`/uploads/${this.state.allMembers.find(user => user.name === post.sender).image}`} /> : <img style={{ height: '90px', width: 'auto', borderRadius: '50%' }} src={`/uploads/${this.state.allMembers.find(user => user.name === post.receiver).image}`} />}
                                    </Col>

                                    <Col lg={5} style={{ fontSize: '5px', paddingLeft: '50px' }}>
                                        {post.sender !== this.state.name ? <h6>{post.sender}</h6> : <h6>{post.receiver}</h6>}
                                    </Col>

                                    <Col style={{ fontSize: '25px', paddingLeft: '60px' }} lg={1}>
                                        {post.show ? <BsFillCaretUpFill onClick={() => this.hidePost(index, true)}></BsFillCaretUpFill> : <BsFillCaretDownFill onClick={() => this.hidePost(index, false)}></BsFillCaretDownFill>}
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        {/* <h4 className="post-sender" ><span class="badge bg-success">Sent By</span>  <CgProfile></CgProfile> {post.sender} {post.show ?  <BsFillCaretUpFill onClick = {()=>this.hidePost(index,true)}></BsFillCaretUpFill> : <BsFillCaretDownFill onClick = {()=>this.hidePost(index,false)}></BsFillCaretDownFill> } </h4> 
                        </div>
                        :

                        <h4 className="post-sender" ><span  class="badge bg-danger">Sent To</span> <CgProfile ></CgProfile> {post.receiver} {post.show ?  <BsFillCaretUpFill onClick = {()=>this.hidePost(index,true)}></BsFillCaretUpFill> : <BsFillCaretDownFill onClick = {()=>this.hidePost(index,false)}></BsFillCaretDownFill> } </h4> } */}



                        {post.show ?
                            <div>
                                <div className="post-body">
                                    {post.message}
                                </div>

                                {
                                    post.comments.map((comment, index) => (

                                        <div>
                                            <div className="post-comments">
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <img className="comment-sender" style={{ height: '150px', width: 'auto', borderRadius: '50%' }} src={`/uploads/${this.state.allMembers.find(user => user.name === comment.commentSender).image}`} />
                                                        </Col>

                                                        <Col style={{ paddingTop: '40px' }}>
                                                            <h5>{comment.commentSender}</h5>
                                                        </Col>
                                                    </Row>

                                                </Container>
                                                <p className="comment-body">{comment.comment}</p>
                                            </div>
                                        </div>
                                    ))


                                }
                                <div className="post-reply">
                                    {post.showReplyForm ? <input placeholder="Enter your reply" className="form-control" type="text" value={this.state.reply} onChange={this.handleChangeReply}></input> : ''}
                                </div>

                                <div className="post-footer">
                                    {post.showReply ? <button className="footer-button btn btn-primary" onClick={() => this.onReply(index)}>Reply</button> : ''}
                                    {post.showPost ? <button className="footer-button btn btn-danger" onClick={() => this.onPost(index, post._id)}>Post</button> : ''}
                                </div>

                            </div> : ''}

                    </div>



                )) : ''}

                <div className="newpost">
                    {this.state.feed ? (this.state.newpost ?
                        <div>
                            <input type="text" placeholder="Enter Receiver Name" className="form-control" value={this.state.receiver} onChange={this.handleChangeReceiver}></input>
                            <input type="textarea" placeholder="Enter Your Message" className="form-control" value={this.state.postBody} onChange={this.handleChangePostBody}></input>
                            <button className="btn btn-primary" onClick={() => { this.onSubmitPost() }}>Submit Post</button>
                        </div> : <button className="btn btn-warning" onClick={() => { this.onCreatePost() }}>Create Post</button>) : ''}

                </div>


            </div>
        )
    }
}

export default Messages