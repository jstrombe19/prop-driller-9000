import React from 'react';

export default class ProptimusPrime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deescalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={this.props.proptimusPhotos["Proptimus Prime"]}
          className="App-logo"
          alt="logo"
          onClick={this.props.situationResolved}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
