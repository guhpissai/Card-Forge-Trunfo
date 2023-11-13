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
        <div
          className={ `${styles.card}  ${
            cardRare ? styles[raridade] : styles.normal
          } ` }
        >
          {cardImage ? (
            <img src={ cardImage } alt={ cardImage } data-testid="image-card" />
          ) : (
            <div className={ styles.emptyImage } />
          )}
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
          </div>
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
