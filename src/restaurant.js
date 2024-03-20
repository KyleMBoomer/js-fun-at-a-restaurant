function createRestaurant(name) {
return {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
    }
  }
}

function addMenuItem(restaurant, item) {
    if (item.type === 'lunch') {
      var exists = restaurant.menus.lunch.some(existingItem => existingItem.name === item.name)
      if(!exists) {
         restaurant.menus.lunch.push(item)
      }
  } else if (item.type === 'breakfast') {
    var exists = restaurant.menus.breakfast.some(existingItem => existingItem.name === item.name)
    if (!exists) {
    restaurant.menus.breakfast.push(item)
    }
  } else if (item.type === 'dinner') {
    var exists = restaurant.menus.dinner.some(existingItem => existingItem.name === item.name)
    if (!exists) {
    restaurant.menus.dinner.push(item)
    }
  }
}
function removeMenuItem(restaurant, item, type) {
if (!restaurant.menus[type].length) {
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
} else {
  restaurant.menus[type].shift(item)
   return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  } 
}

function checkForFood(restaurant, item) {
if (restaurant.menus.breakfast.length) {
  return `Yes, we're serving ${item.name} today!`
} else {
  return `Sorry, we aren't serving ${item.name} today.`
}

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}