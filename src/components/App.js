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
        this.handleKeyDown= this.handleKeyDown.bind(this)
        
    };

    buttonClickHandler() {
     this.setState({renderBall:true})
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} class="start" >Start</button>
		}
    }

     handleKeyDown(event){
        console.log("button is clicked or not");
      if(event.key==="ArrowRight" && this.state.renderBall){
        const newpos = this.state.posi+5;
        this.setState({
            posi:newpos,
            ballPosition:{left:`${newpos}px`},
        });
      }
     }
    //  handleKeyDown = (event) => {
    //     if (event.keyCode === 39) { // Right Arrow key
    //         this.setState(prevState => ({
    //             ballPosition: prevState.ballPosition + 5
    //         }));
    //     }
    // };
    // bind ArrowRight keydown event
    componentDidMount() {
       document.addEventListener("keydown",this.handleKeyDown)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
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
