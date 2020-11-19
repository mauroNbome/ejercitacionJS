document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('container')
    count = 0
    var content = ''
    superheroes.forEach(function (element, i) {
        count++
        if (i == 0) {
            //add start row.
            content += '<div class="row">'
        }

        if (element.bio.length > 30) {
            var truncateBio = element.bio.substring(0, 30).concat('...')
        }
        // Agregar contenido.
        content += `
            <div class="col-sm-12 col-md-4">
                <div class="card my-2" >
                    <img src="EjercitacionJS/${element.img}" class="card-img-top" alt="${element.nombre}" />
                    <div class="card-body">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">
                            ${truncateBio}
                        </p>
                        <div class="col text-center">
                            <button class="btn btn-primary" onclick="goTo(${i})">Conocer más</button>
                        </div>
                    </div>
                </div>
            </div>
        `

        if (count != 0 && count % 3 == 0) {
            //  Cerrar row, e iniciar uno nuevo cada 3 elementos.
            content += '</div><div class="row ">'
        }
    })
    // div final & display.
    content += '</div>'
    container.innerHTML += content
})

var goTo = function (index) {
    localStorage.setItem('index', index)
    window.location.href = 'profile.html'
}
