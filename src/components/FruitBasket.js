import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

  return (
    <div className="fruit-basket">
      <Filter
        handleChange={props.updateFilterCallback}
        filters={props.filters} />
      <FilteredFruitList
        filter={props.currentFilter}
        fruit={props.fruit}/>
    </div>
  );
}

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  updateFilterCallback: ()=>{},
  currentFilter: "all"
}

export default FruitBasket;
