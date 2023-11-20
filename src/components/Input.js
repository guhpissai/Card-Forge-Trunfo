import React, { Component } from 'react';
import styles from './input.module.css';

export default class Input extends Component {
  render() {
    const { ...props } = this.props;

    return (
      <div
        className={ `${styles.input} ${props.atr && styles.atr} ${
          props.filter && styles.filter
        }` }
      >
        <label htmlFor={ props.id }>{!props.label && props.id}</label>
        <input
          { ...props }
          label={ props.cardName }
          placeholder={ props.label && props.id }
        />
      </div>
    );
  }
}
