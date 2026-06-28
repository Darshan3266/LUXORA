

//dropmenu btn for mobile responivenss
const menuBox = document.getElementById("menuBox");
function menuBar() {
  if (menuBox.style.display === "none") {
    menuBox.style.display = "block";


  }
  else {
    menuBox.style.display = "none"
  }

}

//scrollBtn in homepage
const scrollbtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollbtn.style.display = "block";

  }
  else {
    scrollbtn.style.display = "none";
  }
})

//fade scroll animation
const fadeConts = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.3
})
fadeConts.forEach((elements) => {
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
    brand: "Rolex",
    name: "Rolex Submariner",
    price: 12500,
    category: "Diving",
    image: "/productsLists/products_assets/rolex_submariner1.png",

    about: "An iconic luxury diving watch known for its timeless design and durability."
  },

  {
    id: 2,
    brand: "Omega",
    name: "Omega Speedmaster Moonwatch",
    price: 7800,
    category: "Chronograph",
    image: "/productsLists/products_assets/omega_speedmaster2.png",


    about: "The legendary Moonwatch worn during NASA missions."
  },

  {
    id: 3,
    brand: "Patek Philippe",
    name: "Patek Philippe Nautilus",
    price: 35000,
    category: "Luxury Sports",
    image: "/productsLists/products_assets/Patek philpee3.png",


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


const searchInput = document.getElementById("inputDisplay");
const suggest = document.getElementById("suggestions");



searchInput.addEventListener("input", () => {


  const searchValues = searchInput.value.toLowerCase();
  suggest.innerHTML = "";
  if (searchValues === "") {
    return

  }

  const results = products.filter(p => p.name.toLowerCase().includes(searchValues));




  results.slice(0, 5).forEach(product => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("itemBox");


    const itemImg = document.createElement("img")
    itemImg.classList.add("itemImg")

    itemBox.append(itemImg)

    const itemName = document.createElement("p");
    itemName.textContent = product.name;
    itemImg.src = `${product.image}`

    itemBox.addEventListener("click", () => {
      window.location.href = `./searchBar/searchProducts.html?id=${product.id} `
      suggest.innerHTML = ""
    })
    itemBox.appendChild(itemName)
    suggest.appendChild(itemBox);
     if (product.name.includes("Luxora")) {
      const goldPar = document.createElement("p");
      goldPar.textContent = `#Editon Watch`

      itemBox.style.background = 'linear-gradient(135deg, #ff831d, #f9bf00, #ffd560, #6e4d00)';
      itemBox.addEventListener("mouseover", () => {
        itemBox.style.background = 'linear-gradient(135deg, #ff1d1d, #f4be0b, #e06100, #6e4d00)';

      })
      itemBox.addEventListener("mouseout", () => {
        itemBox.style.background = 'linear-gradient(135deg, #ff831d, #f4be0b, #ffd560, #6e4d00)';


      })

      itemBox.appendChild(goldPar);


    }






  });



});
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  const searchValues = searchInput.value.trim().toLowerCase()
  if (searchValues === "" || searchValues.length < 2) {
    alert("Invalid Inputs");
    return
  }
  const products1 = products.filter(item => item.name.toLowerCase().includes(searchValues));

  if (products1.length > 0) {
    localStorage.setItem("products1", JSON.stringify(products1));
    window.location.href = `./searchBar/resultsSearch.html`
  }
  else {


    alert("Sry!! No watches found.")
  }


})

const viewBtn = document.getElementById("viewAllBtn");
viewBtn.addEventListener("click", () => {
  window.location.href = `productsLists/products.html`
})



const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    // window.location.href=`products/products.html?id=${id}`;
    window.location.href = `./redirect-links/product-details.html?id=${id} `



  })
})

const cards1 = document.querySelectorAll(".card1");

cards1.forEach((card1) => {
  card1.addEventListener("click", () => {
    const id1 = card1.dataset.id;
    // window.location.href=`products/products.html?id=${id}`;
    window.location.href = `./redirect-links/product-details.html?id=${id1} `



  })
})













