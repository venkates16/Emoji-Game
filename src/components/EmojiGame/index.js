/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
import Navbar from '../NavBar'

class EmojiGame extends Component {
  state = {
    isProgress: true,
    isClickedList: [],
    topScore: 0,

    isLengthClicked: 0,
  }

  finishGameReset = score => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (score > topScore) {
      newTopScore = score
    }
    this.setState({topScore: newTopScore, isProgress: false})
  }

  isClickedEmoji = id => {
    const {emojisList} = this.props
    console.log(id)
    const {isClickedList} = this.state
    const isAlreadyClicked = isClickedList.includes(id)
    const clickLengthOfList = isClickedList.length

    if (isAlreadyClicked) {
      this.finishGameReset(clickLengthOfList)
    } else if (emojisList.length === clickLengthOfList + 1) {
      this.setState({isLengthClicked: clickLengthOfList + 1})
      this.finishGameReset(clickLengthOfList + 1)
    } else {
      this.setState(prev => ({
        isClickedList: [...prev.isClickedList, id],
      }))
    }
  }

  restartGame = () => {
    this.setState({isClickedList: [], isProgress: true})
  }

  displayScore = () => {
    const {emojisList} = this.props
    const {isClickedList, isLengthClicked} = this.state
    const winHighScore = emojisList.length === isLengthClicked

    return (
      <div className="scoreCard">
        <WinOrLoseCard
          win={winHighScore}
          obj={isClickedList}
          restartGame={this.restartGame}
        />
      </div>
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiRender = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <div className="emojiImgContainer">
        <ul className="emojiContainer">
          {shuffledList.map(each => (
            <EmojiCard
              key={each.id}
              emojisList={each}
              isClickedEmoji={this.isClickedEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isProgress, topScore, isClickedList} = this.state
    console.log(isProgress)

    return (
      <div className="container">
        <div className="navHeader">
          <Navbar
            isActive={isProgress}
            topScore={topScore}
            objListClicked={isClickedList}
          />
        </div>
        {isProgress ? this.emojiRender() : this.displayScore()}
      </div>
    )
  }
}

export default EmojiGame
