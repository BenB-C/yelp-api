export class LocationService {
  getLatitudeLongitude(location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://www.mapquestapi.com/geocoding/v1/address?key=kdaa5yALWN9eSda3QhKLDOpAEm8ABs6U&location=${location}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
