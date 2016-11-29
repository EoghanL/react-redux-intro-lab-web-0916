import React from 'react'


class NewInventoryItem extends React.Component {
  constructor(props){
    super(props)
    this.itemAddClick = this.itemAddClick.bind(this)
  }
  itemAddClick(event){
    event.preventDefault();
    debugger
    this.props.onItemAdd(event.target.form.children[0].value, event.target.form.children[1].value)
  }
  render(){
    return (
      <form>
        <label>Quantity</label>
        <input type='text' placeholder='Enter Food Quantity Here'/>
        <label>Type</label>
        <input type='text' placeholder='Enter Food Description Here'/>
        <input type='submit' onClick={this.itemAddClick} />
      </form>
    )
  }
}
export default NewInventoryItem
