document.getElementById("mainStoryTitle").innerText = "Opinion";

getData("https://firstpost1.onrender.com/OPINION").then((res) => {
    append(res, document.querySelector(".main-content"));
});