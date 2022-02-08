import React, {Component} from "react";

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:'',
            email:''
        }
        this.changeAge=this.changeAge.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeName=this.changeName.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeName(event){
        this.setState({
            name:event.target.value
        })
    }
    changeAge(event){
        this.setState({
            age:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    onSubmit(event){
        alert("name:"+ this.state.name + " age: "+ this.state.age+ " email:" + this.state.email)
    }
    render(){
        return(
            <div className="main">
                <center><form className="form">
                    <h1>Registration form</h1><hr></hr>
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.changeName}></input><br></br><br></br>
                    <label>Age: </label>
                    <input type='number' value={this.state.age} onChange={this.changeAge}></input><br></br><br></br>
                    <label>Email: </label>
                    <input type='email' value={this.state.email} onChange={this.changeEmail}></input><br></br>
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
                </center>
            </div>
        )
    }
}
export default Register