const products = [
    

    // Products of cards

    {
        id: 12,
        brand: "Rolex",
        name: "Rolex Cosmograph",
        price: 8499,
        category: "Chronograph",
        image: "/assets/rolex.png",
        about: "Modern green edition inspired by luxury motorsport."
    },

    {
        id: 13,
        brand: "Omega",
        name: "Omega Cosmic",
        price: 4659,
        category: "Classic",
        image: "/assets/omg3.png",
        about: "Elegant black and silver watch for everyday luxury."
    },

    {
        id: 14,
        brand: "Rolex",
        name: "Rolex Blue",
        price: 8789,
        category: "Luxury Sports",
        image: "/assets/rolex-blue.png",
    
        about: "A striking blue edition with premium craftsmanship."
    },

    {
        id: 15,
        brand: "Omega",
        name: "Omega Speed",
        price: 4660,
        category: "Chronograph",
        image: "/assets/omega-speed.png",
        about: "Modern silver edition with a sporty appearance."
    },

    {
        id: 16,
        brand: "Patek Philippe",
        name: "Patek Philippe Black",
        price: 7799,
        category: "Classic",
        image: "/assets/patter_pheliipe.png ",
        about: "Luxury silver edition with timeless Swiss design."
    },

    {
        id: 17,
        brand: "TAG Heuer",
        name: "Monaco Black Edition",
        price: 4890,
        category: "Chronograph",
        image: "/assets/monaco.png",
        about: "Black striped edition inspired by racing heritage."
    },

    {
        id: 18,
        brand: "Vacheron Constantin",
        name: "Vacheron Constantin Blue",
        price: 7545,
        category: "Luxury Sports",
        image: "/assets/vachreon.png",
        about: "Golden blue edition representing fine Swiss craftsmanship."
    },

    {
        id: 19,
        brand: "Patek Philippe",
        name: "Patek Philippe Silver",
        price: 7545,
        category: "Classic",
        image: "/assets/Patek_Philippe.png",
        about: "Golden silver edition with elegant and refined styling."
    }

];


const param = new URLSearchParams(window.location.search);
const id = Number(param.get("id"));
const product = products.find(item =>
    item.id === id
);

const cont = document.getElementById("productDetails");
cont.innerHTML = `
           <img src="${product.image}">
           <h2>${product.brand}</h2>
            <h3>${product.name}</3>
             <p>${product.price}</div>
              <p>${product.category}</p>
               <p>${product.about}</p>`


const param1 = new URLSearchParams(window.location.search);
const id1 = Number(param.get("id1"));
const product1 = products.find(item =>
    item.id === id1
);

const cont1 = document.getElementById("productDetails1");
cont1.innerHTML = `
           <img src="${product1.image}">
           <h2>${product1.brand}</h2>
            <h3>${product1.name}</3>
             <p>${product1.price}</div>
              <p>${product1.category}</p>
               <p>${product1.about}</p>;`




