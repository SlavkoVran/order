import React, { Component } from 'react';
import styles from './quantityPicker.module.scss'

export default class QuantityPicker extends Component {

  constructor(props) {
    super(props);

    this.state = { value: this.props.min, disableDec: true, disableInc: false }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const plusState = this.state.value + 1;
    if (this.state.value < this.props.max) {
      this.setState({ value: plusState });
      this.setState({ disable: false });
    }
    if (this.state.value == (this.props.max - 1)) {
      this.setState({ disableInc: true });
    }
    if (this.state.value == this.props.min) {
      this.setState({ disableDec: false });
    }
  }

  decrement() {
    const minusState = this.state.value - 1;
    if (this.state.value > this.props.min) {
      this.setState({ value: minusState });
      if (this.state.value == this.props.min + 1) {
        this.setState({ disableDec: true });
      }
    } else {
      this.setState({ value: this.props.min });
    }
    if (this.state.value == this.props.max) {
      this.setState({ disableInc: false });
    }
  }

  render() {
    const { disableDec, disableInc } = this.state;

    return (
      <div className={styles.quantityPickerContainer}>
        <button className={styles.decrementBtn} onClick={this.decrement}>
          <img src="./storage/arrowD.png" alt=" arrow down" />
        </button>
        <input className={styles.input} type="text" value={this.state.value} readOnly />
        <button className={styles.incrementBtn} onClick={this.increment}>
          <img src="./storage/arrowU.png" alt=" arrow up" />
        </button>
      </div>
    );
  }
}