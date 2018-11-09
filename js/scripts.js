//Business logic

function Pizza(size,toppings){
  this.size = size;
  this.meat = meat;
  this.cheese = cheese;
  this.toppings = toppings;
  this.sauce = sauce;
  this.cost = 0;
}

//Pizza size pricing
Pizza.prototype.calculatePrice = function() {
console.log('everything: ', {meat: this.meat, cheese: this.cheese, toppings: this.toppings, sauce: this.sauce});
console.log('before: ', {cost: this.cost});
  if (this.size === "small") {
    this.cost = this.cost + 6;
  }
  else if (this.size === "medium") {
    this.cost = this.cost + 8;
  }
  else if (this.size === "large") {
    this.cost = this.cost + 10;
  }
  else if (this.size === "extra-large") {
    this.cost = this.cost + 12;
  }

  /*console.log('after size: ', {cost: this.cost});*/
//meats
for (var i = 0; i < this.meat.length; i++){
  this.cost += 2;
}
console.log('after meat: ', {cost: this.cost});
//Cheese
  for (var i = 0; i < this.cheese.length; i++){
  this.cost += 1;
  }
console.log('after cheese: ', {cost: this.cost});
//toppings
  for (var i = 0; i < this.toppings.length; i++){
  this.cost += 1;
  }
  /*console.log('after toppings: ', {cost: this.cost});*/
  //Sauce
  for (var i = 0; i < this.sauce.length; i++){
  this.cost += 0.10;
  }
console.log('after sauce: ', {cost: this.cost});

};

  /*if (this.toppings === "thin" || this.toppings === "regular" || this.toppings === "thick"){
    pizzaPrice += 0.10;
  } else {
     pizzaPrice += 0.15;
  }
  if (this.meat === "chicken" || this.meat === "bacon" || this.meat === "pepperoni" || this.meat === "salmon" || this.meat === "steak" ) {
    pizzaPrice += 2.00;
  }
  if (this.cheese === "mozarella-cheese" || this.cheese === "harvati-cheese" || this.cheese === "provolone-cheese" || this.cheese === "american-cheese" || this.cheese === "pepperJack-cheese" ) {
    pizzaPrice += 1.50;
  }
  if (this.toppings === "tomato" || this.toppings === "bell peppers" || this.toppings === "onions" || this.toppings === "black olives" || this.toppings === "broccoli") {
    pizzaPrice += 0.50;
  }
  if (this.fruit === "pineapple") {
    pizzaPrice += 0.50;
  }
var totalCostCalculator = 'size' + 'toppings' + 'meat' + 'cheese' + 'fruit' + 'sauce';*/

//User-Interface Logic
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    //form cheese,meat,topping and suace inputs
    var size = $("input:radio[name='size']:checked").val();

    var meat = [];
    $.each($("input[name='meat']:checked"), function(){
        meat.push($(this.cost).val());
    });
    var cheese = [];
    $.each($("input[name='cheese']:checked"), function(){
        cheese.push($(this.cost).val());
    });
    var toppings = [];
    $.each($("input[name='toppings']:checked"), function(){
        toppings.push($(this.cost).val());
    });
    var sauce = [];
    $.each($("input[name='sauce']:checked"), function(){
        sauce.push($(this.cost).val());
    });
    var extraPizza = new Pizza(size,meat,cheese,toppings,sauce);
    //calculate price
    extraPizza.calculatePrice();
    $("#show-cost").append(extraPizza.cost);
    document.getElementById("pizza-form").reset();

    $("#final-cost").show();

    document.getElementById("pizza-form").reset();




  });
});


/*$(document).ready(function() {
  $("#pizza-form").submit(function(event) {

  });
});



    /*$('.form-group').click(function(Toppings){
     $("#size").print();
     $("#toppings").print();
     $("#meat").print();
     $("#cheese").print();
     $("#toppings").print();
     $("#fruit").print();
     $("#sauce").print();
     */

  /*  newPizza.costCalculator();*/
