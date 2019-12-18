import logo from './second.svg';

let stores = [
 {name: "Cambridge Naturals",     x: -71.1189, y: 42.3895},
 {name: "Sarah's Market",         x: -71.1311, y: 42.3823},
 {name: "Whole Foods Fresh Pond", x: -71.1420, y: 42.3904},
];
let here = {name: "You are here",  x: -71.1470, y: 42.3834};
let nearest = sortByDistance(here, stores)[0];
document.getElementById("nearest-store").innerHTML = nearest.name;