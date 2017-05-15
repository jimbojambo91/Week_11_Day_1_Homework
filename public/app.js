var catsArray = [
  {name: "Boba", favouriteFood: "Sock Fluff", img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", favouriteFood: "Tuna", img: "http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg"},
  {name: "Max", favouriteFood: "Whiskas Temptations", img: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "James", favouriteFood: "Fish", img: "http://www.toonarific.com/pics_root//00001825/jamescatlogo.jpg"}
];

var createCatHolder = function(){
  catHolder = document.createElement("ul");
  catHolder.classList.add("cat");
  return catHolder;
};

var createCatName = function(name){
  nameHolder = document.createElement("li");
  nameHolder.innerText = "Name: " + name;
  return nameHolder;
};

var createFavouriteFood = function(food){
  foodHolder = document.createElement("li");
  foodHolder.innerText = "Favourite Food: " + food;
  return foodHolder;
};

var createImageHolder = function(){
  imageHolder = document.createElement("li");
  return imageHolder;
};

var createImage = function(url){
  image = document.createElement("img");
  image.setAttribute("src", url);
  image.setAttribute("width", "500");
  return image;
};

var appendElements = function(cats,catHolder, nameHolder, foodHolder, imageHolder, image){
  imageHolder.appendChild(image);
  catHolder.appendChild(nameHolder);
  catHolder.appendChild(foodHolder);
  catHolder.appendChild(imageHolder);
  cats.appendChild(catHolder);
};

var addCat = function(name, food, url) {
  var catHolder = createCatHolder();
  var nameHolder = createCatName(name);
  var foodHolder = createFavouriteFood(food);
  var imageHolder = createImageHolder();
  var image = createImage(url);
  var cats = document.getElementById("cats")

  appendElements(cats, catHolder, nameHolder, foodHolder, imageHolder, image);
};

var addCats = function(array){
  for(cat of array){
    addCat(cat.name, cat.favouriteFood, cat.img );
  }
};

var app = function() {
  addCats(catsArray);
};

window.onload = app;