import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega.js';
import ProptimusBeta from './proptimusBeta.js';
import ProptimusPrime from './proptimusPrime.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      drilledProp1: "I am the last drilled prop - Proptimus Prime!!!",
      drilledProp2: "I am the middle drilled prop - Proptimus Beta!",
      drilledProp3: "I am the first drilled prop - Proptimus Omega...",
      activeProp: ""
    }
  }


  callForBadHelp = (event) => {
    event.preventDefault();
    console.log("Bad help has arrived!")
    this.setState({
      activeProp: "Proptimus Omega"
    });
  }

  callForBetterHelp = (event) => {
    event.preventDefault();
    console.log("Better help has arrived.")
    this.setState({
      activeProp: "Proptimus Beta"
    })
  }

  gimmeAllYouGot = (event) => {
    event.preventDefault();
    console.log("It's time to kick brass!")
    this.setState({
      activeProp: "Proptimus Prime"
    })
  }

  sendThemHome = (event) => {
    event.preventDefault();
    console.log("I am Proptimus Prime, and I send this message to any surviving Proptobots taking refuge among the state: We are here. We are waiting.")
    this.setState({
      activeProp: ""
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick={this.callForBadHelp}
          />

          {this.state && this.state.activeProp === "Proptimus Omega" &&
          <>
            <p className="proptimus-omega-text">Will this do, human?</p>
            <ProptimusOmega
              proptimusPhotos={this.state.proptimusPhotos}
              catchPhrase={this.state.drilledProp3}
              callForBetterHelp={this.callForBetterHelp}
            />
          </>
          }

          {this.state && this.state.activeProp === "Proptimus Beta" &&
          <>
            <p className="proptimus-beta-text">Are you sure this situation warrants this?</p>
            <ProptimusBeta
              proptimusPhotos={this.state.proptimusPhotos}
              catchPhrase={this.state.drilledProp2}
              sendInTheCavalry={this.gimmeAllYouGot}
            />
          </>
          }

          {this.state && this.state.activeProp === "Proptimus Prime" &&
          <>
            <p className="proptimus-prime-text">There are no bigger guns!</p>
            <ProptimusPrime
              proptimusPhotos={this.state.proptimusPhotos}
              catchPhrase={this.state.drilledProp1}
              situationResolved={this.sendThemHome}
            />
          </>
          }
        </header>
      </div>
    );
  }
}
