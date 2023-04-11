document.getElementById("mainStoryTitle").innerText = "Tech";

getData("https://firstpost1.onrender.com/TECH").then((res) => {
    append(res, document.querySelector(".main-content"));
});