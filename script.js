// Sample product data
const products = [
    { id: 1, name: "iPhone 15", description: "Latest iPhone model", price: 79900, image: "iphone.jpg" },
    { id: 2, name: "Nike Shoes", description: "Comfortable running shoes", price: 4200, image: "nike.jpg" },
    { id: 3, name: "Sony Headphones", description: "Noise cancelling headphones", price: 12000, image: "sony.jpg" },
    { id: 4, name: "MacBook Pro", description: "High-performance laptop", price: 129900, image: "macbook.jpg" }
];

// Sample comparison data
const comparisonData = {
    "iPhone 15": { "Amazon": 79900, "Flipkart": 78499, "Myntra": 80000 },
    "Nike Shoes": { "Amazon": 4200, "Flipkart": 3999, "Myntra": 4150 },
    "Sony Headphones": { "Amazon": 12000, "Flipkart": 11800, "Myntra": 12200 },
    "MacBook Pro": { "Amazon": 129900, "Flipkart": 128999, "Myntra": 130000 }
};

// Cart array to hold cart items
let cart = [];

// Function to display featured products
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featuredProducts');
    featuredProductsContainer.innerHTML = '';

    products.slice(0, 2).forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        featuredProductsContainer.appendChild(productCard);
    });
}

// Function to display all products in the shop
function displayShopProducts() {
    const shopProductsContainer = document.getElementById('shopProducts');
    shopProductsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        shopProductsContainer.appendChild(productCard);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
        alert(`${product.name} added to cart!`);
    }
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price.toLocaleString()} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalContainer.innerHTML = `<p>Total: ₹${total.toLocaleString()}</p>`;
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Function to generate the comparison table
function generateComparisonTable() {
    const comparisonTableContainer = document.getElementById('comparisonTable');
    let tableHTML = '<table class="comparison-table"><tr><th>Product</th>';

    // Get all unique websites
    const websites = [];
    Object.values(comparisonData).forEach(product => {
        Object.keys(product).forEach(website => {
            if (!websites.includes(website)) {
                websites.push(website);
            }
        });
    });

    // Add website headers
    websites.forEach(website => {
        tableHTML += `<th>${website}</th>`;
    });
    tableHTML += '</tr>';

    // Add product rows
    for (const [productName, prices] of Object.entries(comparisonData)) {
        tableHTML += `<tr><td>${productName}</td>`;
        websites.forEach(website => {
            const price = prices[website] || 'N/A';
            tableHTML += `<td>${price !== 'N/A' ? '₹' + price.toLocaleString() : 'N/A'}</td>`;
        });
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    comparisonTableContainer.innerHTML = tableHTML;

    // Highlight lowest prices
    Object.entries(comparisonData).forEach(([productName, prices]) => {
        const minPrice = Math.min(...Object.values(prices));
        Object.entries(prices).forEach(([website, price]) => {
            if (price === minPrice) {
                const rowIndex = Object.keys(comparisonData).indexOf(productName) + 1;
                const colIndex = websites.indexOf(website) + 2; // +2 for product name column and 1-based index
                const cell = document.querySelector(`.comparison-table tr:nth-child(${rowIndex}) td:nth-child(${colIndex})`);
                if (cell) {
                    cell.classList.add('lowest-price');
                }
            }
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    displayShopProducts();
    updateCart();
    generateComparisonTable();

    // Handle navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Show home section by default
    document.getElementById('home').style.display = 'block';
});

// Make functions globally accessible for HTML onclick events
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
