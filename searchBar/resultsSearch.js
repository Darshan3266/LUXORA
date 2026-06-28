const products = [
    {
        id: 1,
        brand: "/assets/rolex logo.png",
        name: "Rolex Submariner",
        price: 12500,
        taxTxt: `Inclusive of all taxes`,
        category: "Diving",
        collection: "Submariner",
        availabilty: "In Stock",
        image: "../productsLists/Watch_assets/1.jpeg",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        about: "An iconic luxury diving watch known for its timeless design and durability.",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Oystersteel",
            strapMaterial: "Oyster Bracelet",
            waterResistance: "300m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Swiss Made",
            "Diving Bezel",
            "Chronometer Certified",
            "Scratch Resistant",
            "Preminum Quality"
        ]
    },

    {
        id: 2,
        brand: "Omega",
        name: "Omega Speedmaster Moonwatch",
        price: 7800,
        category: "Chronograph",
        image: "../productsLists/Watch_assets/2.jpeg",
        about: "The legendary Moonwatch worn during NASA missions.",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8(124 reviews)"


    },

    {
        id: 3,
        brand: "Patek Philippe",
        name: "Patek Philippe Nautilus",
        price: 35000,
        category: "Luxury Sports",
        image: "/productsLists/Watch_assets/3.jpeg",


        about: "A highly sought-after luxury sports watch."
    },

    {
        id: 4,
        brand: "TAG Heuer",
        name: "TAG Heuer Monaco",
        price: 8500,
        category: "Chronograph",
        image: "/productsLists/products_assets/tag heuer4.png",
        about: "A distinctive square-shaped chronograph inspired by motorsport."
    },

    {
        id: 5,
        brand: "Audemars Piguet",
        name: "Royal Oak",
        price: 42000,
        category: "Luxury Sports",
        image: "/productsLists/products_assets/audemars piguet5.png",
        about: "Famous for its octagonal bezel and premium finish."
    },

    {
        id: 6,
        brand: "Cartier",
        name: "Cartier Santos",
        price: 7200,
        category: "Classic",
        image: "/productsLists/products_assets/cartier6.png",
        about: "A classic luxury watch with aviation heritage."
    },

    {
        id: 7,
        brand: "Rolex",
        name: "Rolex Daytona",
        price: 18500,
        category: "Chronograph",
        image: "/productsLists/products_assets/rolex daytona7.png",
        about: "One of the world's most desirable racing watches."
    },

    // Luxora Watches

    {
        id: 8,
        brand: "Luxora",
        name: "Luxora Royal Gold",
        price: 5500,
        category: "Classic",
        image: "/productsLists/products_assets/luxoraGold8.png",
        about: "A premium gold-finished timepiece crafted for elegance."
    },

    {
        id: 9,
        brand: "Luxora",
        name: "Luxora Midnight Crown",
        price: 4800,
        category: "Luxury Sports",
        image: "/productsLists/products_assets/luxoraMidnight9.png",
        about: "A bold black luxury watch designed for modern style."
    },

    {
        id: 10,
        brand: "Luxora",
        name: "Luxora Imperial Chrono",
        price: 6200,
        category: "Chronograph",
        image: "/productsLists/products_assets/luxorachrono10.png",
        about: "A sophisticated chronograph with luxury styling."
    },

    {
        id: 11,
        brand: "Omega",
        name: "Omega Seamaster Diver 300M",
        price: 6200,
        category: "Diving",
        image: "/productsLists/products_assets/omegaspeedmaster11.png",
        about: "A premium diving watch famous for ocean heritage."
    },

    // Products of cards

    {
        id: 12,
        brand: "Rolex",
        name: "Rolex Cosmograph",
        price: 8499,
        category: "Chronograph",
        image: "/productsLists/products_assets/rolexcosmgraph12.png",
        about: "Modern green edition inspired by luxury motorsport."
    },

    {
        id: 13,
        brand: "Omega",
        name: "Omega Cosmic",
        price: 4659,
        category: "Classic",
        image: "/productsLists/products_assets/omegacosmic13.png",
        about: "Elegant black and silver watch for everyday luxury."
    },

    {
        id: 14,
        brand: "Rolex",
        name: "Rolex Blue",
        price: 8789,
        category: "Luxury Sports",
        image: "/productsLists/products_assets/rolexblue14.png",
        about: "A striking blue edition with premium craftsmanship."
    },

    {
        id: 15,
        brand: "Omega",
        name: "Omega Speed",
        price: 4660,
        category: "Chronograph",
        image: "/productsLists/products_assets/omegspeed15.png",
        about: "Modern silver edition with a sporty appearance."
    },

    {
        id: 16,
        brand: "Patek Philippe",
        name: "Patek Philippe Black",
        price: 7799,
        category: "Classic",
        image: "/productsLists/products_assets/patekblack16.png",
        about: "Luxury silver edition with timeless Swiss design."
    },

    {
        id: 17,
        brand: "TAG Heuer",
        name: "Monaco Black Edition",
        price: 4890,
        category: "Chronograph",
        image: "/productsLists/products_assets/monocblack17.png",
        about: "Black striped edition inspired by racing heritage."
    },

    {
        id: 18,
        brand: "Vacheron Constantin",
        name: "Vacheron Constantin Blue",
        price: 7545,
        category: "Luxury Sports",
        image: "/productsLists/products_assets/vacheron constanin18.png",
        about: "Golden blue edition representing fine Swiss craftsmanship."
    },

    {
        id: 19,
        brand: "Patek Philippe",
        name: "Patek Philippe Silver",
        price: 7545,
        category: "Classic",
        image: "/productsLists/products_assets/pateksliver19.png",
        about: "Golden silver edition with elegant and refined styling."
    }

];


const parms = new URLSearchParams(window.location.search);
const getId = parms.get("id");

if (getId) {
    const product = products.find(item =>
        item.id == getId
    );
}

else {
    const results = JSON.parse(localStorage.getItem("products1"));
    const container = document.getElementById("productsConatainer");




    results.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${product.image}">
           <h2>${product.brand}</h2>
            <h3>${product.name}</3>
             <p>${product.price}</div>
              <p>${product.category}</p>
               <p>${product.about}</p>`


        container.appendChild(card);


        card.addEventListener("click", () => {

            window.location.href = `./searchProducts.html?id=${product.id}`
            container.appendChild(card);
        })





    }


    )
}

