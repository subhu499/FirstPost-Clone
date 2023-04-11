document.getElementById("mainStoryTitle").innerText = "Sports";

getData("https://firstpost1.onrender.com/SPORTS").then((res) => {
    append(res, document.querySelector(".main-content"));
});