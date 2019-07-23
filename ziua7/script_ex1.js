var add = document.getElementById("add");
var deleteContent = document.getElementById("delete");
var img = document.getElementById("imagine");
var addImage = document.getElementById("addImage");

add.addEventListener("click", function(event) {
  if (document.getElementById("imagine") === null) {
    alert("image does not exist");
  } else {
    img.style.display = "block";
    // console.log(parinte.type);
  }
});

img.addEventListener("click", function() {
  img.style.display = "none";
  parinte.dispatchEvent(myEvent);
});
deleteContent.addEventListener("click", function() {
  img.remove();
});
addImage.addEventListener("click", function() {
  this.style.backgroundColor = "green";
  img.style.display = "block";
});
// window.addEventListener("click", function(event) {
document.querySelector("body").addEventListener("click", function() {
  alert("something was clicked");
  console.log(event.target);
  console.log(event.currentTarget);
});
var myEvent = new Event("Parinte");
var parinte = document.getElementById("parent");
parinte.addEventListener("Parinte", function() {
  console.log("eu sunt parintele");
});
