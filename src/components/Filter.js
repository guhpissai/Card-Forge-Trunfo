import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Filter extends Component {
  render() {
    const {
      onInputChange,
      cardFilterName,
      cardTrunfoFilter,
      cardRareFilter,
      cards,
    } = this.props;

    return (
      <>
        <Input
          type="text"
          onChange={ onInputChange }
          value={ cardFilterName }
          data-testid="name-filter"
          disabled={ cardTrunfoFilter }
          id="Nome da Carta"
          name="cardFilterName"
          label="false"
        />
        <label htmlFor="cardRareFilter">
          <select
            onChange={ onInputChange }
            value={ cardRareFilter }
            data-testid="rare-filter"
            id="cardRareFilter"
            disabled={ cardTrunfoFilter }
            name="cardRareFilter"
          >
            <option value="" disabled hidden>
              Raridade
            </option>
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Super Trunfo
          <input
            onChange={ onInputChange }
            checked={ cardTrunfoFilter }
            type="checkbox"
            data-testid="trunfo-filter"
            id="trunfoFilter"
            name="cardTrunfoFilter"
          />
        </label>
        <p className="deck-length">
          {cards.length}
          /8
        </p>
      </>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardFilterName: PropTypes.string.isRequired,
  cardTrunfoFilter: PropTypes.bool.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
  }).isRequired,
};
