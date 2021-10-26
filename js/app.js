const container = document.querySelector(".container");
const coffees= [
    {
        name:"Weberbauerocereus",
        image: "images/cactus1.webp" 
    },
    {
        name:"var albispina",
        image: "images/cactus2.jpg"
    },
    {
        name:"orejitas ",
        image: "images/cactus3.jpg"
    },
    {
        name:"Mendoza",
        image: "images/cactus4.jpg"
    },
    {
        name:"Opuntia ficus",
        image: "images/cactus5.jpg"
    }
    ,
    {
        name:"Jardin",
        image: "images/cactus6.jpg"
    },
    {
        name:"Jugestes",
        image: "images/cactus7.jpeg"
    }
    ,
    {
        name:"Luzzz",
        image: "images/cactus8.jpeg"
    },
    {
        name:"Mendoza",
        image: "images/cactus9.jpeg"
    }
];
const showCoffees = () =>{
    let output ="";
    coffees.forEach(
        ({name, image}) =>
         (output += `
         
         <div class="card">
                <img class ="card--avatar" src=${image} />
                <h2 class="card--title">${name}</h2>
                <a class="card--link" href="#">Cactus</a>
            </div>
        `
        )
    );
    container.innerHTML=output;
};
document.addEventListener("DOMContentLoaded", showCoffees);

if("serviceWorker" in navigator){
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}
