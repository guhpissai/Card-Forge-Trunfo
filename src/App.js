import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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
    cards: [],
    buttonDisabled: true,
  };

  hasTrunfo = () => {
    const { cards } = this.state;
    return cards.find((card) => card.cardTrunfo === true);
  };

  onSaveButtonClick = () => {
    this.setState((state) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        cards,
      } = state;
      const card = {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      };
      return {
        cards: [...cards, card],
        cardDescription: '',
        cardName: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
        hasTrunfo: !!this.hasTrunfo,
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
          <h1>Tryunfo</h1>
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
            <ul className="saved-card">
              {cards.map((card) => (
                <li key={ card.cardName }>
                  <Card { ...card } />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
