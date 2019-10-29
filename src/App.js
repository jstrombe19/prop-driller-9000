import React from 'react';
import './App.css';

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
    }
  }


  callForBadHelp = (event) => {

  }

  callForBetterHelp = (event) => {

  }

  gimmeAllYouGot = (event) => {

  }

  sendThemHome = (event) => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={}
            className="App-logo"
            alt="logo"
          />

          {this.state && this.state.activeProp === "" /*Which Proptobot should be checked for?*/ &&
          <>
            <p className="">Will this do, human?</p>
            <Proptimus /*Specify your Proptobot here.*/
              /*You need to pass all of your props to this component here.*/
            />
          </>
          }

        </header>
      </div>
    );
  }
}
