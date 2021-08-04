import React, { Component } from 'react';
import './Prob.css';
import { getCardImg } from './helpers';

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
            <div className='prob-container' >
                <div className='prob-total'>
                    {this.props.handType}
                </div>
                <div className='prob-content'>
                    {this.props.cards.toString()}
                    <div className='prob-Img-Wrapper'>
                        {this.props.cards.map(c => <img src={`${process.env.PUBLIC_URL}/Images/${getCardImg(c)}`} alt={`card is ${c}`} />)}
                    </div>
                </div>
                <div className='prob-freq-wrapper'>
                    <button className='prob-freq-btn' onClick={this.handleClick}>Go Back</button>
                </div>
            </div>);
    }
}

export default Prob;