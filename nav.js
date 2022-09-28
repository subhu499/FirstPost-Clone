function toggleSidebar(hamburger) {
    var sidebarElem = window.document.getElementById("sidebar");
    var mainElem = window.document.getElementsByClassName("main")[0];
    sidebarElem.classList.toggle("open");
    mainElem.classList.toggle("open");
    hamburger.classList.toggle("open")
}

// var prevSelection;

// function SidebarSelection(item) {
//     if(prevSelection) {
//         if(prevSelection === item) {
//             item.classList.toggle("selected");
//             prevSelection = undefined;
//         } else {
//             prevSelection.classList.toggle("selected");
//             item.classList.toggle("selected");
//             prevSelection = item;
//         }
//     } else {
//         item.classList.toggle("selected");
//         prevSelection = item;
//     }
// }