//dropmenu btn for mobile responivenss
const menuBox = document.getElementById("menuBox");
function menuBar() {
  if (menuBox.style.display === "none") {
    menuBox.style.display = "block";
  } else {
    menuBox.style.display = "none";
  }
}

//scrollBtn in homepage
const scrollbtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
});

//fade scroll animation
const fadeConts = document.querySelectorAll(".fade-up");
const fadeContsLeft = document.querySelectorAll(".fadeLeft");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.add("showLeft");
      }
    });
  },
  {
    threshold: 0.3,
  },
);
fadeConts.forEach((elements) => {
  observer.observe(elements);
});
fadeContsLeft.forEach((elements) => {
  observer.observe(elements);
});

//Search functionality

//set of products
//input to lowercase
//match the product to lowercase and input values
//for each to all elements in to create a div
//shows the product name to div
//append the values to div

const products = [
  {
    id: 1,
    brand: "./assets/rolex logo.png",
    name: "Rolex Submariner",
    price: 12500,
    about:
      "An iconic luxury diving watch known for its timeless design and durability.",
    taxTxt: `Inclusive of all taxes`,
    category: "Diving",
    collection: "Submariner",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/1.jpeg",
    image: "./productsLists/products_assets/rolex_submariner1.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Oystersteel",
      strapMaterial: "Oyster Bracelet",
      waterResistance: "300m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Swiss Made",
      "Diving Bezel",
      "Chronometer Certified",
      "Scratch Resistant",
      "Preminum Quality",
    ],
  },

  {
    id: 2,
    brand: "./assets/omega logo.png",
    name: "Omega Speedmaster",
    price: 7800,
    taxTxt: `Inclusive of all taxes`,
    category: "Chronograph",
    collection: "Moon Legacy Collection",
    availability: "Available Now",
    // image: "../productsLists/Watch_assets/2.jpeg",
    about: "The legendary Moonwatch worn during NASA missions.",
    image: "./productsLists/products_assets/omega_speedmaster2.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.7 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Manual-Winding",
      caseMaterial: "Stainless Steel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "50m",
      glass: "Hesalite Crystal",
    },

    features: [
      "Moonwatch Heritage",
      "Chronograph Function",
      "Swiss Made",
      "Premium Finish",
      "Preminum Quality",
    ],
  },

  {
    id: 3,
    brand: "./assets/patek philppe logo.png",
    name: "Patek Philippe",
    price: 3500,
    taxTxt: `Inclusive of all taxes`,
    category: "Luxury Sports",
    collection: "Prestige Collection",
    availability: "In Stock",
    // image: "/productsLists/Watch_assets/3.jpeg",
    about: "A highly sought-after luxury sports watch.",
    image: "./productsLists/products_assets/Patek philpee3.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Steel",
      strapMaterial: "Integrated Bracelet",
      waterResistance: "120m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Luxury Sports Design",
      "Swiss Made",
      "Premium Finish",
      "Elegant Styling",
      "Preminum Quality",
    ],
  },

  {
    id: 4,
    brand: "./assets/tag heuer logo.png",
    name: "TAG Heuer Monaco",
    price: 8500,
    taxTxt: `Inclusive of all taxes`,
    category: "Chronograph",
    collection: "Racing Heritage Collection",
    availability: "Available Now",
    // image: "../productsLists/Watch_assets/4.jpeg",
    about: "A distinctive square-shaped chronograph inspired by motorsport.",
    image: "./productsLists/products_assets/tag heuer4.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic Chronograph",
      caseMaterial: "Steel",
      strapMaterial: "Leather Strap",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Motorsport Heritage",
      "Square Dial Design",
      "Chronograph Function",
      "Swiss Made",
      "Preminum Quality",
    ],
  },

  {
    id: 5,
    brand: "./assets/audemars-piguet-logo (1).png",
    name: "Royal Oak",
    price: 42000,
    taxTxt: `Inclusive of all taxes`,
    category: "Luxury Sports",
    collection: "Royal Signature Collection",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/5.jpeg",
    about: "Famous for its octagonal bezel and premium finish.",
    image: "./productsLists/products_assets/audemars piguet5.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Steel",
      strapMaterial: "Integrated Bracelet",
      waterResistance: "50m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Octagonal Bezel",
      "Swiss Made",
      "Luxury Sports Design",
      "Premium Finish",
      "Preminum Quality",
    ],
  },

  {
    id: 6,
    brand: "./assets/cariter.png",
    name: "Cartier Santos",
    price: 7200,
    taxTxt: `Inclusive of all taxes`,
    category: "Classic",
    collection: "Classic Elegance Collection",
    availability: "Available Now",
    // image: "../productsLists/Watch_assets/6.jpeg",
    about: "A classic luxury watch with aviation heritage.",
    image: "./productsLists/products_assets/cartier6.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Steel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Classic Design",
      "Aviation Heritage",
      "Swiss Made",
      "Scratch Resistant",
      "Preminum Quality",
    ],
  },

  {
    id: 7,
    brand: "./assets/rolex logo.png",
    name: "Rolex Daytona",
    price: 18500,
    taxTxt: `Inclusive of all taxes`,
    category: "Chronograph",
    collection: "Motorsport Collection",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/7.jpeg",
    about: "One of the world's most desirable racing watches.",
    image: "./productsLists/products_assets/rolex daytona7.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
  },

  // Luxora Watches

  {
    id: 8,
    brand: "./assets/logo1.png ",
    name: "Luxora Royal Gold",
    price: 29995,
    taxTxt: `Inclusive of all taxes`,
    category: "Classic",
    collection: "Luxora Signature Collection",
    availability: "Limited Stock",
    // image: "../productsLists/Watch_assets/8.jpeg",
    about: "A premium gold-finished timepiece crafted for elegance.",
    image: "./productsLists/products_assets/luxoraGold8.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic Chronograph",
      caseMaterial: "Oystersteel",
      strapMaterial: "Oyster Bracelet",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Racing Heritage",
      "Chronograph Function",
      "Swiss Made",
      "Chronometer Certified",
      "Preminum Quality",
    ],
  },

  {
    id: 9,
    brand: "./assets/logo1.png ",

    name: "Luxora Midnight Crown",
    price: 28345,
    taxTxt: `Inclusive of all taxes`,
    category: "Luxury Sports",
    collection: "Luxora Elite Collection",
    availability: "Limited Stock",
    collection: "Luxora Prestige Collection",
    availability: "Limited Stock",
    // image: "../productsLists/Watch_assets/9.jpeg",
    about: "A bold black luxury watch designed for modern style.",
    image: "./productsLists/products_assets/luxoraMidnight9.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Stainless Steel",
      strapMaterial: "Premium Steel Bracelet",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Premium Finish",
      "Scratch Resistant",
      "5-Year Warranty",
      "Luxury Design",
      "Preminum Quality",
    ],
  },

  {
    id: 10,
    brand: "./assets/logo1.png ",
    name: "Luxora Imperial Chrono",
    price: 28345,
    taxTxt: `Inclusive of all taxes`,
    category: "Chronograph",
    collection: "Ocean Master Collection",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/10.jpeg",
    about: "A sophisticated chronograph with luxury styling.",
    image: "./productsLists/products_assets/luxorachrono10.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Stainless Steel",
      strapMaterial: "Premium Steel Bracelet",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Premium Finish",
      "Scratch Resistant",
      "5-Year Warranty",
      "Luxury Design",
      "Preminum Quality",
    ],
  },

  {
    id: 11,
    brand: "./assets/omega logo.png",
    name: "Omega Seamaster Diver",
    price: 6200,
    taxTxt: `Inclusive of all taxes`,
    category: "Diving",
    collection: "Racing Prestige Collection",
    availability: "Available Now",
    // image: "../productsLists/Watch_assets/11.jpeg",
    image: "./productsLists/products_assets/omegaspeedmaster11.png",
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
      glass: "Sapphire Crystal",
    },

    features: [
      "Professional Diving Watch",
      "Helium Escape Valve",
      "Swiss Made",
      "Chronometer Certified",
      "Preminum Quality",
    ],
  },

  // Products of cards

  {
    id: 12,
    brand: "./assets/rolex logo.png",
    name: "Rolex Cosmograph",
    taxTxt: `Inclusive of all taxes`,
    price: 8499,
    category: "Chronograph",
    collection: "Cosmic Heritage Collection",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/12.jpeg",
    image: "./productsLists/products_assets/rolexcosmgraph12.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic Chronograph",
      caseMaterial: "Oystersteel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Motorsport Inspired",
      "Chronograph Function",
      "Swiss Made",
      "Premium Finish",
      "Preminum Quality",
    ],

    about: "Modern green edition inspired by luxury motorsport.",
  },

  {
    id: 13,
    brand: "./assets/omega logo.png",
    name: "Omega Cosmic",
    price: 4659,
    category: "Classic",
    taxTxt: `Inclusive of all taxes`,
    collection: "Blue Signature Collection",
    availability: "Available Now",
    // image: "../productsLists/Watch_assets/13.jpeg",
    about: "Elegant black and silver watch for everyday luxury.",
    image: "./productsLists/products_assets/omegacosmic13.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Steel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "50m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Classic Design",
      "Swiss Made",
      "Elegant Styling",
      "Scratch Resistant",
      "Preminum Quality",
    ],
  },

  {
    id: 14,
    brand: "./assets/rolex logo.png",

    name: "Rolex Blue",
    price: 8789,
    category: "Luxury Sports",
    taxTxt: `Inclusive of all taxes`,
    collection: "Sport Performance Collection",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/14.jpeg",
    about: "A striking blue edition with premium craftsmanship.",
    image: "./productsLists/products_assets/rolexblue14.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Oystersteel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Luxury Sports Design",
      "Swiss Made",
      "Premium Finish",
      "Scratch Resistant",
      "Preminum Quality",
    ],
  },

  {
    id: 15,
    brand: "./assets/omega logo.png",
    name: "Omega Speed",
    price: 4660,
    taxTxt: `Inclusive of all taxes`,
    category: "Chronograph",
    collection: "Black Edition Collection",
    availability: "Available Now",
    // image: "../productsLists/Watch_assets/15.jpeg",
    about: "Modern silver edition with a sporty appearance.",
    image: "./productsLists/products_assets/omegspeed15.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic Chronograph",
      caseMaterial: "Steel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Chronograph Function",
      "Sporty Design",
      "Swiss Made",
      "Premium Finish",
      "Preminum Quality",
    ],
  },

  {
    id: 16,
    brand: "./assets/patek philppe logo.png",
    name: "Patek Philippe",
    price: 7799,
    taxTxt: `Inclusive of all taxes`,
    category: "Classic",
    collection: "Monaco Racing Collection",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/16.jpeg",
    about: "Luxury silver edition with timeless Swiss design.",
    image: "./productsLists/products_assets/patekblack16.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Steel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "120m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Elegant Styling",
      "Swiss Made",
      "Luxury Finish",
      "Scratch Resistant",
      "Preminum Quality",
    ],
  },

  {
    id: 17,
    brand: "./assets/tag heuer logo.png",
    taxTxt: `Inclusive of all taxes`,
    name: "Monaco Black Edition",
    price: 4890,
    category: "Chronograph",
    collection: "Excellence Collection",
    availability: "Available Now",
    // image: "../productsLists/Watch_assets/17.jpeg",
    about: "Black striped edition inspired by racing heritage.",
    image: "./productsLists/products_assets/monocblack17.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic Chronograph",
      caseMaterial: "Steel",
      strapMaterial: "Leather Strap",
      waterResistance: "100m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Racing Heritage",
      "Chronograph Function",
      "Square Dial Design",
      "Swiss Made",
      "Preminum Quality",
    ],
  },

  {
    id: 18,
    brand: "./assets/Vacheron_Constantin_logo.png",
    name: "Vacheron Constantin",
    price: 8599,
    taxTxt: `Inclusive of all taxes`,
    category: "Luxury Sports",
    collection: "Silver Prestige Collection",
    availability: "In Stock",
    // image: "../productsLists/Watch_assets/18.jpeg",
    about: "Golden blue edition representing fine Swiss craftsmanship.",
    image: "./productsLists/products_assets/vacheron constanin18.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "18K Gold",
      strapMaterial: "Steel Bracelet",
      waterResistance: "150m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Fine Swiss Craftsmanship",
      "Luxury Sports Design",
      "Swiss Made",
      "Premium Finish",
      "Preminum Quality",
    ],
  },

  {
    id: 19,
    brand: "./assets/patek philppe logo.png",
    name: "Patek Philippe Silver",
    taxTxt: `Inclusive of all taxes`,
    price: 7545,
    category: "Classic",
    // image: "../productsLists/Watch_assets/19.jpeg",
    about: "Golden silver edition with elegant and refined styling.",
    image: "./productsLists/products_assets/pateksliver19.png",
    ratings: "⭐⭐⭐⭐",
    ratingsNo: "4.8 (124 reviews)",
    cartButton: "Add to Cart",
    buyButton: "Buy Now",
    specifications: {
      movement: "Automatic",
      caseMaterial: "Steel",
      strapMaterial: "Steel Bracelet",
      waterResistance: "120m",
      glass: "Sapphire Crystal",
    },

    features: [
      "Timeless Design",
      "Swiss Made",
      "Elegant Styling",
      "Premium Finish",
      "Preminum Quality",
    ],
  },
];

const searchInput = document.getElementById("inputDisplay");
const suggest = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const searchValues = searchInput.value.toLowerCase();
  suggest.innerHTML = "";
  if (searchValues === "") {
    return;
  }

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(searchValues),
  );

  results.slice(0, 5).forEach((product) => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("itemBox");

    const itemImg = document.createElement("img");
    itemImg.classList.add("itemImg");

    itemBox.append(itemImg);

    const itemName = document.createElement("p");
    itemName.textContent = product.name;
    itemImg.src = `${product.image}`;

    itemBox.addEventListener("click", () => {
      window.location.href = `./searchBar/searchProducts.html?id=${product.id} `;
      suggest.innerHTML = "";
    });
    itemBox.appendChild(itemName);
    suggest.appendChild(itemBox);
    if (product.name.includes("Luxora")) {
      const goldPar = document.createElement("p");
      goldPar.classList.add("goldTxt");
      goldPar.textContent = `#Editon Watch`;

      itemBox.style.background =
        "linear-gradient(345deg, #8b4104, #f4be0b, #e5be4f, #281c00)";
      itemBox.addEventListener("mouseover", () => {
        itemBox.style.background =
          "linear-gradient(135deg, #ff1d1d, #f4be0b, #e06100, #6e4d00)";
      });
      itemBox.addEventListener("mouseout", () => {
        itemBox.style.background =
          "linear-gradient(135deg, #ff831d, #f4be0b, #ffd560, #6e4d00)";
      });

      itemBox.appendChild(goldPar);
    }
  });
});
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  const searchValues = searchInput.value.trim().toLowerCase();
  if (searchValues === "" || searchValues.length < 2) {
    alert("Invalid Inputs");
    return;
  }
  const products1 = products.filter((item) =>
    item.name.toLowerCase().includes(searchValues),
  );

  if (products1.length > 0) {
    const productIds = products1.map((product) => product.id);

    localStorage.setItem("productIds", JSON.stringify(productIds));
    window.location.href = `./searchBar/resultsSearch.html`;
  } else {
    alert("Sry!! No watches found.");
  }
});

const viewBtn = document.getElementById("viewAllBtn");
viewBtn.addEventListener("click", () => {
  window.location.href = `productsLists/products.html`;
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    // window.location.href=`products/products.html?id=${id}`;
    // window.location.href = `./redirect-links/product-details.html?id=${id} `
    window.location.href = `./searchBar/searchProducts.html?id=${id} `;
  });
});

const cards1 = document.querySelectorAll(".card1");

cards1.forEach((card1) => {
  card1.addEventListener("click", () => {
    const id1 = card1.dataset.id;
    // window.location.href=`products/products.html?id=${id}`;
    // window.location.href = `./redirect-links/product-details.html?id=${id1} `
    window.location.href = `./searchBar/searchProducts.html?id=${id1} `;
  });
});

const exploreBtn = document.querySelectorAll(".exploreBtn");

exploreBtn.forEach((btns) => {
  btns.addEventListener("click", () => {
    const ids3 = btns.dataset.id;

    window.location.href = `./searchBar/searchProducts.html?id=${ids3} `;
  });
});

const cartSection = document.getElementById("carts");
cartSection.addEventListener("click", () => {
  window.location.href = `./carts/cart.html`;
});
