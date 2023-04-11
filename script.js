console.log("hola mundo")
const contenedor = document.getElementById("products")
fetch("./database.json")
    .then(response => response.json())
    .then(data => {
        for(const producto of data){
            contenedor.innerHTML += `
            <div class="producto">
                <h3>${producto.name}</h3>
            </div>
            `
        }
    })