// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onTriggerActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderImageActive = () => {
    const {isActive} = this.state
    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button className="btn" type="button" onClick={this.onTriggerActive}>
        <img className="img" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faqs-list">
        <div className="faqs-container">
          <h1 className="title">{questionText}</h1>
          {this.renderImageActive()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
