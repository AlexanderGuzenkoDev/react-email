import React, { Component } from 'react'

export default class StartForm extends Component {
  onClick = (e) => {
    this.props.nextPage();
  }

  render() {
    return (
      <div className="form_s">
      <h1>Is IVF Right for You?</h1>
      <p className="header-gap"></p>
        <p>Answer just 8 multiple-choice questions so we can understand your circumstances, help you decide whether IVF is right for you, and suggest a plan that fits your needs.</p>
        <ul className="app-quiz__answers">
            <li><button type="button" onClick={(e) => this.onClick(e)}>Start quiz</button></li>
        </ul>
      </div>
    )
  }
}
