import React, { Component } from 'react';
import './ProbList.css'

class ProbList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className='prob-list-container'>
                <div className='prob-list-sidebar'>
                </div>
                <div className='prob-list'>
                    {this.props.renderProbs()}
                </div>
            </div>);
    }
}


export default ProbList;