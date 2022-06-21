/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/



const url = "https://platzi-avo.vercel.app/api/avo"  // url original de la api
const baseUrl = "https://platzi-avo.vercel.app"  // url para poder cargar las img
const principalContainer = document.querySelector("#container")
principalContainer.addEventListener("click",(event)=>{
    if(event.target.nodeName === "H2")
    window.alert("hola")
})

window.fetch(url)
.then((respuesta) => respuesta.json()) // conviertiendo datos a json
.then((resp) => { // en resp estan todos los datos de la api 
    const todosItems = [];
    resp.data.forEach(element => { //trayendo solo el "data" de la api y recorriendo ese obj

        const image = document.createElement("img");  // por c/item que recorre del data (son 9) estamos creando esos contenedores 
        // image.setAttribute("src", baseUrl + element.image)
        image.src = baseUrl + element.image;
        image.classList.add("avocado")

        const title = document.createElement("h2")
        title.textContent= element.name;
        title.className= "text-xl"

        const price = document.createElement("div")
        price.textContent = formatPrice(element.price) // llamamos a la FN formatprice

        const secondContainer = document.createElement("div");
        secondContainer.classList.add("element-container")
        
        secondContainer.append(image, title, price) // con append puedo agregar varios nodos con una sola instruccion, con appendchild es nodo x nodo
        
        todosItems.push(secondContainer)
    }); 
    principalContainer.append(... todosItems)// todos los tags creados se guarden en este contenedor padre
})


/////////////////  MISMA FUNCION PERO CON ASYNC AWAIT   
// async function aguacate() {
//     const URL =  await fetch ("https://platzi-avo.vercel.app/api/avo")
//     const parseada = await URL.json()

//     const info = parseada.data;
//     const todosItems = [];
//     info.forEach(element => { //trayendo solo el "data" de la api y recorriendo ese obj

//         const image = document.createElement("img");
        

//         const title = document.createElement("h2")
    

//         const price = document.createElement("div")
     

//         const container = document.createElement("div");
//         container.append(image, title, price) // con append puedo agregar varios nodos con una sola instruccion, con appendchild es nodo x nodo
        
//         todosItems.push(container)
//     }); 
//     document.body.append(... todosItems)
// }

// aguacate()

const formatPrice = (price)=>{ //usamos el metodo de internacionalizacion el que me permite 
    const newPrice =  new window.Intl.NumberFormat("en-En", {
        style: "currency",
        currency: "USD"
    }).format(price)
    
    return newPrice
}