let tbody = document.querySelector("tbody");
let form = document.querySelector('form')

const fetchData=()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    
    xhr.onload=()=>{
        let data = JSON.parse(xhr.responseText);
        data.map((users)=>{
            // console.log(users['name']);
            tbody.innerHTML += 
            `<tr>
            <td>${users['name']}</td>
            <td>${users['email']}</td>
            <td>${users['username']}</td>
            </tr>`
        })
    }
}

fetchData();
btn = document.getElementById('submit')
btn.addEventListener('click', ()=>{
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let username = document.getElementById('username')

    let obj = {
        name : name,
        email : email,
        username :username
    }

    let parsedobj = JSON.stringify(obj)
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "https://jsonplaceholder.typicode.com/users");
    xhr.send();
})