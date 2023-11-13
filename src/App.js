import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import MinCard from './components/MinCard';
import Input from './components/Input';

class App extends React.Component {
  state = {
    hasTrunfo: false,
    cardTrunfo: false,
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    nextCardId: 1,
    cards: [],
    filteredCards: [],
    buttonDisabled: true,
    cardRareFilter: '',
    cardFilterName: '',
    cardTrunfoFilter: false,
  };

  hasTrunfo = () => {
    const { cards } = this.state;
    const hasTrunfo = cards.some((card) => card.cardTrunfo === true);
    this.setState({ hasTrunfo });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      nextCardId,
    } = this.state;

    const newCard = {
      id: nextCardId,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(
      (prevState) => ({
        cards: [...prevState.cards, newCard],
        nextCardId: prevState.nextCardId + 1,
        cardDescription: '',
        cardName: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: '',
        buttonDisabled: true,
      }),
      this.hasTrunfo,
    );
  };

  handleRemoveCard = (cardId) => {
    this.setState(
      (prevState) => ({
        cards: prevState.cards.filter((card) => card.id !== cardId),
      }),
      this.hasTrunfo,
    );
  };

  isSaveButtonDisabled = () => {
    this.setState((state) => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = state;
      const isNameValid = cardName.length !== 0;
      const isImageValid = cardImage.length !== 0;
      const isDescriptionValid = cardDescription.length !== 0;
      const maxValue = 90;
      const minValue = 0;
      const maxSum = 210;
      const isAttrValid = (attr) => !(attr > maxValue || attr < minValue);
      const sumAttr = parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10);
      const isAttrSumValid = sumAttr <= maxSum;

      return {
        buttonDisabled: !(
          isNameValid
          && isImageValid
          && isDescriptionValid
          && isAttrValid(cardAttr1)
          && isAttrValid(cardAttr2)
          && isAttrValid(cardAttr3)
          && isAttrSumValid
        ),
      };
    });
  };

  filterCards = () => {
    const { cards, cardFilterName, cardRareFilter } = this.state;
    const filteredCards = cards.filter(
      (card) => card.cardName.toLowerCase().includes(cardFilterName.toLowerCase())
        && (!cardRareFilter || card.cardRare === cardRareFilter),
    );
    this.setState({ filteredCards });
  };

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;

    this.setState({ [name]: type === 'checkbox' ? checked : value }, () => {
      this.isSaveButtonDisabled();
      this.filterCards();
    });
  };

  renderCard = (card) => (
    <li key={ card.id } className="card">
      <MinCard { ...card } handleRemoveCard={ this.handleRemoveCard } />
    </li>
  );

  render() {
    const {
      cardTrunfo,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      buttonDisabled,
      hasTrunfo,
      cards,
      filteredCards,
      cardFilterName,
      cardRareFilter,
    } = this.state;

    return (
      <div>
        <header>
          <h1>CardForge</h1>
        </header>
        <div className="container">
          <main>
            <Form
              onInputChange={ this.onInputChange }
              { ...this.state }
              isSaveButtonDisabled={ buttonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
            />
            <Card
              cardTrunfo={ cardTrunfo }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
            />
          </main>
          {this.onSaveButtonClick && (
            <div className="deck-container">
              <div className="filter-container">
                <Input
                  type="text"
                  onChange={ this.onInputChange }
                  value={ this.cardFilterName }
                  data-testid="name-filter"
                  id="Nome da Carta"
                  name="cardFilterName"
                  label="false"
                />
                <label htmlFor="cardRareFilter">
                  <select
                    onChange={ this.onInputChange }
                    value={ this.cardRareFilter }
                    data-testid="trunfo-filter"
                    id="cardRareFilter"
                    name="cardRareFilter"
                  >
                    <option value="" disabled hidden>
                      Raridade
                    </option>
                    <option>normal</option>
                    <option>raro</option>
                    <option>muito raro</option>
                  </select>
                </label>
                {/* <label htmlFor="trunfo">
                  Super Trunfo
                  <input
                    onChange={ this.onInputChange }
                    checked={ this.cardTrunfoFilter }
                    type="checkbox"
                    data-testid="trunfo-input"
                    id="trunfoFilter"
                    name="cardTrunfoFilter"
                  />
                </label> */}
                <p className="deck-length">
                  {cards.length}
                  /8
                </p>
              </div>
              <ul className="deck">
                {cardFilterName || cardRareFilter
                  ? filteredCards.map((card) => this.renderCard(card))
                  : cards.map((card) => this.renderCard(card))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
