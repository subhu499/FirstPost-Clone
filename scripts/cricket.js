document.getElementById("mainStoryTitle").innerText = "Cricket";

getData("https://firstpost1.onrender.com/api/cricket").then((res) => {
    append(res, document.querySelector(".main-content"));
});