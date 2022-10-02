async function checkUser() {
    event.preventDefault();
    (email = document.getElementById("loginEmail").value),
    (password = document.getElementById("loginPassword").value);
    console.log(email, password);
    let res = await fetch("https://firstpost-masai-server.herokuapp.com/users");
    let data = await res.json();
    console.log(data);

    let flag = false;
    for (var i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
            flag = true;
            localStorage.setItem("Userid", data[i].id);
            break;
        }
    }
    if (flag == true) {
        localStorage.setItem("isLogedIn", true);
        alert("logged in successfully");
        location.href = "./index.html";
    } else {
        alert("not authenticated");
    }
}