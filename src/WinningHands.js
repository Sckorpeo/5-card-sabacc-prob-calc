import React, { Component } from 'react';
import './WinningHands.css';

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
        return (
            <div className='WinningHands-container' onClick={this.handleClick}>
                <div className='WinningHands-rank'>
                    {this.props.rank}
                </div>
                <div className='WinningHands-content'
                    onMouseEnter={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}>
                    {!this.state.hover ? this.props.winningHand : 'View underlying hand combinations.'}
                </div>
                <div className='WinningHands-freq'>
                    {((this.props.frequency / this.props.tries) * 100).toFixed(4) + '% of ' + this.props.tries}
                </div>
            </div>);
    }
}

export default WinningHands;