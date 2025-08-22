', function(e) {
            e.preventDefault();
            const targetId = this.get// Expanded product data
const products = [
    // Men's Clothing
    { id: 1, name: "Men's T-Shirt", description: "Casual cotton t-shirt", price: 999, image: "https://via.placeholder.com/200", category: "men", type: "clothing" },
    { id: 2, name: "Men's Jeans", description: "Slim fit jeans", price: 1999, image: "https://via.placeholder.com/200", category: "men", type: "clothing" },
    { id: 3, name: "Men's Formal Shirt", description: "Formal shirt for office wear", price: 1499, image: "https://via.placeholder.com/200", category: "men", type: "clothing" },
    { id: 4, name: "Men's Casual Shoes", description: "Comfortable casual shoes", price: 2499, image: "https://via.placeholder.com/200", category: "men", type: "shoes" },
    { id: 5, name: "Men's Sports Shoes", description: "Running shoes with cushioning", price: 3499, image: "https://via.placeholder.com/200", category: "men", type: "shoes" },

    // Women's Clothing
    { id: 6, name: "Women's Dress", description: "Floral print summer dress", price: 1999, image: "https://via.placeholder.com/200", category: "women", type: "clothing" },
    { id: 7, name: "Women's Top", description: "Casual top for everyday wear", price: 1299, image: "https://via.placeholder.com/200", category: "women", type: "clothing" },
    { id: 8, name: "Women's Jeans", description: "Skinny fit jeans", price: 2199, image: "https://via.placeholder.com/200", category: "women", type: "clothing" },
    { id: 9, name: "Women's Heels", description: "Elegant high heels", price: 2999, image: "https://via.placeholder.com/200", category: "women", type: "shoes" },
    { id: 10, name: "Women's Flats", description: "Comfortable flats for daily use", price: 1499, image: "https://via.placeholder.com/200", category: "women", type: "shoes" },

    // Electronics
    { id: 11, name: "iPhone 15", description: "Latest iPhone model", price: 79900, image: "https://via.placeholder.com/200", category: "electronics", type: "mobile" },
    { id: 12, name: "MacBook Pro", description: "High-performance laptop", price: 129900, image: "https://via.placeholder.com/200", category: "electronics", type: "laptop" },
    { id: 13, name: "Sony Headphones", description: "Noise cancelling headphones", price: 12000, image: "https://via.placeholder.com/200", category: "electronics", type: "accessories" },
    { id: 14, name: "Smart Watch", description: "Fitness tracking smart watch", price: 8999, image: "https://via.placeholder.com/200", category: "electronics", type: "accessories" },
    { id: 15, name: "Wireless Earbuds", description: "Bluetooth wireless earbuds", price: 3999, image: "https://via.placeholder.com/200", category: "electronics", type: "accessories" },

    // Men's Clothing (additional)
    { id: 16, name: "Men's Hoodie", description: "Warm hoodie for winter", price: 2499, image: "https://via.placeholder.com/200", category: "men", type: "clothing" },
    { id: 17, name: "Men's Shorts", description: "Casual shorts for summer", price: 1199, image: "https://via.placeholder.com/200", category: "men", type: "clothing" },
    { id: 18, name: "Men's Jacket", description: "Stylish jacket for winter", price: 3999, image: "https://via.placeholder.com/200", category: "men", type: "clothing" },
    { id: 19, name: "Men's Sneakers", description: "Trendy sneakers for casual wear", price: 2999, image: "https://via.placeholder.com/200", category: "men", type: "shoes" },
    { id: 20, name: "Men's Loafers", description: "Formal loafers for office wear", price: 3499, image: "https://via.placeholder.com/200", category: "men", type: "shoes" },

    // Women's Clothing (additional)
    { id: 21, name: "Women's Kurta", description: "Traditional Indian kurta", price: 1799, image: "https://via.placeholder.com/200", category: "women", type: "clothing" },
    { id: 22, name: "Women's Leggings", description: "Stretchy leggings for comfort", price: 999, image: "https://via.placeholder.com/200", category: "women", type: "clothing" },
    { id: 23, name: "Women's Blouse", description: "Silk blouse for traditional wear", price: 1499, image: "https://via.placeholder.com/200", category: "women", type: "clothing" },
    { id: 24, name: "Women's Sandals", description: "Comfortable sandals for summer", price: 1199, image: "https://via.placeholder.com/200", category: "women", type: "shoes" },
    { id: 25, name: "Women's Boots", description: "Stylish boots for winter", price: 3999, image: "https://via.placeholder.com/200", category: "women", type: "shoes" }
];

// Updated comparison data to include more products
const comparisonData = {
    "iPhone 15": { "Amazon": 79900, "Flipkart": 78499, "Myntra": 80000 },
    "Nike Shoes": { "Amazon": 4200, "Flipkart": 3999, "Myntra": 4150 },
    "Sony Headphones": { "Amazon": 12000, "Flipkart": 11800, "Myntra": 12200 },
    "MacBook Pro": { "Amazon": 129900, "Flipkart": 128999, "Myntra": 130000 },
    "Smart Watch": { "Amazon": 8999, "Flipkart": 8799, "Myntra": 9000 },
    "Wireless Earbuds": { "Amazon": 3999, "Flipkart": 3899, "Myntra": 4000 },
    "Men's Jeans": { "Amazon": 1999, "Flipkart": 1899, "Myntra": 2000 },
    "Women's Dress": { "Amazon": 1999, "Flipkart": 1899, "Myntra": 2000 }
};

// Cart array to hold cart items
let cart = [];

// Function to display featured products
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featuredProducts');
    featuredProductsContainer.innerHTML = '';

    products.slice(0, 4).forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        featuredProductsContainer.appendChild(productCard);
    });
}

// Function to display all products in the shop
function displayShopProducts(productsToDisplay) {
    const shopProductsContainer = document.getElementById('shopProducts');
    shopProductsContainer.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        shopProductsContainer.appendChild(productCard);
    });
}

// Function to filter products based on category
function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayShopProducts(filteredProducts);

    // Update active button
    document.querySelectorAll('.filters button').forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === category) {
            button.classList.add('active');
        }
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
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
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
    displayShopProducts(products);
    updateCart();
    generateComparisonTable();

    // Handle navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('clickAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Show home section by default
    document.getElementById('home').style.display = 'block';

    // Set default active filter button
    document.querySelector('.filters button').classList.add('active');
});

// Make functions globally accessible for HTML onclick events
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.filterProducts = filterProducts;

