import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInventoryListItems } from './actions/inventoryItemsActions';
import { addInventoryListItem } from './actions/inventoryItemsActions';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem';

 class App extends Component {
  constructor(props){
    super(props)
  }

  addItem(quant, desc){
    this.props.addInventoryItem(quant, desc)
  }

  componentWillMount(){
    debugger
    this.props.getInventory()
  }

  render(){

    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.items} />
          <NewInventoryItem onItemAdd={this.addItem.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getInventory: getInventoryListItems, addInventoryItem: addInventoryListItem}, dispatch)
}
//
function mapStateToProps(state) {
  return {items: state.items}
}
//


export default connect(mapStateToProps, mapDispatchToProps)(App)
