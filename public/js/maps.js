console.log("JS loaded");

function initMap() {
    //declare some dummy information
    let mapDOM = document.querySelector("#map");
    let mapeDefaultCenter = {lat: 32.714627, lng:-117.164643};
    let mapDefaultSettings = {
        zoom: 16,
        center: mapeDefaultCenter,
    };
    //Create a map constructor
    let map = new google.maps.Map(mapDOM, mapDefaultSettings);

    //Create a marker constructor
    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: {lat: 32.713615, lng: -117.166535},
      });
      marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

