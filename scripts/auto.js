document.getElementById("mainStoryTitle").innerText = "Auto";

getData("https://firstpost-masai-server.herokuapp.com/AUTO").then((res) => {
    append(res, document.querySelector(".main-content"));
});