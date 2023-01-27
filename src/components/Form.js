import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            className="down-border"
            onChange={ onInputChange }
            value={ cardName }
            type="text"
            data-testid="name-input"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            className="down-border"
            onChange={ onInputChange }
            value={ cardDescription }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="height">
          Altura
          <input
            type="number"
            onChange={ onInputChange }
            value={ cardAttr1 }
            data-testid="attr1-input"
            id="height"
          />
        </label>
        <label htmlFor="intelligence">
          Inteligência
          <input
            type="number"
            onChange={ onInputChange }
            value={ cardAttr2 }
            data-testid="attr2-input"
            id="intelligence"
          />
        </label>
        <label htmlFor="strength">
          Força
          <input
            type="number"
            onChange={ onInputChange }
            value={ cardAttr3 }
            data-testid="attr3-input"
            id="strength"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            onChange={ onInputChange }
            value={ cardImage }
            data-testid="image-input"
            id="image"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            onChange={ onInputChange }
            value={ cardRare }
            data-testid="rare-input"
            id="rarity"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input
            onChange={ onInputChange }
            checked={ cardTrunfo }
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
          />
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   cardTrunfo: PropTypes.bool.isRequired,
//   hasTrunfo: PropTypes.bool.isRequired,
//   isSaveButtonDisabled: PropTypes.bool.isRequired,
//   onInputChange: PropTypes.func.isRequired,
//   onSaveButtonClick: PropTypes.func.isRequired,
// };

export default Form;
