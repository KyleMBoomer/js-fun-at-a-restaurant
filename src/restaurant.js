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
if (!restaurant.menus[item.type].includes(item)) {
  restaurant.menus[item.type].push(item)
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