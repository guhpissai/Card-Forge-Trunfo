import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import styles from './form.module.css';

class Form extends React.Component {
  render() {
    const {
      onInputChange,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onSaveButtonClick,
      isSaveButtonDisabled,
    } = this.props;

    return (
      <section className={ styles.containerForm }>
        <form className={ styles.form }>
          <Input
            onChange={ onInputChange }
            value={ cardName }
            type="text"
            data-testid="name-input"
            id="Nome"
            name="cardName"
          />
          <div className={ styles.description }>
            <label htmlFor="description">
              Descrição
              <textarea
                className="down-border"
                onChange={ onInputChange }
                value={ cardDescription }
                data-testid="description-input"
                name="cardDescription"
              />
            </label>
          </div>
          <Input
            type="number"
            onChange={ onInputChange }
            value={ cardAttr1 }
            data-testid="attr1-input"
            id="Altura"
            name="cardAttr1"
            atr
          />
          <Input
            type="number"
            onChange={ onInputChange }
            value={ cardAttr2 }
            data-testid="attr2-input"
            id="Inteligencia"
            name="cardAttr2"
            atr
          />
          <Input
            type="number"
            onChange={ onInputChange }
            value={ cardAttr3 }
            data-testid="attr3-input"
            id="Força"
            name="cardAttr3"
            atr
          />
          <label htmlFor="rarity">
            Raridade
            <select
              onChange={ onInputChange }
              value={ cardRare }
              data-testid="rare-input"
              id="rarity"
              name="cardRare"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          {hasTrunfo === true ? (
            <p className={ styles.info }>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                onChange={ onInputChange }
                checked={ cardTrunfo }
                type="checkbox"
                data-testid="trunfo-input"
                id="trunfo"
                name="cardTrunfo"
              />
            </label>
          )}
          <Input
            type="text"
            onChange={ onInputChange }
            value={ cardImage }
            data-testid="image-input"
            id="image"
            name="cardImage"
          />
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
