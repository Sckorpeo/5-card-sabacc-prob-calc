import React, { Component } from 'react';
import './InputForm.css';


class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tries: 0,
            nulrhek: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.run(parseInt(this.state.tries), this.state.nulrhek);

    }
    handleChange(evt) {
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        this.setState({
            [evt.target.name]: value
        })
    }
    render() {
        return (
            <div className='InputForm'>
                <form className='InputForm-form' onSubmit={this.handleSubmit}>
                    <div className='label-wrapper-tries'>
                        <label className='InputForm-label-tries' htmlFor='tries'>Number of Runs:</label>
                        <input type='text' name='tries' value={this.state.tries} id='tries' onChange={this.handleChange}></input>
                    </div>
                    <div className='label-wrapper-nulrhek'>
                        <label className='InputForm-label-nulrhek' htmlFor='nulrhek' >Include Nulrheks?</label>
                        <input type='checkbox' name='nulrhek' value={this.state.sabacc} id='nulrhek' onChange={this.handleChange}></input>
                    </div>

                    <button>Run</button>
                </form>
            </div>
        );
    }
}

export default InputForm;