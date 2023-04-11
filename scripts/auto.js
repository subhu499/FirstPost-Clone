document.getElementById("mainStoryTitle").innerText = "Auto";

getData("https://firstpost1.onrender.com/AUTO").then((res) => {
    append(res, document.querySelector(".main-content"));
});