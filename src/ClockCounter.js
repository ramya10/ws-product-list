import React, { Component } from 'react';
import './ClockCounter.css';

export default class ClockCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 60,
            running: false,
        }
    }

    componentDidUpdate(prevState) {
        if (this.state.running !== prevState.running) {
            if (this.state.running) {
                this.handleStart();
            }
        }
    }

    format = (time) => {
        debugger
        console.log('time', time)
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
    }

    handleStart = () => {
        this.timer = setTimeout(() => {
            const newCount = this.state.count - 1;
            this.setState(
                { count: newCount >= 0 ? newCount : 60 }
            );
        }, 1000);
    }


    handleCountdown = (seconds) => {
        this.setState({
            count: seconds,
            running: true
        })
    }

    startTimer = () => {
        this.handleCountdown(this.state.count)
    }
    stopTimer = () => {
        this.setState({
            running: false
        })
    }

    resetTimer = () => {
        this.setState({
            count: 60,
            running: false
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div className="counter">
                <div className="timer">
                    <h1>{this.format(count)}</h1>
                </div>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
        )
    }
}
