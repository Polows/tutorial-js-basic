const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector("#app");
const ul = document.createDocumentFragment('ul');

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            let elem = document.createElement('li');
            elem.appendChild(
                document.createTextNode(`${user.name} & ${user.email}`)
            );
            ul.appendChild(elem);
        });
        /*
        const tpl = users.map((user) => `<li>${user.name} & ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
        */
        HTMLResponse.appendChild(ul);
    });


/*
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200) {
       // 0 = UNSET
       // 1 - OPENED 
       // 2 - HEADERS_RECEIVED, se esta llamando al metodo send()
       // 3 - LOADING, esta cargando, esta recibiendo la respuesta
       // 4 - DONE, se ha completado todo
       const data = JSON.parse(this.response);
       console.log(data);
       const HTMLResponse = document.querySelector("#app");
       const tpl = data.map(user => `<li>${user.name}</li>`);
       HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('get', `${API_URL}/users`);
xhr.send();
*/