document.getElementById("mainStoryTitle").innerText = "Politics";

getData("https://firstpost1.onrender.com/api/POLITICS").then((res) => {
    append(res, document.querySelector(".main-content"));
});