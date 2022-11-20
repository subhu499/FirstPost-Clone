async function addUser() {
    event.preventDefault();
    let name = document.getElementById("registerName").value;
    let username = document.getElementById("registerUsername").value;
    let email = document.getElementById("registerEmail").value;
    let pwd = document.getElementById("registerPassword").value;
    let repeatpwd = document.getElementById("registerRepeatPassword").value;
    let role = "customer";

    let res2 = await fetch("https://firstpost-masai-server.herokuapp.com/users");
    let data2 = await res2.json();
    console.log(data2);
    let flag = true;
    for (var i = 0; i < data2.length; i++) {
        if (data2[i].email == email) {
            flag = false;
            break;
        }
    }
    let flag2 = false;
    if (pwd == repeatpwd) {
        flag2 = true;
    }

    if (flag == true && flag2 == true) {
        let user_data = {
            name: name,
            username: username,
            email: email,
            role: role,
            password: pwd,
        };
        console.log(user_data, "user_data");
        let res = await fetch(
            "https://firstpost-masai-server.herokuapp.com/users", {
                method: "POST",
                body: JSON.stringify(user_data),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );

        let data = await res.json();
        console.log(data);

        alert("Sign Up successful");
        location.href = "./login.html";
    } else if (flag == false) {
        alert("user already exists");
    } else if (flag2 == false) {
        alert("Password not matched with repeated password");
    }
}