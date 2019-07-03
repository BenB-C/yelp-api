import { LocationService } from './location-service.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#submit').click(function() {
    let location = $('#location').val();

    let locationService = new LocationService();  // create instance of class
    let promise = locationService.getLatitudeLongitude(location);  // call the instance method and pass in user input

    promise.then(function(response) {
      const body = JSON.parse(response);
      let latitude = body.results[0].locations[0].latLng.lat;
      let longitude = body.results[0].locations[0].latLng.lng;
      $('.output').text(latitude + ", " + longitude);
    }, function(error) {
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
