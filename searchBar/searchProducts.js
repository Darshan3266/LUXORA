

const products = [
    {
        id: 1,
        brand: "/assets/rolex logo.png",
        name: "Rolex Submariner",
        price: 12500,
        about: "An iconic luxury diving watch known for its timeless design and durability.",
        taxTxt: `Inclusive of all taxes`,
        category: "Diving",
        collection: "Submariner",
        availabilty: "In Stock",
        image: "../productsLists/Watch_assets/1.jpeg",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
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
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.7 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Manual-Winding",
            caseMaterial: "Stainless Steel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "50m",
            glass: "Hesalite Crystal"
        },

        features: [
            "Moonwatch Heritage",
            "Chronograph Function",
            "Swiss Made",
            "Premium Finish",
            "Preminum Quality"

        ]



    },

    {
        id: 3,
        brand: "Patek Philippe",
        name: "Patek Philippe Nautilus",
        price: 35000,
        category: "Luxury Sports",
        image: "/productsLists/Watch_assets/3.jpeg",
        about: "A highly sought-after luxury sports watch.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Steel",
            strapMaterial: "Integrated Bracelet",
            waterResistance: "120m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Luxury Sports Design",
            "Swiss Made",
            "Premium Finish",
            "Elegant Styling",
            "Preminum Quality"

        ]

    },

    {
        id: 4,
        brand: "TAG Heuer",
        name: "TAG Heuer Monaco",
        price: 8500,
        category: "Chronograph",
        image: "../productsLists/Watch_assets/4.jpeg",
        about: "A distinctive square-shaped chronograph inspired by motorsport.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic Chronograph",
            caseMaterial: "Steel",
            strapMaterial: "Leather Strap",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Motorsport Heritage",
            "Square Dial Design",
            "Chronograph Function",
            "Swiss Made",
            "Preminum Quality"

        ]

    },

    {
        id: 5,
        brand: "Audemars Piguet",
        name: "Royal Oak",
        price: 42000,
        category: "Luxury Sports",
        image: "../productsLists/Watch_assets/5.jpeg",
        about: "Famous for its octagonal bezel and premium finish.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Steel",
            strapMaterial: "Integrated Bracelet",
            waterResistance: "50m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Octagonal Bezel",
            "Swiss Made",
            "Luxury Sports Design",
            "Premium Finish",
            "Preminum Quality"

        ]
    },

    {
        id: 6,
        brand: "Cartier",
        name: "Cartier Santos",
        price: 7200,
        category: "Classic",
        image: "../productsLists/Watch_assets/6.jpeg",
        about: "A classic luxury watch with aviation heritage.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Steel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Classic Design",
            "Aviation Heritage",
            "Swiss Made",
            "Scratch Resistant",
            "Preminum Quality"

        ]
    },

    {
        id: 7,
        brand: "/assets/rolex logo.png",
        name: "Rolex Daytona",
        price: 18500,
        category: "Chronograph",
        image: "../productsLists/Watch_assets/7.jpeg",
        about: "One of the world's most desirable racing watches.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
    },

    // Luxora Watches

    {
        id: 8,
        brand: "Luxora",
        name: "Luxora Royal Gold",
        price: 5500,
        category: "Classic",
        image: "../productsLists/Watch_assets/8.jpeg",
        about: "A premium gold-finished timepiece crafted for elegance.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic Chronograph",
            caseMaterial: "Oystersteel",
            strapMaterial: "Oyster Bracelet",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Racing Heritage",
            "Chronograph Function",
            "Swiss Made",
            "Chronometer Certified",
            "Preminum Quality"

        ]

    },

    {
        id: 9,
        brand: "Luxora",
        name: "Luxora Midnight Crown",
        price: 4800,
        category: "Luxury Sports",
        image: "../productsLists/Watch_assets/9.jpeg",
        about: "A bold black luxury watch designed for modern style.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Stainless Steel",
            strapMaterial: "Premium Steel Bracelet",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Premium Finish",
            "Scratch Resistant",
            "5-Year Warranty",
            "Luxury Design",
            "Preminum Quality"

        ]

    },

    {
        id: 10,
        brand: "Luxora",
        name: "Luxora Imperial Chrono",
        price: 6200,
        category: "Chronograph",
        image: "../productsLists/Watch_assets/10.jpeg",
        about: "A sophisticated chronograph with luxury styling.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Stainless Steel",
            strapMaterial: "Premium Steel Bracelet",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Premium Finish",
            "Scratch Resistant",
            "5-Year Warranty",
            "Luxury Design",
            "Preminum Quality"

        ]

    },

    {
        id: 11,
        brand: "Omega",
        name: "Omega Seamaster Diver 300M",
        price: 6200,
        category: "Diving",
        image: "../productsLists/Watch_assets/11.jpeg",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        about: "A premium diving watch famous for ocean heritage.",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Steel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "300m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Professional Diving Watch",
            "Helium Escape Valve",
            "Swiss Made",
            "Chronometer Certified",
            "Preminum Quality"

        ]

    },

    // Products of cards

    {
        id: 12,
        brand: "/assets/rolex logo.png",
        name: "Rolex Cosmograph",
        price: 8499,
        category: "Chronograph",
        image: "../productsLists/Watch_assets/12.jpeg",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic Chronograph",
            caseMaterial: "Oystersteel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Motorsport Inspired",
            "Chronograph Function",
            "Swiss Made",
            "Premium Finish",
            "Preminum Quality"

        ],

        about: "Modern green edition inspired by luxury motorsport."
    },

    {
        id: 13,
        brand: "Omega",
        name: "Omega Cosmic",
        price: 4659,
        category: "Classic",
        image: "../productsLists/Watch_assets/13.jpeg",
        about: "Elegant black and silver watch for everyday luxury.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Steel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "50m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Classic Design",
            "Swiss Made",
            "Elegant Styling",
            "Scratch Resistant",
            "Preminum Quality"

        ]
    },

    {
        id: 14,
        brand: "/assets/rolex logo.png",

        name: "Rolex Blue",
        price: 8789,
        category: "Luxury Sports",
        image: "../productsLists/Watch_assets/14.jpeg",
        about: "A striking blue edition with premium craftsmanship.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now", specifications: {
            movement: "Automatic",
            caseMaterial: "Oystersteel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Luxury Sports Design",
            "Swiss Made",
            "Premium Finish",
            "Scratch Resistant",
            "Preminum Quality"

        ]

    },

    {
        id: 15,
        brand: "Omega",
        name: "Omega Speed",
        price: 4660,
        category: "Chronograph",
        image: "../productsLists/Watch_assets/15.jpeg",
        about: "Modern silver edition with a sporty appearance.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic Chronograph",
            caseMaterial: "Steel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Chronograph Function",
            "Sporty Design",
            "Swiss Made",
            "Premium Finish",
            "Preminum Quality"

        ]
    },

    {
        id: 16,
        brand: "Patek Philippe",
        name: "Patek Philippe Black",
        price: 7799,
        category: "Classic",
        image: "../productsLists/Watch_assets/16.jpeg",
        about: "Luxury silver edition with timeless Swiss design.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Steel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "120m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Elegant Styling",
            "Swiss Made",
            "Luxury Finish",
            "Scratch Resistant",
            "Preminum Quality"

        ]
    },

    {
        id: 17,
        brand: "TAG Heuer",
        name: "Monaco Black Edition",
        price: 4890,
        category: "Chronograph",
        image: "../productsLists/Watch_assets/17.jpeg",
        about: "Black striped edition inspired by racing heritage.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic Chronograph",
            caseMaterial: "Steel",
            strapMaterial: "Leather Strap",
            waterResistance: "100m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Racing Heritage",
            "Chronograph Function",
            "Square Dial Design",
            "Swiss Made",
            "Preminum Quality"

        ]
    },

    {
        id: 18,
        brand: "Vacheron Constantin",
        name: "Vacheron Constantin Blue",
        price: 7545,
        category: "Luxury Sports",
        image: "../productsLists/Watch_assets/18.jpeg",
        about: "Golden blue edition representing fine Swiss craftsmanship.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "18K Gold",
            strapMaterial: "Steel Bracelet",
            waterResistance: "150m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Fine Swiss Craftsmanship",
            "Luxury Sports Design",
            "Swiss Made",
            "Premium Finish",
            "Preminum Quality"

        ]
    },

    {
        id: 19,
        brand: "Patek Philippe",
        name: "Patek Philippe Silver",
        price: 7545,
        category: "Classic",
        image: "../productsLists/Watch_assets/19.jpeg",
        about: "Golden silver edition with elegant and refined styling.",
        sideImg: "../productsLists/products_assets/rolex_submariner1.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
        specifications: {
            movement: "Automatic",
            caseMaterial: "Steel",
            strapMaterial: "Steel Bracelet",
            waterResistance: "120m",
            glass: "Sapphire Crystal"
        },

        features: [
            "Timeless Design",
            "Swiss Made",
            "Elegant Styling",
            "Premium Finish",
            "Preminum Quality"

        ]
    }

];


const parms = new URLSearchParams(window.location.search);
const getId = parms.get("id");

if (getId) {
    const product = products.find(item =>
        item.id == getId
    );


    document.getElementById("sideImg").src = product.sideImg;
    document.getElementById("watchimage").src = product.image;
    document.getElementById("brand").src = product.brand;
    document.getElementById("name").textContent = product.name;
    document.getElementById("price").textContent = ` ₹ ${product.price.toLocaleString()}`
    document.getElementById("taxTxt").textContent = ` ${product.taxTxt}`
    document.getElementById("categories").textContent = `${product.category}`;
    document.getElementById("collection").textContent = `${product.collection}`;
    document.getElementById("availabilty").textContent = `${product.availabilty}`;
    document.getElementById("about").textContent = product.about;
    document.getElementById("addToCart").textContent = product.cartButton;
    document.getElementById("buyNow").textContent = product.buyButton;
    document.getElementById("ratings").textContent = product.ratings;
    document.getElementById("ratingsNo").textContent = product.ratingsNo;
    document.getElementById("cartBtn").textContent = `🛒`;
    document.getElementById("wishBtn").textContent = `❤`;


    const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", () => {
        window.location.href = "../index.html"
    })

    const homePar = document.getElementById("home");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 220) {
            homePar.style.display = "none"
        }
        else {
            homePar.style.display = "block"
        }


    })


    const infoContainer = document.getElementById("productInfo");
    const infoContainer1 = document.getElementById("productInfo1");

    const box = document.createElement("div");
    box.classList.add("specbox")
    const box1 = document.createElement("div");
    box1.classList.add("specbox1")

    box.innerHTML = `
        <h3>SPECIFICATIONS</h3>
        <div class="specItems"> <span class="speclabel"> Movement:</span>  
        <span class="specValue"> ${product.specifications.movement}<span></div>

        <div class="specItems"> <span class="speclabel"> Case Material:</span>  
        <span class="specValue"> ${product.specifications.caseMaterial}<span></div>
        
        <div class="specItems"> <span class="speclabel">Glass:</span>  
        <span class="specValue"> ${product.specifications.glass}<span></div>
        
        <div class="specItems"> <span class="speclabel"> Strap Material:</span>  
        <span class="specValue"> ${product.specifications.strapMaterial}<span></div>
        
        <div class="specItems"> <span class="speclabel"> Water Resistance:</span>  
        <span class="specValue"> ${product.specifications.waterResistance}<span></div>
        

   `
    box1.innerHTML = `
        <h3>FEATURES</h3>
        <p>
            ${product.features[0]}</p>
            <p> ${product.features[1]}</p>
         <p>${product.features[2]}</p>
        <p>${product.features[3]}</h3>
         <p> ${product.features[4]}</p>

   `
    infoContainer.appendChild(box);
    infoContainer1.appendChild(box1);
}




