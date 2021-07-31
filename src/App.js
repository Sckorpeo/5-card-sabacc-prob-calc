
import './App.css';
import InputForm from './InputForm'
import React, { Component } from 'react';
import { total, shuffle, compareArrays, handCheck } from './helpers';
import ProbList from './ProbList';
import Prob from './Prob';
import WinningHands from './WinningHands';
import '@fortawesome/fontawesome-free/css/all.css';

class App extends Component {
  static defaultProps = {
    decks: [[0, 0, 1, -1, 1, -1, 1, -1, 2, -2, 2, -2, 2, -2, 3, -3, 3, -3, 3, -3, 4, -4, 4, -4, 4, -4,
      5, -5, 5, -5, 5, -5, 6, -6, 6, -6, 6, -6, 7, -7, 7, -7, 7, -7, 8, -8, 8, -8, 8, -8, 9, -9, 9, -9,
      9, -9, 10, -10, 10, -10, 10, -10]],
    winningHands: ['Nulrhek', 'Pure Sabacc', 'Banthas Wild', 'Rule of Two',
      'Twins', 'Rhylet', 'Fleet/Squadron', 'Gee Whiz', 'Straight Khyron', 'Sabacc']
  }
  constructor(props) {
    super(props);
    this.state = {
      probabilities: [],
      tries: 0,
      suited: false,
      loading: false,
      renderHands: true,
      selectedHand: ''
    }
    this.run = this.run.bind(this);
    this.renderProbs = this.renderProbs.bind(this);
    this.loading = this.loading.bind(this);
    this.calculateProbs = this.calculateProbs.bind(this);
    this.renderWinningHands = this.renderWinningHands.bind(this);
    this.whatToRender = this.whatToRender.bind(this);
    this.filterHand = this.filterHand.bind(this);
  }

  renderProbs(hand) {
    return this.state.probabilities.map(p => hand === p.handType ?
      <Prob total={p.total}
        cards={p.cards}
        key={p.key}
        id={p.key}
        tries={this.state.probabilities.length}
        frequency={p.frequency}
        handType={p.handType}
        filterHand={this.filterHand}
      /> :
      null

    ).filter(x => x !== null);
  }

  calculateProbs(handArray) {
    let winningHandProbs = [];
    for (let hand of handArray) {
      let freq = 0;
      for (let prob of this.state.probabilities) {
        if (prob.handType === hand) {
          freq++
        }
      }
      winningHandProbs.push({ winningHand: hand, frequency: freq });
    }
    // console.log(winningHandProbs);
    return winningHandProbs;
  }

  renderWinningHands(nulrhek = false) {
    let hands = this.calculateProbs(this.props.winningHands).filter(x => x.frequency !== 0).sort((a, b) => a.frequency - b.frequency);

    return hands.map((h, index) => <WinningHands rank={index + 1}
      winningHand={h.winningHand}
      frequency={h.frequency}
      tries={this.state.probabilities.length}
      key={index}
      filterHand={this.filterHand}
    />)

  }

  whatToRender() {
    if (this.state.renderHands) {
      return this.renderWinningHands();
    } else {
      return this.renderProbs(this.state.selectedHand);
    }
  }

  filterHand(hand) {
    this.setState(st => ({
      selectedHand: hand,
      renderHands: !st.renderHands
    }))
  }

  loading() {
    this.setState({ loading: true });
  }


  run(tries, Nulrheks = false, draws = 5) {
    let attempts = [];
    let deck = this.props.decks[0];
    let shuffledDeck = shuffle(deck);

    // for (let i = 0; i < tries; i++) {
    while (attempts.length < tries) {

      let attempt = { total: 0, cards: [], frequency: 1, id: '', handType: '' };
      if (shuffledDeck.length === 2) { shuffledDeck = shuffle(deck) }
      for (let k = 0; k < draws; k++) {
        attempt.cards.push(shuffledDeck.pop())
      }
      attempt.total = total(attempt.cards);

      if (attempt.total === 0) {
        attempt.id = attempt.cards.toString();
        attempt.key = attempt.cards.toString();
        attempts.push(attempt);
        attempt.handType = handCheck(attempt.cards);
        // if (attempts.some(element => compareArrays(element.cards, attempt.cards))) {
        //   attempts = attempts.map(a => compareArrays(a.cards, attempt.cards)
        //     ?
        //     { ...a, frequency: a.frequency + 1 } : a)
        // } else {
        //   attempts.push(attempt);
        // }
      } else if (Nulrheks) {
        attempt.id = attempt.cards.toString();
        attempt.key = attempt.cards.toString();
        attempts.push(attempt);
        attempt.handType = handCheck(attempt.cards);
      }
    }
    this.setState(st => ({
      probabilities: [...st.probabilities, ...attempts],
      loading: false
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>5 Card Sabacc Probability Calculator</h1>
        <InputForm run={this.run} loading={this.loading} />
        {this.state.loading ?
          <div className='prob-list-loading-container'>
            <i className="fas fa-circle-notch fa-7x fa-fade fa-spin" />
            <h3>Calculating . . .</h3>
          </div>
          :
          <ProbList
            renderProbs={this.whatToRender}
          />
        }

      </div>
    );
  }

}

export default App;
