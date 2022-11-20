document.getElementById("mainStoryTitle").innerText = "Tech";

getData("https://firstpost-masai-server.herokuapp.com/TECH").then((res) => {
    append(res, document.querySelector(".main-content"));
});