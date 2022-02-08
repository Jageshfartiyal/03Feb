import React, {Component} from "react";
import  ReactDOM  from "react-dom";



class Locator extends Component
{

  constructor(props){
      super(props)

      this.state={
        latitude:10,
        longitude:20,
        error:''
      }
  }
  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>
      {
        this.setState({latitude:position.coords.latitude, longitude:position.coords.longitude})
      },
        (error)=>this.setState({error:error.message})
        );
        if(this.state.error===''){
          return(
            <div>
              <label>latitude: {this.state.latitude}</label>
              <label>longitude: {this.state.longitude}</label>
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