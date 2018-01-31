import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }))
      .then(this.fetchFilters)
  }

  updateFilterCallback = (e) => {
    this.setState({
      currentFilter: e.target.value
    })
  }


  render() {
    return (<FruitBasket
      fruit={ this.state.fruit }
      updateFilterCallback={ this.updateFilterCallback }
      currentFilter={ this.state.currentFilter }
      filters={this.state.filters}
    />)
  }
}

export default App;
