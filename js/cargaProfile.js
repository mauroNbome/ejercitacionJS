document.addEventListener('DOMContentLoaded', function () {
    var index = localStorage.getItem('index')
    var container = document.getElementById('container')

    var { nombre, bio, img, aparicion, casa } = superheroes[index]

    switch (casa) {
        case 'DC':
            casa = 'img/DClogo.png'

            break
        case 'Marvel':
            casa = 'img/marvellogo.png'
    }
    aparicion = aparicion.split('-')[0]
    alt = casa.slice(4, -4)

    var content = `
    <h1 class="bold mt-3">${nombre.toUpperCase()} - ${aparicion}</h1>
    <hr />

    <div class="row">
        <div class="col-md-4">
            <img src="Ejercitacion/${img}" class="rounded float-left mb-3" style="width: 100%" alt" ="${nombre}" />
            <a href="index.html">
                <button type="button" class="btn btn-primary btn-lg btn-block" href="index.html">
                    Regresar
                </button>
            </a>
        </div>

        <div class="col-md-8">
            <h1>${nombre}</h1>
            <hr />
            <p class="lead">
                ${bio}
            </p>
            <img src="${casa}" class="rounded float-left mb-3" style="width: 25%" alt" ="${alt}" />
        </div>
    </div>
    `
    container.innerHTML += content
})
