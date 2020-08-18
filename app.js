
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => usersTraverse(users))


function usersTraverse(user) {
    user.forEach(element => {
        const id = element.id;
        const userName = element.username;
        const address = element.address.street;

        const htmlMarkup = `<div class="col-md-6">
        <div class="card text-white bg-primary my-2">
            <div class="card-body">
                <h4 class="card-title mb-0 d-inline-block font-weight-bold">${userName}</h4>
                <button type="click" class="btn btn-warning float-right collapsed" data-toggle="collapse"
                    data-target="#collapse${id}" role="button" aria-expanded="false">Get Info</button>
                <div class="collapse mt-3" id="collapse${id}">
                    <h5 class="text-warning">Full Name: ${element.name}</h5>
                    <p class="m-0">Email: ${element.email}</p>
                    <p class="m-0">Phone Number: ${element.phone}</p>
                    <p class="m-0">Address: ${element.address.street}, ${element.address.suite},
                        ${element.address.city}</p>
                </div>
            </div>
        </div>
    </div>`;

        const mainDiv = document.getElementById('parentDiv');
        mainDiv.innerHTML += htmlMarkup;
    });
}