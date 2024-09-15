// Write your code here.

import './index.css'

const Navbar = props => {
  const {objListClicked, topScore, isActive} = props
  const scoreLength = objListClicked.length

  return (
    <div className="navBar">
      <div className="navImg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />

        <h1>Emoji Game</h1>
      </div>
      {isActive && (
        <div className="scoretext">
          <p className="score">Score: {scoreLength}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default Navbar
