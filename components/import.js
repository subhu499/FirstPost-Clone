import { bigThumb, asideSidebar, mainStoryThumbWrap } from "./content.js";
import { footer } from "./footer.js";
import { navbar } from "./navbar.js";
import {
    closeNav,
    openNav,
    searchBox,
    tabs,
    searchClickHandler,
    logout,
    append,
    getData,
    socialShare,
    View,
} from "./utility.js";

window.openNav = openNav;
window.closeNav = closeNav;
window.searchBox = searchBox;
window.tabs = tabs;
window.searchClickHandler = searchClickHandler;
window.logout = logout;
window.append = append;
window.getData = getData;
window.socialShare = socialShare;
window.View = View;
document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;

var sliderDaba = document.querySelector(".main-story-thumb-wrap");
sliderDaba.innerHTML = mainStoryThumbWrap;

document.querySelector(".sidebar").innerHTML = asideSidebar;

getData("https://firstpost-masai-server.herokuapp.com/HEAD-NEWS").then(
    (res) => {
        for (var i = 1; i <= 3; i++) {
            let x = Math.floor(Math.random() * 15 + 1);
            document
                .getElementById(`div${i}bigThumbImg`)
                .setAttribute("src", `${res[x - 1].image}`);
            document
                .getElementById(`div${i}bigThumbImg`)
                .parentElement.setAttribute(
                    "href",
                    `javascript:View(${res[x - 1].id},'HEAD-NEWS')`
                );
            // console.log(`div${i}bigThumbCategory`);
            document.getElementById(`div${i}bigThumbCategory`).innerText =
                res[x - 1].cateogory;
            // let path = res[x-1].cateogory
            // let source = path.toLowerCase() +".html"

            document
                .getElementById(`div${i}bigThumbCategory`)
                .setAttribute("href", `./${res[x - 1].cateogory.toLowerCase()}.html`);

            // console.log(`div${i}bigThumbMainTitle`);
            document.getElementById(`div${i}bigThumbMainTitle`).innerText =
                res[x - 1].title;
        }
    }
);