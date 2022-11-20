//get id from local storage
//get link from localstorage

import { asideSidebar } from "../components/content.js";
import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
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
} from "../components/utility.js";

window.openNav = openNav;
window.closeNav = closeNav;
window.searchBox = searchBox;
window.tabs = tabs;
window.searchClickHandler = searchClickHandler;
window.logout = logout;
window.append = append;
window.getData = getData;
window.socialShare = socialShare;

document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;
document.querySelector(".sidebar").innerHTML = asideSidebar;

// var sliderDaba = document.querySelector(".main-story-thumb-wrap");
// sliderDaba.innerHTML = mainStoryThumbWrap;

// getData("https://firstpost-masai-server.herokuapp.com/HEAD-NEWS").then(
//     (res) => {
//         for (var i = 1; i <= 3; i++) {
//             let x = Math.floor(Math.random() * 15 + 1);
//             document
//                 .getElementById(`div${i}bigThumbImg`)
//                 .setAttribute("src", `${res[x - 1].image}`);
//             // console.log(`div${i}bigThumbCategory`);
//             document.getElementById(`div${i}bigThumbCategory`).innerText =
//                 res[x - 1].cateogory;
//             // let path = res[x-1].cateogory
//             // let source = path.toLowerCase() +".html"

//             document
//                 .getElementById(`div${i}bigThumbCategory`)
//                 .setAttribute("href", `./${res[x - 1].cateogory.toLowerCase()}.html`);

//             // console.log(`div${i}bigThumbMainTitle`);
//             document.getElementById(`div${i}bigThumbMainTitle`).innerText =
//                 res[x - 1].title;
//         }
//     }
// );

function Wrap(src, maxLineLength) {
    return src.replace(
        new RegExp("(.{1," + maxLineLength + "})", "g"),
        "$1<br/><br/>\r\n"
    );
}

let viewpage = async() => {
    let cat = localStorage.getItem("category");
    let id = localStorage.getItem("id");
    let res1 = await fetch(
        `https://firstpost-masai-server.herokuapp.com/${cat}/${id}`
    );
    let res2 = await res1.json();
    document.getElementById("bigThumbCategory").innerText = res2.cateogory;
    document
        .getElementById("bigThumbCategory")
        .setAttribute("href", `./${res2.cateogory.toLowerCase()}.html`);
    document.getElementById("bigThumbMainTitle").innerText = res2.title;
    document.getElementById("bigThumbParagraph").innerText = res2.summary;
    document.getElementById("forauthor").innerText = res2.author;
    document.getElementById("fordate").innerText = res2.date;
    document.getElementById("bigThumbImg").src = res2.image;
    document.getElementById("foronframe").innerText = res2.onframe;
    document.getElementById("forbody").innerHTML = Wrap(res2.body, 300);
    document.getElementById("forupdateddate").innerText = res2.updateddate;
};
viewpage();