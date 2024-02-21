//https://www.facebook.com/marketplace/la/search?query=miata&radius=805&deliveryMethod=local_pick_up
const baseURL = "https://www.facebook.com/marketplace/<<CITY>>/search/?query=<<SEARCH>>";
const cities = [
  "113093802034968",  //Pacific Northwest
  "107524245944156",  //Mid-Atlantic
  "109546952404225",  //Southwest
  "108018822553353",  //Midwest
  "106084172755635",  //Rocky Mountains
  "113541638659587",  //Southeast
  "105701396129318",  //The South
  "105590109474550"   //Texas
];
const search = document.getElementById('search');
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
  event.preventDefault();

  for(let city of cities) {
    window.open(baseURL.replace("<<CITY>>", city).replace("<<SEARCH>>", search.value));
  }
});