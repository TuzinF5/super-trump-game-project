import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {}

  render() {
    const valueState = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={valueState.cardName}
          cardDescription={valueState.cardDescription}
          cardAttr1={ valueState.cardAttr1 }
          cardAttr2={ valueState.cardAttr2 }
          cardAttr3={ valueState.cardAttr3 }
          cardTrunfo={ valueState.cardTrunfo }
          onInputChange={this.onInputChange}
        />
        <Card
          cardName={valueState.cardName}
          cardDescription={valueState.cardDescription}
          cardAttr1={ valueState.cardAttr1 }
          cardAttr2={ valueState.cardAttr2 }
          cardAttr3={ valueState.cardAttr3 }
          cardTrunfo={ valueState.cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
