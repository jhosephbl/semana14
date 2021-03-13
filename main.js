const tarjetas = document.querySelector('.Contenedor-Tarjetas');
    let output =''
    const url = 'https://jsonplaceholder.typicode.com/users'


    // get
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(post =>{
            output += `
            <div class="Tarjeta">
            <div class="Tarjeta-Icons">
                <button class="Tarjeta-Button"><img src="../assets/edit.svg" alt=""></button>
                <button class="Tarjeta-Button"><img src="../assets/delete.svg" alt=""></button>
            </div>
            <div class="Tarjeta-Img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxI-x8DIDIyyQG-SgsFg_BzSzj_-40boIFQ&usqp=CAU" alt="">
            </div>
            <div class="Tarjeta-Info">
                <h2 class="Tarjeta-Info-Nombre">${post.name}</h2>
                <p class="Tarjeta-Info-Vistas">${post.email}</p>
                <p class="Tarjeta-Info-Texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit dignissimos pariatur quidem.</p>
                <button class="boton-detalles">Ver detalles</button>
            </div>
        </div>
                `;
        });
        tarjetas.innerHTML = output;
    })