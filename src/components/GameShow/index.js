/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import GameCards from '../GameCards'
import './index.css'
import {Paragraph} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameShow extends Component {
  state = {show: true, youImg: '', oppImg: '', result: '', score: 0}

  onClickToRandom = id => {
    const get = choicesList.find(list => id === list.id)

    const random = Math.ceil(Math.random() * choicesList.length)
    const image = choicesList[random - 1]

    if (get.id === 'ROCK' && image.id === 'SCISSORS') {
      this.setState(prevState => ({
        result: 'YOU WIN',
        score: prevState.score + 1,
      }))
    } else if (get.id === 'SCISSORS' && image.id === 'PAPER') {
      this.setState(prevState => ({
        result: 'YOU WIN',
        score: prevState.score + 1,
      }))
    } else if (get.id === 'PAPER' && image.id === 'ROCK') {
      this.setState(prevState => ({
        result: 'YOU WIN',
        score: prevState.score + 1,
      }))
    } else if (get.id === 'SCISSORS' && image.id === 'ROCK') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (get.id === 'PAPER' && image.id === 'SCISSORS') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (get.id === 'ROCK' && image.id === 'PAPER') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else {
      this.setState({result: 'IT IS DRAW'})
    }

    this.setState({show: false, youImg: get.imageUrl, oppImg: image.imageUrl})
  }

  playAgainGame = () => {
    this.setState({show: true})
  }

  render() {
    const {show, youImg, oppImg, result, score} = this.state
    return (
      <div className="main-card">
        <div className="card-one">
          <h1 className="list">
            ROCK <br />
            PAPER <br />
            SCISSORS
          </h1>

          <div className="score-card">
            <p>Score</p>
            <Paragraph>{score}</Paragraph>
          </div>
        </div>
        {show ? (
          <div className="card-two">
            <ul className="un-order">
              {choicesList.map(each => (
                <GameCards
                  key={each.id}
                  details={each}
                  onClickToRandom={this.onClickToRandom}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-two">
            <div>
              <div className="show-game">
                <div className="r-card">
                  <p>YOU</p>
                  <img className="size" src={youImg} alt="your choice" />
                </div>
                <div className="r-card">
                  <p>OPPONENT</p>
                  <img className="size" src={oppImg} alt="opponent choice" />
                </div>
              </div>
              <div className="game-result-card">
                <p>{result}</p>
                <button className="play-btn" onClick={this.playAgainGame}>
                  PLAY AGAIN
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="rules-card">
          <Popup modal trigger={<button className="rules">RULES</button>}>
            {close => (
              <div className="back-card">
                <div className="rules-card">
                  <button className="button" onClick={() => close()}>
                    <RiCloseLine />
                  </button>
                </div>
                <div className="img-div">
                  <img
                    className="img-rules"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default GameShow
