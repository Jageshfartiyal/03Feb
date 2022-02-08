import React, {Component} from "react";
import axios from "axios";

class Complaint extends Component{
    constructor(props){
        super(props)

        this.state={
            userID:'',
            title:'',
            body:''
        }
    }
        handleChange=e=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        Submit=e=>{
            e.preventDefault()
            console.log(this.state)
            axios
                .post('https://jsonplaceholder.typicode.com/posts', this.state)
                .then(response=>{
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    
    render(){
        const {userID, title, body}=this.state
        return(
            <div>
                <form onSubmit={this.Submit}>
                    <label>userID</label>
                    <input type='text' name='userID' value={userID} onChange={this.handleChange}></input><br></br>
                    <label>Title</label>
                    <input type='text' name='title' value={title} onChange={this.handleChange}></input><br></br>
                    <label>Body</label>
                    <input type='text' name='body' value={body} onChange={this.handleChange}></input><br></br>
                    <input type='submit'></input>
                    
                    
                </form>
            </div>
        )
    }

}
export default Complaint