// const axios = require('axios');

$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});

function toggleForm() {
  var x = document.getElementById("add_restaurant");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function deleteRestaurant(id){

  console.log(id);
 

}
