import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";

import { closeNav, openNav, searchBox, tabs,searchClickHandler} from "../components/utility.js";

document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;

window.openNav = openNav;
window.closeNav = closeNav;
window.searchBox = searchBox;
window.tabs = tabs;
window.searchClickHandler = searchClickHandler;


