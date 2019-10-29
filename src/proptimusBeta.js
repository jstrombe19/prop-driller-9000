import React from 'react';

export default class ProptimusBeta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={this.props.proptimusPhotos["Proptimus Beta"]}
          className="App-logo"
          alt="logo"
          onClick={this.props.sendInTheCavalry}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
