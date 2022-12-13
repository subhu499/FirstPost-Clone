document.getElementById("mainStoryTitle").innerText = "World";

getData("https://firstpost1.onrender.com/api/WORLD").then((res) => {
    append(res, document.querySelector(".main-content"));
});