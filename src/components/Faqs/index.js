// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="app-container">
        <h1 className="app-title">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} faqDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
