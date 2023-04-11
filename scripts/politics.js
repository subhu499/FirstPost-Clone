document.getElementById("mainStoryTitle").innerText = "Politics";

getData("https://firstpost1.onrender.com/POLITICS").then((res) => {
    append(res, document.querySelector(".main-content"));
});