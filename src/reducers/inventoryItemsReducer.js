const items = [
{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}
]

export default function inventoryItemsReducer(state = [], action){
  switch (action.type) {
    case "GET_INVENTORY_LIST_ITEMS":
      return action.payload
    case "ADD_INVENTORY_LIST_ITEM":
      return [...state, action.payload]
    default:
      return state;
  }
}
