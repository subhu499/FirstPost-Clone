document.getElementById("mainStoryTitle").innerText = "HEALTH NEWS";

getData("https://firstpost-masai-server.herokuapp.com/HOME-PAGE").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);