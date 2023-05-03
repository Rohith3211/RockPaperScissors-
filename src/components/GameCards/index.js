/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import './index.css'

const GameCards = props => {
  const {details, onClickToRandom} = props
  const {id, imageUrl} = details
  const toClickTheButton = () => {
    onClickToRandom(id)
  }
  let value
  if (id === 'ROCK') {
    value = 'rock'
  } else if (id === 'SCISSORS') {
    value = 'scissors'
  } else if (id === 'PAPER') {
    value = 'paper'
  }
  console.log(value)
  return (
    <li>
      <button
        data-testId={`${value}Button`}
        className="btn"
        onClick={toClickTheButton}
      >
        <img src={imageUrl} className="image" alt={id} />
      </button>
    </li>
  )
}

export default GameCards
