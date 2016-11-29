export default function addInventoryListItem(quant, desc) {
  const obj = { quantity: quant, description: desc }
  return { type: 'ADD_INVENTORY_LIST_ITEM', payload: obj }
}
