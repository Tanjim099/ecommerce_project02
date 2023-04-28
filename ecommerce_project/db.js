let data = [
    {name: "boAt Airdopes 402",
    price: "404",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {name: "boAt Airdopes 402",
    price: "404",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {name: "boAt Airdopes 402",
    price: "404",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {name: "boAt Airdopes 402",
    price: "404",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {name: "boAt Airdopes 402",
    price: "404",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {name: "boAt Airdopes 402",
    price: "404",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {name: "boAt Airdopes 402",
    price: "404",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    }
];

const extraProductItems = document.getElementById("extra_product");
console.log(extraProductItems)

function check(){
    data.forEach(value =>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("extra_product");
        newDiv.innerHTML= `
        <img src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <button onclick="addToCard()">Add To Card</button>
        
        `;
        extraProductItems.appendChild(newDiv)
    })
}
check()