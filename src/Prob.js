import React, { Component } from 'react';
import './Prob.css';

class Prob extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.filterHand(this.props.handType);
    }

    render() {
        return (
            <div className='prob-container' onClick={this.handleClick}>
                <div className='prob-total'>
                    {this.props.handType}
                </div>
                <div className='prob-content'>
                    {this.props.cards.toString()}
                </div>
                <div className='prob-freq'>
                    {((this.props.frequency / this.props.tries) * 100).toFixed(4) + '%'}
                </div>
            </div>);
    }
}

export default Prob;