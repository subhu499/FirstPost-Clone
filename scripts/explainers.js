document.getElementById("mainStoryTitle").innerText = "Explainer";

getData("https://firstpost1.onrender.com/api/explainers").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);