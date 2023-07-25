let container = document.querySelector(".container");
let name = document.querySelector(".name"),
    username = document.querySelector(".username"),
    email = document.querySelector(".email"),
    phone = document.querySelector(".phone")
function getItem() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
            for (user of data) {
                container.innerHTML += `
                <div class="card">
                    <p class="name">${user.name}</p>
                    <p class="username">${user.username}</p>
                    <p class="Email">${user.email}</p>
                    <p class="phone">${user.phone}</p>
                </div>
            `
            }
        })
}
getItem();
function postItem() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            name: document.querySelector(".name").value,
            username: document.querySelector(".username").value,
            email: document.querySelector(".email").value,
            phone: document.querySelector(".phone").value

        })
    })
        .then(response => response.json())
        .then((data) => {
            if (data.name && data.username && data.email && data.phone) {
                container.innerHTML += `
                    <div class="card">
                        <p class="name">${data.name}</p>
                        <p class="username">${data.username}</p>
                        <p class="Email">${data.email}</p>
                        <p class="phone">${data.phone}</p>
                    </div>
                `
                name.value = ""
                username.value = ""
                email.value = ""
                phone.value = ""
            }
            else {
                alert("FILL ALL OF THEM PLEASE! ")
            }
        })
}