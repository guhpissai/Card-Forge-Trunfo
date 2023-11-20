import React from 'react';
import PropTypes from 'prop-types';
import styles from './MinCard.module.css';

class MinCard extends React.Component {
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
      handleRemoveCard,
      id,
    } = this.props;

    const raridade = cardRare.replace(' ', '-');

    return (
      <section className={ `${styles.cardContainer}` }>
        <div
          className={ `${styles.card}  ${
            cardRare ? styles[raridade] : styles.normal
          } ` }
        >
          <img src={ cardImage } alt={ cardImage } data-testid="image-card" />
          <div className={ styles.cardDown }>
            <div className={ styles.cardHeader }>
              <p data-testid="name-card" className={ styles.name }>
                {cardName}
              </p>
              <p data-testid="description-card" className={ styles.description }>
                {cardDescription}
              </p>
            </div>
            <div className={ styles.attr }>
              <p data-testid="attr1-card">
                Altura:
                {' '}
                {cardAttr1}
              </p>
              <p data-testid="attr2-card">
                Inteligência:
                {' '}
                {cardAttr2}
              </p>
              <p data-testid="attr3-card">
                Força:
                {' '}
                {cardAttr3}
              </p>
              <p data-testid="rare-card">{cardRare}</p>
              {cardTrunfo && (
                <p data-testid="trunfo-card" className={ styles.trunfo }>
                  Super Trunfo
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          data-testid="delete-button"
          onClick={ () => handleRemoveCard(id) }
        >
          Remove
        </button>
      </section>
    );
  }
}

MinCard.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
};

export default MinCard;
