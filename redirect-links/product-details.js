const products = [

    {
        id: 1,
        brand: "Rolex",
        name: "Rolex Submariner",
        price: 12500,
        category: "Diving",
        image: "/assets/rolex.png",
        about: "An iconic luxury diving watch known for its timeless design and durability."
    },
    {
        id: 2,
        brand: "Omega",
        name: "Omega Speedmaster Moonwatch",
        price: 7800,
        category: "Chronograph",
        image: "images/speedmaster.jpg",
        about: "The legendary Moonwatch worn during NASA missions."
    },

    {
        id: 3,
        brand: "Patek Philippe",
        name: "Patek Philippe Nautilus",
        price: 35000,
        category: "Luxury Sports",
        image: "/assets/rolex1.png",
        about: "A highly sought-after luxury sports watch."
    },

    {
        id: 4,
        brand: "TAG Heuer",
        name: "TAG Heuer Monaco",
        price: 8500,
        category: "Chronograph",
        image: "images/monaco.jpg",
        about: "A distinctive square-shaped chronograph inspired by motorsport."
    },

    {
        id: 5,
        brand: "Audemars Piguet",
        name: "Royal Oak",
        price: 42000,
        category: "Luxury Sports",
        image: "images/royaloak.jpg",
        about: "Famous for its octagonal bezel and premium finish."
    },

    {
        id: 6,
        brand: "Cartier",
        name: "Cartier Santos",
        price: 7200,
        category: "Classic",
        image: "images/santos.jpg",
        about: "A classic luxury watch with aviation heritage."
    },

    {
        id: 7,
        brand: "Rolex",
        name: "Rolex Daytona",
        price: 18500,
        category: "Chronograph",
        image: "images/daytona.jpg",
        about: "One of the world's most desirable racing watches."
    },

    // Luxora Watches

    {
        id: 8,
        brand: "Luxora",
        name: "Luxora Royal Gold",
        price: 5500,
        category: "Classic",
        image: "images/royal-gold.jpg",
        about: "A premium gold-finished timepiece crafted for elegance."
    },

    {
        id: 9,
        brand: "Luxora",
        name: "Luxora Midnight Crown",
        price: 4800,
        category: "Luxury Sports",
        image: "images/midnight-crown.jpg",
        about: "A bold black luxury watch designed for modern style."
    },

    {
        id: 10,
        brand: "Luxora",
        name: "Luxora Imperial Chrono",
        price: 6200,
        category: "Chronograph",
        image: "images/imperial-chrono.jpg",
        about: "A sophisticated chronograph with luxury styling."
    },

    {
        id: 11,
        brand: "Omega",
        name: "Omega Seamaster Diver 300M",
        price: 6200,
        category: "Diving",
        image: "images/seamaster.jpg",
        about: "A premium diving watch famous for ocean heritage."
    },

    // Products of cards

    {
        id: 12,
        brand: "Rolex",
        name: "Rolex Cosmograph",
        price: 8499,
        category: "Chronograph",
        image: "images/rolex-cosmograph.png",
        about: "Modern green edition inspired by luxury motorsport."
    },

    {
        id: 13,
        brand: "Omega",
        name: "Omega Cosmic",
        price: 4659,
        category: "Classic",
        image: "images/omega-cosmic.png",
        about: "Elegant black and silver watch for everyday luxury."
    },

    {
        id: 14,
        brand: "Rolex",
        name: "Rolex Blue",
        price: 8789,
        category: "Luxury Sports",
        image: "images/rolex-blue.png",
        about: "A striking blue edition with premium craftsmanship."
    },

    {
        id: 15,
        brand: "Omega",
        name: "Omega Speed",
        price: 4660,
        category: "Chronograph",
        image: "images/omega-speed.png",
        about: "Modern silver edition with a sporty appearance."
    },

    {
        id: 16,
        brand: "Patek Philippe",
        name: "Patek Philippe Black",
        price: 7799,
        category: "Classic",
        image: "images/patek-black.png",
        about: "Luxury silver edition with timeless Swiss design."
    },

    {
        id: 17,
        brand: "TAG Heuer",
        name: "Monaco Black Edition",
        price: 4890,
        category: "Chronograph",
        image: "images/monaco-black.png",
        about: "Black striped edition inspired by racing heritage."
    },

    {
        id: 18,
        brand: "Vacheron Constantin",
        name: "Vacheron Constantin Blue",
        price: 7545,
        category: "Luxury Sports",
        image: "images/vacheron-blue.png",
        about: "Golden blue edition representing fine Swiss craftsmanship."
    },

    {
        id: 19,
        brand: "Patek Philippe",
        name: "Patek Philippe Silver",
        price: 7545,
        category: "Classic",
        image: "images/patek-silver.png",
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




