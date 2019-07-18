// Police API

var xhr = new XMLHttpRequest();
var lat = 52.629729;
var lng = -1.131592;
var date = "2017-06";
var URL = `https://data.police.uk/api/crimes-at-location?date=${date}&lat=${lat}&lng=${lng}`;

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var policeObj = JSON.parse(xhr.responseText);
    console.log(policeObj);
  }
};
xhr.open("GET", URL, true);
xhr.send();

// let search = document.querySelector("#searchbutton");
// search.addEventListener("click", query);

// function query() {

// let xhr = new XMLHttpRequest();
//     let url = "https://data.police.uk/api/crimes-street/all-crime?poly=52.268,0.543:52.794,0.238:52.130,0.478";

//     xhr.onreadystatechange = function() {
//      if(xhr.readyState == 4 && xhr.status == 200) {
//          let response = JSON.parse(xhr.responseText);
//          let numCrimes = response.length;
//          alert(numCrimes);
//      }
//  };
//  xhr.open("GET", url, true);
//  xhr.send();
// }

let search = document.querySelector("#searchbutton");
search.addEventListener("click", query);

function query() {
  let xhr = new XMLHttpRequest();
  let postcode = document.querySelector("#searchfield").value;
  let urlLocation = `https://api.postcodes.io/postcodes/${postcode}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let lat = response.result.latitude;
      let long = response.result.longitude;
    }
  };
  xhr.open("GET", urlLocation, true);
  xhr.send();
}