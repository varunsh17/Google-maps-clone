
mapboxgl.accessToken =
    "pk.eyJ1IjoidmFydW5zaDE3IiwiYSI6ImNrc2Fvd20xYjFobTEydW9jOXJoZWI0NjIifQ.mICrgxyasmwG-Ncm_3WGpg";

navigator.geolocation.getCurrentPosition(successLocation, error, {
    enableHighAccuracy: true,
})
function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function error() {
    setupMap([139.6455, 35.8616])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    var direction = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(direction, 'top-left');

}





