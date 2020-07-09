import GoogleMaps from "./GoogleMaps";
import User from "./models/User";
import Company from "./models/Company";

const user = new User();
const company = new Company();
const map = new GoogleMaps('map');
map.addMarker(user);
map.addMarker(company);
