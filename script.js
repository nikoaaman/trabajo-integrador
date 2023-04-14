console.log("hola mundo")
const contenedor = document.getElementById("products")
fetch("./database.json")
    .then(response => response.json())
    .then(data => {
        for(const producto of data){
            contenedor.innerHTML += `
            <div class="producto">
                <h3>${producto.name}</h3>
                <img src="${producto.imagen}" alt="${producto.name}" class="foto-producto">
                <p class="price">${"$"+producto.price}</p>
            </div>
            `
        }
    })
const formulario = document.getElementById("form")
const thanks = document.getElementById("thanks-container")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(formulario.nombre.value)
    console.log(formulario.email.value)
    console.log(formulario.mensaje.value)
    formulario.reset()
    thanks.innerHTML=""
    thanks.innerHTML+=`
    <p>Gracias por tu mensaje. <br> Nos comunicaremos a la brevedad</p>`
})