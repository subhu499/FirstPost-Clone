document.getElementById("mainStoryTitle").innerText = "Tech";

getData("https://firstpost1.onrender.com/api/TECH").then((res) => {
    append(res, document.querySelector(".main-content"));
});