// Product Database
const products = {
    men: [
        { id: 'm1', name: 'Classic Oxford Shirt', price: 59, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop', desc: 'Breathable cotton, regular fit.', sizes: ['S','M','L','XL'] },
        { id: 'm2', name: 'Slim Fit Chinos', price: 79, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop', desc: 'Stretch comfort, modern look.', sizes: ['S','M','L','XL'] },
        { id: 'm3', name: 'Wool Blend Blazer', price: 149, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop', desc: 'Elegant and warm.', sizes: ['S','M','L','XL'] },
        { id: 'm4', name: 'Graphic Tee', price: 29, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop', desc: '100% organic cotton.', sizes: ['S','M','L','XL'] },
        { id: 'm5', name: 'Hooded Sweatshirt', price: 69, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', desc: 'Cozy fleece interior.', sizes: ['S','M','L','XL'] },
        { id: 'm6', name: 'Denim Jacket', price: 89, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop', desc: 'Classic blue denim.', sizes: ['S','M','L','XL'] }
    ],
    women: [
        { id: 'w1', name: 'Flowing Midi Dress', price: 89, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop', desc: 'Eco-friendly viscose.', sizes: ['S','M','L','XL'] },
        { id: 'w2', name: 'Cropped Cashmere Sweater', price: 119, image: 'https://images.unsplash.com/photo-1434389674359-503a6ba9f34b?w=400&h=500&fit=crop', desc: 'Ultra-soft blend.', sizes: ['S','M','L','XL'] },
        { id: 'w3', name: 'High-Waist Trousers', price: 74, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', desc: 'Tailored fit.', sizes: ['S','M','L','XL'] },
        { id: 'w4', name: 'Silk Blouse', price: 99, image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop', desc: 'Luxurious satin.', sizes: ['S','M','L','XL'] },
        { id: 'w5', name: 'Leather Skirt', price: 109, image: 'https://images.unsplash.com/photo-1583496661160-f3b88c1b1c6a?w=400&h=500&fit=crop', desc: 'Faux leather.', sizes: ['S','M','L','XL'] },
        { id: 'w6', name: 'Oversized Cardigan', price: 84, image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=400&h=500&fit=crop', desc: 'Chunky knit.', sizes: ['S','M','L','XL'] }
    ],
    kids: [
        { id: 'k1', name: 'Cotton Romper', price: 34, image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop', desc: 'Soft on skin.', sizes: ['2T','3T','4T','5T'] },
        { id: 'k2', name: 'Denim Overalls', price: 44, image: 'https://images.unsplash.com/photo-1622290291468-a28a7a7dcf7f?w=400&h=500&fit=crop', desc: 'Adjustable straps.', sizes: ['2T','3T','4T','5T'] },
        { id: 'k3', name: 'Graphic Hoodie', price: 39, image: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=400&h=500&fit=crop', desc: 'Fun prints.', sizes: ['2T','3T','4T','5T'] },
        { id: 'k4', name: 'Plaid Shirt', price: 36, image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop', desc: 'Tartan style.', sizes: ['2T','3T','4T','5T'] },
        { id: 'k5', name: 'Leggings Set', price: 42, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop', desc: '2-piece set.', sizes: ['2T','3T','4T','5T'] },
        { id: 'k6', name: 'Puffer Vest', price: 49, image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&h=500&fit=crop', desc: 'Lightweight warm.', sizes: ['2T','3T','4T','5T'] }
    ]
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

// Update cart display
function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').innerText = count;
    const cartContainer = document.getElementById('cartItemsList');
    const totalSpan = document.getElementById('cartTotalPrice');
    let total = 0;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty</p>';
        totalSpan.innerText = '$0.00';
        return;
    }
    
    let html = '';
    cart.forEach((item, idx) => {
        total += item.price * item.qty;
        html += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div>$${item.price} x ${item.qty}</div>
                    <div>Size: ${item.size}</div>
                </div>
                <button class="cart-item-remove" data-idx="${idx}"><i class="fas fa-trash"></i></button>
            </div>
        `;
    });
    cartContainer.innerHTML = html;
    totalSpan.innerText = `$${total.toFixed(2)}`;
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.dataset.idx);
            cart.splice(idx, 1);
            saveCart();
        });
    });
}

// Add to cart function
function addToCart(product, size) {
    if (!size) { 
        alert('Please select a size'); 
        return false; 
    }
    const existing = cart.find(i => i.id === product.id && i.size === size);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1, size: size });
    }
    saveCart();
    alert(`${product.name} added to cart!`);
    return true;
}

// Render all products
function renderProducts() {
    for (let cat of ['men', 'women', 'kids']) {
        const container = document.getElementById(`${cat}Products`);
        if (!container) continue;
        container.innerHTML = '';
        products[cat].forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${p.image}" class="product-img" data-id="${p.id}" data-cat="${cat}">
                <div class="product-info">
                    <div class="product-title">${p.name}</div>
                    <div class="product-price">$${p.price}</div>
                    <button class="add-to-cart" data-product='${JSON.stringify(p)}'>Add to Cart</button>
                </div>
            `;
            card.querySelector('.product-img').addEventListener('click', () => openModal(p, cat));
            const addBtn = card.querySelector('.add-to-cart');
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                let selectedSize = prompt("Enter size (S/M/L/XL for adults, 2T-5T for kids):", "M");
                if(selectedSize) addToCart(p, selectedSize);
            });
            container.appendChild(card);
        });
    }
}

// Modal for view_item
let currentSelectedSize = null;
let currentProduct = null;

function openModal(product, category) {
    currentProduct = product;
    currentSelectedSize = null;
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <p><strong>$${product.price}</strong></p>
        <div class="size-select" id="modalSizes"></div>
        <button id="modalAddToCart" class="checkout-btn" style="margin-top:16px;">Add to Cart</button>
    `;
    const sizeContainer = document.getElementById('modalSizes');
    product.sizes.forEach(sz => {
        const btn = document.createElement('button');
        btn.innerText = sz;
        btn.classList.add('size-btn');
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentSelectedSize = sz;
        });
        sizeContainer.appendChild(btn);
    });
    modal.style.display = 'flex';
    document.getElementById('modalAddToCart').onclick = () => {
        if (!currentSelectedSize) { 
            alert('Please select a size'); 
            return; 
        }
        addToCart(product, currentSelectedSize);
        modal.style.display = 'none';
    };
}

// Checkout function - redirect to thank you page
function beginCheckout() {
    if (cart.length === 0) { 
        alert('Your cart is empty! Please add items before checkout.'); 
        return; 
    }
    
    // Store cart data in sessionStorage for the thank you page
    sessionStorage.setItem('checkoutCart', JSON.stringify(cart));
    const total = document.getElementById('cartTotalPrice').innerText;
    sessionStorage.setItem('checkoutTotal', total);
    
    // Clear the cart after purchase
    cart = [];
    saveCart();
    
    // Redirect to thank you page
    window.location.href = 'thankyou.html';
}

// Carousel functionality
let slideIndex = 0;
function initCarousel() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!slides.length || !dotsContainer) return;
    
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
    
    function goToSlide(idx) { 
        slideIndex = (idx + slides.length) % slides.length;
        const carouselSlides = document.querySelector('.carousel-slides');
        if (carouselSlides) {
            carouselSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
        document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
    }
    
    window.goToSlide = goToSlide;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(slideIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(slideIndex + 1));
    
    goToSlide(0);
    setInterval(() => goToSlide(slideIndex + 1), 5000);
}

// Customer Reviews
const reviews = [
    { name: 'Sarah J.', rating: 5, text: 'Amazing quality and fast shipping! The fabric is so soft and comfortable.' },
    { name: 'David L.', rating: 5, text: 'The minimalist aesthetic is perfect. My new favorite brand!' },
    { name: 'Mia Chen', rating: 4, text: 'Loved the kids collection, super soft and durable for active toddlers.' },
    { name: 'James Wilson', rating: 5, text: 'Excellent customer service and the clothes fit perfectly.' }
];

function renderReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) return;
    
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="stars">${stars}</div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-name">— ${review.name}</div>
        `;
        reviewsContainer.appendChild(reviewCard);
    });
}

// Cart sidebar functionality
function initCartSidebar() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('active');
        });
    }
    
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('active');
        });
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('active');
        });
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', beginCheckout);
    }
}

// Modal close functionality
function initModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Newsletter form
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
}

// Mobile menu
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderReviews();
    updateCartUI();
    initCarousel();
    initCartSidebar();
    initModal();
    initNewsletter();
    initMobileMenu();
});