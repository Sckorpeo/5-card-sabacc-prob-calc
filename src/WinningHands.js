import React, { Component } from 'react';
import './WinningHands.css';
import { getCardImg, getColor } from './helpers';

class WinningHands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.filterHand(this.props.winningHand)
    }

    render() {
        let perc = (this.props.frequency / this.props.tries),
            color = getColor(perc),
            style = { boxShadow: `inset 0px 0px 15px 0 ${color}` };

        return (
            <div className='WinningHands-container'>
                <div className='WinningHands-rank' style={style}>
                    {this.props.rank}
                </div>
                <div className='WinningHands-content'
                    onMouseEnter={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}>
                    {!this.state.hover ? this.props.winningHand : this.props.description}
                    <div className='WinningHand-Img-Wrapper'>
                        {this.props.exampleHand.map(h => <img src={`${process.env.PUBLIC_URL}/Images/${getCardImg(h)}`} alt={`card is ${h}`} />)}
                    </div>

                </div>
                <div className='WinningHands-freq-wrapper'>
                    <div className='WinningHands-freq'>
                        {(perc * 100).toFixed(3) + '% of ' + this.props.tries}
                    </div>
                    <button className='WinningHands-freq-btn' onClick={this.handleClick}>Details</button>
                </div>
            </div >);
    }
}

export default WinningHands;