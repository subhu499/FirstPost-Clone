document.getElementById("mainStoryTitle").innerText = "World";

getData("https://firstpost1.onrender.com/WORLD").then((res) => {
    append(res, document.querySelector(".main-content"));
});