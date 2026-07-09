
const products = [
    {
        id: 1,
        brand: "../assets/rolex logo.png",
        name: "Rolex Submariner",
        price: 12500,
        about: "An iconic luxury diving watch known for its timeless design and durability.",
        taxTxt: `Inclusive of all taxes`,
        category: "Diving",
        collection: "Submariner",
        availability: "In Stock",
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
        brand: "../assets/omega logo.png",
        name: "Omega Speedmaster",
        price: 7800,
        taxTxt: `Inclusive of all taxes`,
        category: "Chronograph",
        collection: "Moon Legacy Collection",
        availability: "Available Now",
        image: "../productsLists/Watch_assets/2.jpeg",
        about: "The legendary Moonwatch worn during NASA missions.",
        sideImg: "../productsLists/products_assets/omega_speedmaster2.png",
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
        brand: "../assets/patek philppe logo.png",
        name: "Patek Philippe",
        price: 35000,
        taxTxt: `Inclusive of all taxes`,
        category: "Luxury Sports",
        collection: "Prestige Collection",
        availability: "In Stock",
        image: "/productsLists/Watch_assets/3.jpeg",
        about: "A highly sought-after luxury sports watch.",
        sideImg: "../productsLists/products_assets/Patek philpee3.png",
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
        brand: "../assets/tag heuer logo.png",
        name: "TAG Heuer Monaco",
        price: 8500,
        taxTxt: `Inclusive of all taxes`,
        category: "Chronograph",
        collection: "Racing Heritage Collection",
        availability: "Available Now",
        image: "../productsLists/Watch_assets/4.jpeg",
        about: "A distinctive square-shaped chronograph inspired by motorsport.",
        sideImg: "../productsLists/products_assets/tag heuer4.png",
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
        brand: "../assets/audemars-piguet-logo (1).png",
        name: "Royal Oak",
        price: 42000,
        taxTxt: `Inclusive of all taxes`,
        category: "Luxury Sports",
        collection: "Royal Signature Collection",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/5.jpeg",
        about: "Famous for its octagonal bezel and premium finish.",
        sideImg: "../productsLists/products_assets//audemars piguet5.png",
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
        brand: "../assets/cartier.png",
        name: "Cartier Santos",
        price: 7200,
        taxTxt: `Inclusive of all taxes`,
        category: "Classic",
        collection: "Classic Elegance Collection",
        availability: "Available Now",
        image: "../productsLists/Watch_assets/6.jpeg",
        about: "A classic luxury watch with aviation heritage.",
        sideImg: "../productsLists/products_assets/cartier6.png",
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
        brand: "../assets/rolex logo.png",
        name: "Rolex Daytona",
        price: 18500,
        taxTxt: `Inclusive of all taxes`,
        category: "Chronograph",
        collection: "Motorsport Collection",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/7.jpeg",
        about: "One of the world's most desirable racing watches.",
        sideImg: "../productsLists/products_assets/rolex daytona7.png",
        ratings: "⭐⭐⭐⭐",
        ratingsNo: "4.8 (124 reviews)",
        cartButton: "Add to Cart",
        buyButton: "Buy Now",
    },

    // Luxora Watches

    {
        id: 8,
        brand: "../assets/logo1.png ",
        name: "Luxora Royal Gold",
        price: 5500,
        taxTxt: `Inclusive of all taxes`,
        category: "Classic",
        collection: "Luxora Signature Collection",
        availability: "Limited Stock",
        image: "../productsLists/Watch_assets/8.jpeg",
        about: "A premium gold-finished timepiece crafted for elegance.",
        sideImg: "../productsLists/products_assets/luxoraGold8.png",
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
        brand: "../assets/logo1.png ",

        name: "Luxora Midnight Crown",
        price: 4800,
        taxTxt: `Inclusive of all taxes`,
        category: "Luxury Sports",
        collection: "Luxora Elite Collection",
        availability: "Limited Stock",
        collection: "Luxora Prestige Collection",
        availability: "Limited Stock",
        image: "../productsLists/Watch_assets/9.jpeg",
        about: "A bold black luxury watch designed for modern style.",
        sideImg: "../productsLists/products_assets/luxoraMidnight9.png",
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
        brand: "../assets/logo1.png ",
        name: "Luxora Imperial Chrono",
        price: 6200,
        taxTxt: `Inclusive of all taxes`,
        category: "Chronograph",
        collection: "Ocean Master Collection",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/10.jpeg",
        about: "A sophisticated chronograph with luxury styling.",
        sideImg: "../productsLists/products_assets/luxorachrono10.png",
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
        brand: "../assets/omega logo.png",
        name: "Omega Seamaster Diver",
        price: 6200,
        taxTxt: `Inclusive of all taxes`,
        category: "Diving",
        collection: "Racing Prestige Collection",
        availability: "Available Now",
        image: "../productsLists/Watch_assets/11.jpeg",
        sideImg: "../productsLists/products_assets/omegaspeedmaster11.png",
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
        brand: "../assets/rolex logo.png",
        name: "Rolex Cosmograph",
        taxTxt: `Inclusive of all taxes`,
        price: 8499,
        category: "Chronograph",
        collection: "Cosmic Heritage Collection",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/12.jpeg",
        sideImg: "../productsLists/products_assets/rolexcosmgraph12.png",
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
        brand: "../assets/omega logo.png",
        name: "Omega Cosmic",
        price: 4659,
        category: "Classic",
        taxTxt: `Inclusive of all taxes`,
        collection: "Blue Signature Collection",
        availability: "Available Now",
        image: "../productsLists/Watch_assets/13.jpeg",
        about: "Elegant black and silver watch for everyday luxury.",
        sideImg: "../productsLists/products_assets/omegacosmic13.png",
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
        brand: "../assets/rolex logo.png",

        name: "Rolex Blue",
        price: 8789,
        category: "Luxury Sports",
        taxTxt: `Inclusive of all taxes`,
        collection: "Sport Performance Collection",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/14.jpeg",
        about: "A striking blue edition with premium craftsmanship.",
        sideImg: "../productsLists/products_assets/rolexblue14.png",
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
        brand: "../assets/omega logo.png",
        name: "Omega Speed",
        price: 4660,
        taxTxt: `Inclusive of all taxes`,
        category: "Chronograph",
        collection: "Black Edition Collection",
        availability: "Available Now",
        image: "../productsLists/Watch_assets/15.jpeg",
        about: "Modern silver edition with a sporty appearance.",
        sideImg: "../productsLists/products_assets/omegspeed15.png",
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
        brand: "../assets/patek philppe logo.png",
        name: "Patek Philippe",
        price: 7799,
        taxTxt: `Inclusive of all taxes`,
        category: "Classic",
        collection: "Monaco Racing Collection",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/16.jpeg",
        about: "Luxury silver edition with timeless Swiss design.",
        sideImg: "../productsLists/products_assets/patekblack16.png",
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
        brand: "../assets/tag heuer logo.png",
        taxTxt: `Inclusive of all taxes`,
        name: "Monaco Black Edition",
        price: 4890,
        category: "Chronograph",
        collection: "Excellence Collection",
        availability: "Available Now",
        image: "../productsLists/Watch_assets/17.jpeg",
        about: "Black striped edition inspired by racing heritage.",
        sideImg: "../productsLists/products_assets/monocblack17.png",
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
        brand: "../assets/Vacheron_Constantin_logo.png",
        name: "Vacheron Constantin",
        price: 7545,
        taxTxt: `Inclusive of all taxes`,
        category: "Luxury Sports",
        collection: "Gold Prestige Collection",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/18.jpeg",
        about: "Golden blue edition representing fine Swiss craftsmanship.",
        sideImg: "../productsLists/products_assets/vacheron constanin18.png",
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
        brand: "../assets/patek philppe logo.png",
        name: "Patek Philippe Silver",
        taxTxt: `Inclusive of all taxes`,
        collection: "Silver Prestige Collection",
        price: 7545,
        category: "Classic",
        availability: "In Stock",
        image: "../productsLists/Watch_assets/19.jpeg",
        about: "Golden silver edition with elegant and refined styling.",
        sideImg: "../productsLists/products_assets/pateksliver19.png",
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
    document.getElementById("availability").textContent = `${product.availability}`;
    document.getElementById("about").textContent = product.about;
    document.getElementById("addToCart").textContent = product.cartButton;
    document.getElementById("buyNow").textContent = product.buyButton;
    document.getElementById("ratings").textContent = product.ratings;
    document.getElementById("ratingsNo").textContent = product.ratingsNo;
    document.getElementById("cartBtn").textContent = `🛒`;
    document.getElementById("wishBtn").textContent = `❤`;


    const addCartBtn = document.getElementById("addToCart");
    addCartBtn.addEventListener("click", () => {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const checkExits = cart.find(item =>
            item.id === product.id)

        if (checkExits) {
            alert(`${product.name} Alredy in Cart🛒`);
            return;

        }
        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${product.name} Product added to cart✔`);
        // console.log(cart);


    })


    const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", () => {
        window.location.href = "../index.html"
    })

    const homePar = document.getElementById("home");
    const cartBtn = document.getElementById("cartBtn");



    cartBtn.addEventListener("click", () => {
        window.location.href = `../carts/cart.html`
    })

    window.addEventListener("scroll", () => {

        if (window.scrollY > 200) {
            homePar.style.display = "none"
            backBtn.classList.add("scrolled");
            cartBtn.classList.add("scrolled");
        }
        else {
            homePar.style.display = "block"
            backBtn.classList.remove("scrolled");
            cartBtn.classList.remove("scrolled");
          
            

        }

    })

    //----->
    const infoContainer = document.getElementById("productInfo");
    const infoContainer1 = document.getElementById("productInfo1");

    const box = document.createElement("div");
    box.classList.add("specbox")
    const box1 = document.createElement("div");
    box1.classList.add("specbox1")

    box.innerHTML = `
        <h3>SPECIFICATIONS</h3>
        <div class="itemBox">
        <span class="speclabel"> Movement:</span>  
        <span class="specValue"> ${product.specifications.movement}<span></div>

         <div class="itemBox">
        <span class="speclabel"> Case Material:</span>  
        <span class="specValue"> ${product.specifications.caseMaterial}<span></div>
        
          <div class="itemBox">
      <span class="speclabel">Glass:</span>
       <span class="specValue"> ${product.specifications.glass}<span></div>
        
          <div class="itemBox">
       <span class="speclabel"> Strap Material:</span>
          <span class="specValue"> ${product.specifications.strapMaterial}<span></div>
        
          <div class="itemBox">
        <span class="speclabel"> Water Resistance:</span>  
         <span class="specValue"> ${product.specifications.waterResistance}<span></div>
        

   `
    box1.innerHTML = `
        <h3>FEATURES</h3>
        <p>
           <span> ✓</span>  ${product.features[0]}</p>
            <p>   <span> ✓</span> ${product.features[1]}</p>
         <p> <span> ✓</span> ${product.features[2]}</p>
        <p>  <span> ✓</span> ${product.features[3]}</h3>
         <p>  <span> ✓</span>  ${product.features[4]}</p>

   `
    infoContainer.appendChild(box);
    infoContainer1.appendChild(box1);




}

const ratingBtns = document.querySelectorAll(".ratingBtns");

let currentRate = 0;
ratingBtns.forEach(rating => {
    const stars = rating.querySelectorAll(".star");
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const value = Number(star.dataset.value);
            if (currentRate === value) {
                currentRate = 0
            }
            else {
                currentRate = value;


            }
            stars.forEach((s, index) => {
                if (index < currentRate) {
                    s.src = "../assets/ratingFilled.png";

                }
                else {
                    s.src = "../assets/4star rating.png"
                }
                const ratingTxts = [
                    "Give Ratings",
                    "Not Good🙁",
                    "Fair😐",
                    "Good🙂",
                    "Very Good😘",
                    "Excelent😍",

                ];

                const rating = ratingTxts[currentRate];
                const ratingsMsg = document.getElementById("ratingsMsg")
                ratingsMsg.innerHTML = `<p>${rating}</p>`

            });

        })
    })
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", () => {




        let ratingCount = "";
        for (let i = 0; i < currentRate; i++) {
            ratingCount += `<img src="../assets/ratingFilled.png" width="20">`

        }
        const userBox = document.getElementById("userBox");
        const userInput = document.getElementById("userName");
        const userTxtBox = document.getElementById("textBox").value;
        const errorMsg = document.getElementById("errorMsg")
        errorMsg.innerHTML = ""

        if (userInput.value.trim() === "" || currentRate === 0) {

            const err = document.createElement("p");
            err.innerHTML = "Invaild Inputs!! try to fill all fileds";
            errorMsg.appendChild(err);

        }

        else {

            const box = document.createElement("div");
            box.innerHTML = `
            <div class="conts">
           <img src="../assets/user_profile.png" width="40px" height="40px">
              <p>${userInput.value}</p></div>
              <div class="downConts">
          <p>${ratingCount}</p>
     
           <p>${userTxtBox}</p></div>
           `

            userBox.appendChild(box);
            const msgBox = document.createElement("div");
            msgBox.innerHTML = "Thank you for your feedback😍";
            msgBox.classList.add("popup")
            document.body.appendChild(msgBox);
            setTimeout(() => {
                msgBox.remove();
            }, 2900)


            userInput.value = "";
            document.getElementById("textBox").value = "";
            currentRate = 0
            errorMsg.innerHTML = "";
            ratingsMsg.innerHTML = ""

            stars.forEach(star => {
                star.src = "../assets/4star rating.png"

            })

        }

    })


})

