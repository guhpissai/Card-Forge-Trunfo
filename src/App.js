import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardTrunfo: false,
    cardName: '',
    // cardDescription: '',
    // cardAttr1: '',
    // cardAttr2: '',
    // cardAttr3: '',
    // cardImage: '',
    // cardRare: '',
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      cardTrunfo: value,
      cardName: value,
      // cardDescription: value,
      // cardAttr1: value,
      // cardAttr2: value,
      // cardAttr3: value,
      // cardImage: value,
      // cardRare: value,
    });
  };

  render() {
    const { cardTrunfo, cardName } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.onInputChange } />
        <Card cardTrunfo={ cardTrunfo } cardName={ cardName } />
      </div>
    );
  }
}

export default App;
