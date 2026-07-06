const cardContainer = document.getElementById("cardContainer");

const cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);


cart.forEach((product) => {
    const card = document.createElement("div");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = `❌`
    removeBtn.classList.add("removeBtn")
    card.classList.add("card");
    card.innerHTML = `
     <img id="cartProductImg"  src="${product.image}">
            <div>
            <img src="${product.brand}">
            <h2>${product.name}</h2>
             <p id="pricePar">₹ ${product.price.toLocaleString()}</p>
              <p id="categoryPar">${product.category}</p>
               <p id="aboutPar">${product.about}</p>
               </div>`

    card.appendChild(removeBtn)
    cardContainer.appendChild(card);

    card.addEventListener("dblclick", () => {
        window.location.href = `/searchBar/searchProducts.html?id=${product.id}`
        
    })
    removeBtn.addEventListener("click", () => {
        const updatedCart = cart.filter(item => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        location.reload()


    })
})