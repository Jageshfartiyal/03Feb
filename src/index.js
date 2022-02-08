import React, {Component} from "react";
import  ReactDOM  from "react-dom";
import Hemisphere from "./hemisphere";
import './hemisphere.css'



class Locator extends Component
{

  state={
        latitude:10,
        error:''
      }
     componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        (position)=>
        {
          this.setState({latitude:position.coords.latitude})
        },
          (error)=>this.setState({error:error.message})
          );
     }
  
  render(){
    
        if(this.state.error===''){
          return(
            <div>
              <Hemisphere latitude={this.state.latitude}></Hemisphere>
            </div>
          )
        }else{
          return(
            <div>
              <label>Error: {this.state.error}</label>
            </div>
          )

        }
      
      
  }
}
ReactDOM.render(
  <Locator></Locator>,
  document.querySelector("#root")
)