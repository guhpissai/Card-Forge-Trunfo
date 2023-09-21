import React, { Component } from 'react';
import styles from './input.module.css';

export default class Input extends Component {
  render() {
    const { ...props } = this.props;
    console.log(props);

    return (
      <div className={ styles.input }>
        <label htmlFor={ props.id }>{props.id}</label>
        <input { ...props } label={ props.cardName } />
      </div>
    );
  }
}
