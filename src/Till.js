function Till() {
  this.linePrices = [];
  this.total = 0;
}


  Till.prototype.addToBill = function(item, quantity) {
    price = prices[item];
    linePrice = price * quantity;
    this.linePrices.push(linePrice);
    return linePrice;
  };

  Till.prototype.calculateTotal = function() {
    this.total = this.linePrices.reduce((x, y) => x + y);
    return this.total;
  };



hipstercoffee = [{
  "shopName": "The Coffee Connection",
  "address": "123 Lakeside Way",
  "phone": "16503600708",
}];

prices = {
  "Cafe Latte": 4.75,
  "Flat White": 4.75,
  "Cappucino": 3.85,
  "Single Espresso": 2.05,
  "Double Espresso": 3.75,
  "Americano": 3.75,
  "Cortado": 4.55,
  "Tea": 3.65,
  "Choc Mudcake": 6.40,
  "Choc Mousse": 8.20,
  "Affogato": 14.80,
  "Tiramisu": 11.40,
  "Blueberry Muffin": 4.05,
  "Chocolate Chip Muffin": 4.05,
  "Muffin Of The Day": 4.55
};
