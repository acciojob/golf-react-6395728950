import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handlekey= this.handlekey.bind(this)
    };

    buttonClickHandler() {
     this.setState({renderBall:true})
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
		}
    }

     handlekey(event){
        console.log("button is clicked or not");
      if(event.key==="ArrowRight" && this.state.renderBall){
        const newpos = this.state.posi+5;
        this.setState({
            posi:newpos,
            ballPosition:{left:`${newpos}px`},
        });
      }
     }
    // bind ArrowRight keydown event
    componentDidMount() {
       document.addEventListener("keydown",this.handlekey)
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
