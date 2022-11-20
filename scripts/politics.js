document.getElementById("mainStoryTitle").innerText = "Politics";

getData("https://infinite-woodland-35141.herokuapp.com/api/POLITICS").then((res) => {
    append(res, document.querySelector(".main-content"));
});