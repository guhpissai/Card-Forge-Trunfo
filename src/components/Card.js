import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';

class Card extends React.Component {
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
    } = this.props;

    const raridade = cardRare.replace(' ', '-');

    return (
      <section className={ `${styles.cardContainer}` }>
        <div className={ `${styles.card}  ${styles[raridade]} ` }>
          <img src={ cardImage } alt={ cardImage } data-testid="image-card" />
          <p data-testid="name-card">{cardName}</p>
          <p data-testid="description-card">{cardDescription}</p>
          <p data-testid="attr1-card">
            Altura:
            {' '}
            {cardAttr1}
          </p>
          <p data-testid="attr2-card">
            Inteligencia:
            {' '}
            {cardAttr2}
          </p>
          <p data-testid="attr3-card">
            Força:
            {' '}
            {cardAttr3}
          </p>
          <p data-testid="rare-card">{cardRare}</p>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
};

export default Card;
