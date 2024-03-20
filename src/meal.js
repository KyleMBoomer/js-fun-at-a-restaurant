function nameMenuItem(food) {
return `Delicious ${food}`
}

function createMenuItem(name, price, title) {
  return {
    name: name,
    price: price, 
    type: title
  }
}

function addIngredients(foods, ingredients) {
  if (!ingredients.includes(foods))
return ingredients.push(foods)
}

function formatPrice(price) {
return `$${price}`
}

function decreasePrice(price) {
return (`${price}` * .9)
}

function createRecipe(title, ingredients, type) {
var recipe = {
  title: title, 
  ingredients: ingredients, 
  type: type
}
return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


