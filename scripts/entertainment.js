document.getElementById("mainStoryTitle").innerText = "Entertainment";

getData("https://firstpost-masai-server.herokuapp.com/ENTERTAINMENT").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);