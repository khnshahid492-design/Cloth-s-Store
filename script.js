// Initialize dataLayer for GTM
window.dataLayer = window.dataLayer || [];

// Cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Product database for modal view
const productDatabase = {
    m1: { id: 'm1', name: 'Classic Oxford Shirt', price: 59, desc: 'Breathable cotton, regular fit. Perfect for office or casual wear.', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Men' },
    m2: { id: 'm2', name: 'Slim Fit Chinos', price: 79, desc: 'Stretch comfort, modern look. Versatile pants for any occasion.', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Men' },
    m3: { id: 'm3', name: 'Wool Blend Blazer', price: 149, desc: 'Elegant and warm. Perfect for formal events.', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Men' },
    m4: { id: 'm4', name: 'Graphic Tee', price: 29, desc: '100% organic cotton. Comfortable and stylish.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Men' },
    m5: { id: 'm5', name: 'Hooded Sweatshirt', price: 69, desc: 'Cozy fleece interior. Perfect for cold days.', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Men' },
    m6: { id: 'm6', name: 'Denim Jacket', price: 89, desc: 'Classic blue denim. Timeless style.', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Men' },
    w1: { id: 'w1', name: 'Flowing Midi Dress', price: 89, desc: 'Eco-friendly viscose. Flowing and elegant.', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Women' },
    w2: { id: 'w2', name: 'Cropped Cashmere Sweater', price: 119, desc: 'Ultra-soft blend. Luxurious feel.', image: 'https://images.unsplash.com/photo-1434389674359-503a6ba9f34b?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Women' },
    w3: { id: 'w3', name: 'High-Waist Trousers', price: 74, desc: 'Tailored fit. Professional and chic.', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Women' },
    w4: { id: 'w4', name: 'Silk Blouse', price: 99, desc: 'Luxurious satin. Perfect for evening wear.', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Women' },
    w5: { id: 'w5', name: 'Leather Skirt', price: 109, desc: 'Faux leather. Edgy and modern.', image: 'https://images.unsplash.com/photo-1583496661160-f3b88c1b1c6a?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Women' },
    w6: { id: 'w6', name: 'Oversized Cardigan', price: 84, desc: 'Chunky knit. Cozy and comfortable.', image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=400&h=500&fit=crop', sizes: ['S', 'M', 'L', 'XL'], category: 'Women' },
    k1: { id: 'k1', name: 'Cotton Romper', price: 34, desc: 'Soft on skin. Perfect for summer.', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop', sizes: ['2T', '3T', '4T', '5T'], category: 'Kids' },
    k2: { id: 'k2', name: 'Denim Overalls', price: 44, desc: 'Adjustable straps. Durable and cute.', image: 'https://images.unsplash.com/photo-1622290291468-a28a7a7dcf7f?w=400&h=500&fit=crop', sizes: ['2T', '3T', '4T', '5T'], category: 'Kids' },
    k3: { id: 'k3', name: 'Graphic Hoodie', price: 39, desc: 'Fun prints. Kids love them.', image: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=400&h=500&fit=crop', sizes: ['2T', '3T', '4T', '5T'], category: 'Kids' },
    k4: { id: 'k4', name: 'Plaid Shirt', price: 36, desc: 'Tartan style. Classic pattern.', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop', sizes: ['2T', '3T', '4T', '5T'], category: 'Kids' },
    k5: { id: 'k5', name: 'Leggings Set', price: 42, desc: '2-piece set. Comfortable and stylish.', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop', sizes: ['2T', '3T', '4T', '5T'], category: 'Kids' },
    k6: { id: 'k6', name: 'Puffer Vest', price: 49, desc: 'Lightweight warm. Perfect for layering.', image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&h=500&fit=crop', sizes: ['2T', '3T', '4T', '5T'], category: 'Kids' }
};

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

// Add to Cart function
function addToCart(id, name, price, category) {
    let selectedSize = prompt(`Select size for ${name}:\nAvailable sizes: S, M, L, XL`, "M");
    
    if (!selectedSize) {
        return false;
    }
    
    // Check if product already in cart with same size
    const existing = cart.find(item => item.id === id && item.size === selectedSize);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            category: category,
            size: selectedSize,
            qty: 1,
            image: productDatabase[id]?.image || ''
        });
    }
    
    saveCart();
    
    // ========== GTM dataLayer Push ==========
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        'event': 'add_to_cart',
        'ecommerce': {
            'currency': 'USD',
            'value': price,
            'items': [{
                'item_id': id,
                'item_name': name,
                'price': price,
                'quantity': 1,
                'item_category': category,
                'item_size': selectedSize
            }]
        }
    });
    
    console.log('✓ GTM Event: add_to_cart', { id, name, price, category, size: selectedSize });
    // =======================================
    
    alert(`${name} (Size: ${selectedSize}) added to cart!`);
    
    // Close cart sidebar if open and reopen to show updated cart
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartSidebar.classList.contains('open')) {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        setTimeout(() => {
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('active');
        }, 100);
    }
    
    return true;
}

// View Item function
function viewItem(productId) {
    const product = productDatabase[productId];
    if (!product) return;
    
    // ========== GTM dataLayer Push for view_item ==========
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        'event': 'view_item',
        'ecommerce': {
            'currency': 'USD',
            'value': product.price,
            'items': [{
                'item_id': product.id,
                'item_name': product.name,
                'price': product.price,
                'item_category': product.category
            }]
        }
    });
    
    console.log('✓ GTM Event: view_item', { id: product.id, name: product.name });
    // ===================================================
    
    // Open modal with product details
    openProductModal(product);
}

// Open product modal
let currentSelectedSize = null;

function openProductModal(product) {
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
        addToCart(product.id, product.name, product.price, product.category);
        modal.style.display = 'none';
    };
}

// Begin Checkout function
function beginCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add items before checkout.');
        return;
    }
    
    // ========== GTM dataLayer Push for begin_checkout ==========
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const items = cart.map(item => ({
        'item_id': item.id,
        'item_name': item.name,
        'price': item.price,
        'quantity': item.qty,
        'item_category': item.category,
        'item_size': item.size
    }));
    
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        'event': 'begin_checkout',
        'ecommerce': {
            'currency': 'USD',
            'value': total,
            'items': items
        }
    });
    
    console.log('✓ GTM Event: begin_checkout', { total, itemCount: cart.length });
    // ===========================================================
    
    // Store cart data for thank you page
    sessionStorage.setItem('checkoutCart', JSON.stringify(cart));
    sessionStorage.setItem('checkoutTotal', `$${total.toFixed(2)}`);
    
    // Clear cart
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
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(slideIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(slideIndex + 1));
    
    goToSlide(0);
    setInterval(() => goToSlide(slideIndex + 1), 5000);
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

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    initCarousel();
    initCartSidebar();
    initModal();
    initNewsletter();
    initMobileMenu();
});
