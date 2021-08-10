import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProbCalc from './ProbCalc';
import Navbar from './Navbar';
import Home from './Home';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calculating: false
        }
        this.switch = this.switch.bind(this);
    }
    // handleScroll(e) {
    //     let element = e.target
    //     console.log('Scrolling.')
    //     console.log(element.scrollHeight, element.scrollTop, element.clientHeight)
    //     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //         console.log(element);
    //     }
    // }
    switch() {
        this.setState(st => ({
            calculating: !st.calculating
        }))
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => <Home switch={this.switch} />} />
                    <Route exact path='/Probability-calculator'
                        render={() => <ProbCalc switch={this.switch} />} />
                </Switch>
                {this.state.calculating ? null : <Navbar />}
            </div>);
    }
}

export default App;