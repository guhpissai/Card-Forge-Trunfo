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
    buttonDisabled: true,
    cardRareFilter: 'Raridade',
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
      () => {
        this.hasTrunfo();
      },
    );
  };

  handleRemoveCard = (cardId) => {
    this.setState(
      (prevState) => {
        const updatedCards = prevState.cards.filter(
          (card) => card.id !== cardId,
        );
        return {
          ...prevState,
          cards: updatedCards,
        };
      },
      () => {
        this.hasTrunfo();
      },
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
      const isAttr1Valid = !(cardAttr1 > maxValue || cardAttr1 < minValue);
      const isAttr2Valid = !(cardAttr2 > maxValue || cardAttr2 < minValue);
      const isAttr3Valid = !(cardAttr3 > maxValue || cardAttr3 < minValue);
      const sumAttr = parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10);
      const sumValid = sumAttr > maxSum;
      const isAttrSumValid = !sumValid;
      return {
        buttonDisabled: !(
          isNameValid
          && isImageValid
          && isDescriptionValid
          && isAttr1Valid
          && isAttr2Valid
          && isAttr3Valid
          && isAttrSumValid
        ),
      };
    });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    this.setState(
      {
        [name]: type === 'checkbox' ? target.checked : target.value,
      },
      this.isSaveButtonDisabled,
    );
  };

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
                    data-testid="rare-input"
                    id="rarityFilter"
                    name="cardRareFilter"
                  >
                    <option value="" disabled selected hidden>
                      Raridade
                    </option>
                    <option>normal</option>
                    <option>raro</option>
                    <option>muito raro</option>
                  </select>
                </label>
                <Input />
                <label htmlFor="trunfo">
                  Super Trunfo
                  <input
                    onChange={ this.onInputChange }
                    checked={ this.cardTrunfoFilter }
                    type="checkbox"
                    data-testid="trunfo-input"
                    id="trunfoFilter"
                    name="cardTrunfoFilter"
                  />
                </label>
                <p className="deck-length">
                  {cards.length}
                  /8
                </p>
              </div>
              <ul className="deck">
                {cards.map((card) => (
                  <li key={ card.id } className="card">
                    <MinCard
                      { ...card }
                      handleRemoveCard={ this.handleRemoveCard }
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
