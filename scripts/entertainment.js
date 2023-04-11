document.getElementById("mainStoryTitle").innerText = "Entertainment";

getData("https://firstpost1.onrender.com/entertainment").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);