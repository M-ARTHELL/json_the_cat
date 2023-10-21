const request = require('request');

let breedType = process.argv[2];
let apiUrl = " https://api.thecatapi.com/v1/breeds/search?q=";

request(apiUrl + breedType, (error, response, body) => {
  if (error) {
    return console.log(error);
  } else {
    const data = JSON.parse(body);

    if (data.length === 0) {
      return console.log('Breed not found');
    } else if (error) {
      console.log(error);
    } else {
      console.log(data[0].description);
    }
  
  }

});