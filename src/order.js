function takeOrder(order, array) {
  if (array.length < 3) {
  return array.push(order)
  }
}

function refundOrder(number, array) {
  for (var i = 0; i < array.length; i++) {
    if (number === array[i].orderNumber) {
      array.splice(i,1)
    }
  }
  return array
}

function listItems(array) {
  var list = [] 
  for (var i = 0; i < array.length; i++) {
    list.push(array[i].item)
  } 
return list.join(', ')
}

function searchOrder(array, item) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i].item)
      if (array[i].item === item){
        return true      
        }
      }
      return false
    }
  


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}