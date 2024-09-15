// Write your code here.

import {Component} from 'react'
import './index.css'

const EmojiCard = props => {
  const {isClickedEmoji, emojisList} = props
  const {emojiName, emojiUrl, id} = emojisList

  const click = () => {
    isClickedEmoji(id)
  }
  return (
    <li className="emojiCon">
      <button type="button" className="cardEmoji" onClick={click}>
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}

export default EmojiCard
