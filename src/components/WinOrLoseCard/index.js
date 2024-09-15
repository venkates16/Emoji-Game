// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {obj, win, restartGame} = props
  const isActive = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = win ? '"You Won' : 'You Lose'
  const scoreSatus = win ? 'Best Score' : 'Score'
  const score = win ? '12/12' : `${obj.length / 12}`
  const click = () => {
    restartGame()
  }

  return (
    <div>
      <img src={isActive} alt="win or lose" />
      <h1 className="status">{status}</h1>
      <p className="scoreSatus">{scoreSatus}</p>
      <p className="length">{score}</p>
      <div>
        <button onClick={click} type="button" id="button">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
