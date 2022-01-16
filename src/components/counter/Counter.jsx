import "./Counter.css";
import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: this.props.initialNumber,
        amount: this.props.amount || 5
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.amount,
        });
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.amount,
        });
    }

    setAmount = (event) => {
        this.setState({
            amount: +event.target.value,
        });
    }

    render() {
        return (
            <div className="Counter">
                <h2>Contador</h2>
                <h3>Valor Inicial: {this.state.number}</h3>
                <div>
                    <label htmlFor="amoutInput">Amount: </label>
                    <input id="amountInput" type="number" value={this.state.amount} onChange={this.setAmount}/>
                </div>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </div>
        );
    }
}

export default Counter