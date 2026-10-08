/**
 * BOTMARKET - Full Featured Interactive Store Application
 * High performance Vanilla JavaScript
 */

(function () {
  'use strict';

  // ==========================================================
  // 1. PRODUCT CATALOG DATA
  // ==========================================================
  const PRODUCTS = [
    {
      id: 'p1',
      title: 'Apple iPhone 16 Pro Max 256GB Desert Titanium',
      category: 'smartphones',
      categoryName: 'Smartfonlar',
      price: 16490000,
      oldPrice: 18900000,
      discount: 13,
      rating: 4.9,
      reviewsCount: 230,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
      tag: 'hit',
      inStock: true,
      stockCount: 8,
      description: "Apple iPhone 16 Pro Max eng kuchli A18 Pro protsessori, yangilangan 48MP kameralar tizimi va chidamli titan korpusga ega. Displey 120Hz ProMotion texnologiyasiga ega.",
      specs: [
        'Protsessor: Apple A18 Pro (3 nm)',
        'Xotira: 256GB NVMe',
        'Ekran: 6.9" Super Retina XDR OLED',
        'Batareya: 4685 mAh (Tezkor quvvatlash 30W)'
      ]
    },
    {
      id: 'p2',
      title: 'Apple MacBook Pro 16" M3 Max 36GB / 1TB Space Black',
      category: 'laptops',
      categoryName: 'Noutbuklar',
      price: 28900000,
      oldPrice: 32500000,
      discount: 11,
      rating: 5.0,
      reviewsCount: 88,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
      tag: 'new',
      inStock: true,
      stockCount: 4,
      description: "Professional dizaynerlar va dasturchilar uchun ideal noutbuk. Liquid Retina XDR displey, 22 soatlik batareya va 16 yadroli GPU.",
      specs: [
        'Chip: Apple M3 Max 14-core CPU',
        'Operativ xotira: 36GB birlashgan xotira',
        'Xotira: 1TB SSD',
        'Displey: 16.2 dyuym 3456x2234 Liquid Retina XDR'
      ]
    },
    {
      id: 'p3',
      title: 'Nike Air Max Alpha Trainer 5 Sport Krossovkasi',
      category: 'shoes',
      categoryName: 'Poyabzallar',
      price: 1190000,
      oldPrice: 1550000,
      discount: 23,
      rating: 4.8,
      reviewsCount: 165,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
      tag: 'discount',
      inStock: true,
      stockCount: 15,
      description: "Maxsus havo yostig'i (Max Air) bilan jihozlangan qulay va engil krossovka. Yugurish, fitnes va kundalik kiyish uchun juda qulay.",
      specs: [
        'Mato: Havo o\'tkazuvchi to\'r va sintetik charm',
        'O\'lchamlar: 40, 41, 42, 43, 44',
        'Ishlab chiqarilgan: Vyetnam',
        'Kafolat: 6 oy rasmiy kafolat'
      ]
    },
    {
      id: 'p4',
      title: 'Apple Watch Ultra 2 Titanium 49mm GPS + Cellular',
      category: 'watches',
      categoryName: 'Soatlar',
      price: 9200000,
      oldPrice: 14150000,
      discount: 35,
      rating: 4.9,
      reviewsCount: 148,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      tag: 'hit',
      inStock: true,
      stockCount: 7,
      description: "Ekstremal sharoitlar va sport uchun yaratilgan aqlli soat. 3000 nit eng yorqin displey, ikki chastotali GPS va 100 metr suv o'tkazmaslik.",
      specs: [
        'Korpus: Titan 49 mm',
        'Ekran: Sapphire Crystal OLED 3000 nit',
        'Suvga chidamlilik: 100 metrgacha sho\'ng\'ish',
        'Batareya: 36 soatgacha oddiy, 72 soat tejamkor rejimda'
      ]
    },
    {
      id: 'p5',
      title: 'Sony PlayStation 5 Slim 1TB Digital Edition',
      category: 'appliances',
      categoryName: 'Texnika',
      price: 5890000,
      oldPrice: 6500000,
      discount: 9,
      rating: 4.9,
      reviewsCount: 310,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80',
      tag: 'hit',
      inStock: true,
      stockCount: 11,
      description: "Yangi ixcham korpusdagi afsonaviy PlayStation 5 konsoli. 4K 120Hz o'yinlar, ray-tracing va DualSense taktil tebranishlari.",
      specs: [
        'SSD: 1TB ultra tezkor NVMe',
        'Grafika: AMD Radeon RDNA 2 (10.3 TFLOPS)',
        'Video chiqishi: HDMI 2.1 4K/120Hz va 8K',
        'Komplekt: DualSense pulti va kabellar'
      ]
    },
    {
      id: 'p6',
      title: 'Samsung Galaxy S24 Ultra 12GB / 512GB Titanium Grey',
      category: 'smartphones',
      categoryName: 'Smartfonlar',
      price: 13800000,
      oldPrice: 15900000,
      discount: 13,
      rating: 4.8,
      reviewsCount: 195,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80',
      tag: 'new',
      inStock: true,
      stockCount: 9,
      description: "Galaxy AI sun'iy intellekti, o'rnatilgan S-Pen qalami va 200MP kamerasi bilan eng quvvatli Android flagmani.",
      specs: [
        'Protsessor: Snapdragon 8 Gen 3 for Galaxy',
        'Ekran: 6.8" Dynamic AMOLED 2X 2600 nit',
        'Kamera: 200MP + 50MP + 12MP + 10MP',
        'Batareya: 5000 mAh 45W quvvatlash'
      ]
    },
    {
      id: 'p7',
      title: 'Dior Sauvage Eau de Parfum Erkaklar Atiri 100ml',
      category: 'beauty',
      categoryName: 'Go\'zallik',
      price: 1850000,
      oldPrice: 2200000,
      discount: 16,
      rating: 4.9,
      reviewsCount: 112,
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
      tag: 'hit',
      inStock: true,
      stockCount: 14,
      description: "Dunyoning eng ommabop va jozibador parfyumi. Bergamot, vanil va yog'ochli notalarning nafis uyg'unligi. 100% original Frantsiya.",
      specs: [
        'Hajmi: 100 ml',
        'Turi: Eau de Parfum (EDP)',
        'Ishlab chiqaruvchi: Frantsiya',
        'Turg\'unligi: 24 soatgacha kiyimda saqlanadi'
      ]
    },
    {
      id: 'p8',
      title: 'Premium Qishki Oversize Erkaklar Xudisi (Qora)',
      category: 'clothing',
      categoryName: 'Kiyimlar',
      price: 380000,
      oldPrice: 520000,
      discount: 27,
      rating: 4.7,
      reviewsCount: 76,
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
      tag: 'discount',
      inStock: true,
      stockCount: 22,
      description: "100% paxta uch ipli matodan tikilgan juda iliq va zamonaviy xudi. Yuvilganda o'z rangini va shaklini yo'qotmaydi.",
      specs: [
        'Tarkibi: 100% tabiiy paxta (3-ipli futer)',
        'O\'lchamlar: S, M, L, XL, XXL',
        'Rang: Deep Black (chuqur qora)',
        'Fasl: Kuz / Qish'
      ]
    },
    {
      id: 'p9',
      title: 'Sony WH-1000XM5 Simsiz Shovqinni So\'ndiruvchi Quloqchin',
      category: 'smartphones',
      categoryName: 'Smartfonlar',
      price: 4350000,
      oldPrice: 4900000,
      discount: 11,
      rating: 4.9,
      reviewsCount: 142,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      tag: 'hit',
      inStock: true,
      stockCount: 6,
      description: "Soha yetakchisi bo'lgan shovqinni to'suvchi (Active Noise Cancelling) tizim, Hi-Res audio sifati va 30 soatlik tinimsiz avtonomiya.",
      specs: [
        'ANC: 8 mikrofonli faol shovqin to\'sish',
        'Drayver: 30 mm uglerod tolali drayver',
        'Batareya: 30 soat (ANC yoqilgan holda)',
        'Ulanish: Bluetooth 5.2, LDAC, AAC'
      ]
    },
    {
      id: 'p10',
      title: 'Xiaomi Robot Changyutgich X20+ Namlab Tozalash Bilan',
      category: 'appliances',
      categoryName: 'Texnika',
      price: 4950000,
      oldPrice: 5800000,
      discount: 15,
      rating: 4.8,
      reviewsCount: 94,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      tag: 'new',
      inStock: true,
      stockCount: 5,
      description: "O'zini o'zi tozalaydigan baza stansiyasiga ega aqlli robot. 6000 Pa tortish quvvati va lazerli xaritalash (LDS) orqali uyingizni xatosiz tozalaydi.",
      specs: [
        'Tortish kuchi: 6000 Pa',
        'Stansiya: Avtomatik chang bo\'shatish va latta yuvish',
        'Navigatsiya: LDS lazer + 3D to\'siqlardan qochish',
        'Ilova orqali boshqaruv: Mi Home (O\'zbekiston hududi)'
      ]
    },
    {
      id: 'p11',
      title: 'ASUS ROG Zephyrus G16 O\'yin Noutbuki RTX 4080',
      category: 'laptops',
      categoryName: 'Noutbuklar',
      price: 24500000,
      oldPrice: 27900000,
      discount: 12,
      rating: 4.9,
      reviewsCount: 52,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
      tag: 'hit',
      inStock: true,
      stockCount: 3,
      description: "Yupqa alyuminiy korpusdagi eng kuchli geyming quroli. 240Hz OLED displey va sun'iy intellektli sovutish tizimi.",
      specs: [
        'Protsessor: Intel Core Ultra 9 185H',
        'Grafika: NVIDIA GeForce RTX 4080 12GB',
        'Xotira: 32GB LPDDR5X + 1TB PCIe 4.0 SSD',
        'Ekran: 16" 2.5K 240Hz ROG Nebula OLED'
      ]
    },
    {
      id: 'p12',
      title: 'Zara Klassik Yengil Bahoriy Erkaklar Pidjagi',
      category: 'clothing',
      categoryName: 'Kiyimlar',
      price: 890000,
      oldPrice: 1200000,
      discount: 26,
      rating: 4.6,
      reviewsCount: 44,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
      tag: 'discount',
      inStock: true,
      stockCount: 18,
      description: "Kundalik biznes va erkin uslub uchun qulay, nafas oluvchi matoli erkaklar pidjagi. Zamonaviy slim-fit bichim.",
      specs: [
        'Material: 70% paxta, 30% zig\'ir tolasi',
        'Bichimi: Slim Fit',
        'Rang: Ochiq kulrang / Moviy',
        'O\'lchamlar: 48, 50, 52, 54'
      ]
    }
  ];

  // ==========================================================
  // 2. AUDIO SYNTHESIS ENGINE (Micro-interactions)
  // ==========================================================
  class SoundManager {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playPop() {
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {
        // audio fallback
      }
    }

    playSuccess() {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.09);
          gain.gain.setValueAtTime(0.15, now + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.09);
          osc.stop(now + idx * 0.09 + 0.25);
        });
      } catch (e) {}
    }
  }

  const sound = new SoundManager();

  // ==========================================================
  // 3. APPLICATION STATE
  // ==========================================================
  const state = {
    cart: JSON.parse(localStorage.getItem('bm_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('bm_wishlist')) || [],
    theme: localStorage.getItem('bm_theme') || 'dark',
    appliedPromo: null,
    filter: {
      category: 'all',
      maxPrice: 35000000,
      onlyDiscount: false,
      inStock: true,
      search: '',
      sortBy: 'popular'
    },
    heroSlideIndex: 0
  };

  // Helper: Format Price
  function formatSum(num) {
    return new Intl.NumberFormat('uz-UZ').format(num) + " so'm";
  }

  // ==========================================================
  // 4. TOAST NOTIFICATIONS
  // ==========================================================
  function showToast(message, type = 'success', icon = 'fa-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${icon} toast-icon"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-leave');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2800);
  }

  // ==========================================================
  // 5. RENDER PRODUCTS GRID
  // ==========================================================
  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    const badge = document.getElementById('productsCountBadge');
    if (!grid) return;

    let filtered = PRODUCTS.filter(prod => {
      // Category check
      if (state.filter.category !== 'all' && prod.category !== state.filter.category) {
        return false;
      }
      // Price check
      if (prod.price > state.filter.maxPrice) {
        return false;
      }
      // Only Discount check
      if (state.filter.onlyDiscount && !prod.discount) {
        return false;
      }
      // Stock check
      if (state.filter.inStock && !prod.inStock) {
        return false;
      }
      // Search check
      if (state.filter.search.trim() !== '') {
        const query = state.filter.search.toLowerCase();
        const matchTitle = prod.title.toLowerCase().includes(query);
        const matchDesc = prod.description.toLowerCase().includes(query);
        const matchCat = prod.categoryName.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchCat) return false;
      }
      return true;
    });

    // Sorting
    if (state.filter.sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.filter.sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.filter.sortBy === 'discount') {
      filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    } else if (state.filter.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (badge) {
      badge.textContent = `${filtered.length} ta tovar topildi`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filtered.map(prod => {
      const isWishlisted = state.wishlist.includes(prod.id);
      
      let tagHtml = '';
      if (prod.tag === 'hit') {
        tagHtml = `<span class="product-tag tag-hit"><i class="fa-solid fa-fire"></i> XIT SAVDO</span>`;
      } else if (prod.tag === 'new') {
        tagHtml = `<span class="product-tag tag-new"><i class="fa-solid fa-sparkles"></i> YANGI</span>`;
      } else if (prod.discount) {
        tagHtml = `<span class="product-tag tag-discount">-${prod.discount}%</span>`;
      }

      return `
        <div class="product-card" data-id="${prod.id}">
          <div class="product-image-container">
            ${tagHtml}
            <div class="product-card-actions">
              <button class="card-action-btn ${isWishlisted ? 'active' : ''}" 
                      onclick="window.marketApp.toggleWishlist('${prod.id}', event)" 
                      title="${isWishlisted ? 'Sevimlilardan o\'chirish' : 'Sevimlilarga qo\'shish'}">
                <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>
            <img src="${prod.image}" alt="${prod.title}" class="product-img" loading="lazy">
            <button class="btn-quick-view-trigger" onclick="window.marketApp.openQuickView('${prod.id}')">
              <i class="fa-solid fa-eye"></i> Tezkor ko'rish
            </button>
          </div>

          <div class="product-details">
            <div class="product-category-meta">${prod.categoryName}</div>
            <h3 class="product-title" title="${prod.title}">${prod.title}</h3>
            
            <div class="product-rating">
              <div class="stars">
                <i class="fa-solid fa-star"></i>
              </div>
              <span class="product-rating-score">${prod.rating}</span>
              <span>(${prod.reviewsCount} sharh)</span>
            </div>

            <div class="product-pricing">
              <span class="product-price-current">${formatSum(prod.price)}</span>
              ${prod.oldPrice ? `<span class="product-price-old">${formatSum(prod.oldPrice)}</span>` : ''}
            </div>

            <button class="btn-add-to-cart" onclick="window.marketApp.addToCart('${prod.id}')">
              <i class="fa-solid fa-cart-shopping"></i> Savatga olish
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // ==========================================================
  // 6. CART MANAGEMENT
  // ==========================================================
  function saveCart() {
    localStorage.setItem('bm_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  function addToCart(productId, quantity = 1) {
    sound.playPop();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: productId,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`"${product.title.slice(0, 24)}..." savatga qo'shildi!`, 'success', 'fa-cart-plus');
  }

  function changeCartQty(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    sound.playPop();
    saveCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    showToast("Mahsulot savatdan olib tashlandi", 'info', 'fa-trash');
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    state.appliedPromo = null;
    saveCart();
    showToast("Savat tozalandi", 'info', 'fa-circle-info');
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    const drawerCartCountEl = document.getElementById('drawerCartCount');
    const cartPreviewEl = document.getElementById('cartTotalPreview');
    const container = document.getElementById('cartItemsContainer');
    const subtotalEl = document.getElementById('cartSubtotal');
    const grandTotalEl = document.getElementById('cartGrandTotal');
    const discountLine = document.getElementById('discountLine');
    const discountAmountEl = document.getElementById('cartDiscountAmount');
    const shippingProgressText = document.getElementById('shippingProgressText');
    const shippingBarFill = document.getElementById('shippingBarFill');
    const checkoutBtn = document.getElementById('proceedToCheckoutBtn');

    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (drawerCartCountEl) drawerCartCountEl.textContent = `${totalCount} dona`;

    let subtotal = 0;
    state.cart.forEach(cartItem => {
      const prod = PRODUCTS.find(p => p.id === cartItem.id);
      if (prod) {
        subtotal += prod.price * cartItem.quantity;
      }
    });

    // Discount Calculation
    let discount = 0;
    if (state.appliedPromo) {
      if (state.appliedPromo.type === 'percent') {
        discount = Math.round(subtotal * (state.appliedPromo.value / 100));
      } else if (state.appliedPromo.type === 'fixed') {
        discount = state.appliedPromo.value;
      }
      if (discount > subtotal) discount = subtotal;
    }

    const grandTotal = Math.max(0, subtotal - discount);

    if (cartPreviewEl) cartPreviewEl.textContent = formatSum(grandTotal);
    if (subtotalEl) subtotalEl.textContent = formatSum(subtotal);
    if (grandTotalEl) grandTotalEl.textContent = formatSum(grandTotal);

    if (discountLine && discountAmountEl) {
      if (discount > 0) {
        discountLine.style.display = 'flex';
        discountAmountEl.textContent = `-${formatSum(discount)}`;
      } else {
        discountLine.style.display = 'none';
      }
    }

    // Free delivery progress (Target: 500,000 so'm)
    const freeDeliveryThreshold = 500000;
    if (shippingProgressText && shippingBarFill) {
      if (subtotal >= freeDeliveryThreshold) {
        shippingProgressText.innerHTML = `<span style="color:#10b981;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Tabriklaymiz! Siz uchun yetkazib berish mutlaqo BEPUL!</span>`;
        shippingBarFill.style.width = '100%';
        shippingBarFill.style.background = '#10b981';
      } else {
        const remaining = freeDeliveryThreshold - subtotal;
        const pct = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
        shippingProgressText.innerHTML = `Bepul yetkazib berish uchun yana <strong>${formatSum(remaining)}</strong> xarid qiling!`;
        shippingBarFill.style.width = `${pct}%`;
        shippingBarFill.style.background = 'var(--gradient-primary)';
      }
    }

    // Render Cart Items
    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="drawer-empty-box">
          <i class="fa-solid fa-basket-shopping"></i>
          <h4>Savatingiz hozircha bo'sh</h4>
          <p>O'zingizga ma'qul tovarlarni tanlang va savatga qo'shing!</p>
        </div>
      `;
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    container.innerHTML = state.cart.map(cartItem => {
      const prod = PRODUCTS.find(p => p.id === cartItem.id);
      if (!prod) return '';

      return `
        <div class="cart-item-card">
          <img src="${prod.image}" alt="${prod.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${prod.title}</h4>
            <div class="cart-item-price">${formatSum(prod.price * cartItem.quantity)}</div>
            
            <div class="cart-item-controls">
              <div class="qty-counter">
                <button class="qty-btn" onclick="window.marketApp.changeCartQty('${prod.id}', -1)">-</button>
                <span class="qty-val">${cartItem.quantity}</span>
                <button class="qty-btn" onclick="window.marketApp.changeCartQty('${prod.id}', 1)">+</button>
              </div>
            </div>
          </div>
          <button class="btn-remove-item" onclick="window.marketApp.removeFromCart('${prod.id}')" title="O'chirish">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join('');
  }

  // ==========================================================
  // 7. WISHLIST MANAGEMENT
  // ==========================================================
  function saveWishlist() {
    localStorage.setItem('bm_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
  }

  function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    sound.playPop();

    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast("Sevimlilardan olib tashlandi", 'info', 'fa-heart');
    } else {
      state.wishlist.push(productId);
      showToast("Sevimlilarga qo'shildi!", 'success', 'fa-heart');
    }

    saveWishlist();
    renderProducts();
  }

  function updateWishlistUI() {
    const wishlistCountEl = document.getElementById('wishlistCount');
    const drawerCountEl = document.getElementById('drawerWishlistCount');
    const container = document.getElementById('wishlistItemsContainer');

    if (wishlistCountEl) wishlistCountEl.textContent = state.wishlist.length;
    if (drawerCountEl) drawerCountEl.textContent = `${state.wishlist.length} ta`;

    if (!container) return;

    if (state.wishlist.length === 0) {
      container.innerHTML = `
        <div class="drawer-empty-box">
          <i class="fa-regular fa-heart"></i>
          <h4>Sevimlilar ro'yxati bo'sh</h4>
          <p>Yoqqan mahsulotlarning yurakchasini bosing va shu yerda saqlang!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = state.wishlist.map(id => {
      const prod = PRODUCTS.find(p => p.id === id);
      if (!prod) return '';

      return `
        <div class="cart-item-card">
          <img src="${prod.image}" alt="${prod.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${prod.title}</h4>
            <div class="cart-item-price">${formatSum(prod.price)}</div>
            <button class="btn btn-primary" style="margin-top:8px;padding:6px 12px;font-size:0.78rem;" 
                    onclick="window.marketApp.addToCart('${prod.id}')">
              <i class="fa-solid fa-cart-plus"></i> Savatga o'tkazish
            </button>
          </div>
          <button class="btn-remove-item" onclick="window.marketApp.toggleWishlist('${prod.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join('');
  }

  // ==========================================================
  // 8. PROMO CODES
  // ==========================================================
  function applyPromoCode() {
    const input = document.getElementById('promoInput');
    const status = document.getElementById('promoStatusMessage');
    if (!input || !status) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
      status.textContent = 'Promokodni kiriting!';
      status.className = 'promo-status error';
      return;
    }

    if (code === 'BOZOR2026') {
      state.appliedPromo = { code: 'BOZOR2026', type: 'percent', value: 10 };
      status.textContent = "10% chegirma muvaffaqiyatli qo'llandi! 🎉";
      status.className = 'promo-status success';
      sound.playSuccess();
    } else if (code === 'BOT50') {
      state.appliedPromo = { code: 'BOT50', type: 'fixed', value: 50000 };
      status.textContent = "50 000 so'm chegirma qo'llandi! 🎉";
      status.className = 'promo-status success';
      sound.playSuccess();
    } else {
      state.appliedPromo = null;
      status.textContent = "Noto'g'ri promokod kiritildi";
      status.className = 'promo-status error';
    }

    updateCartUI();
  }

  // ==========================================================
  // 9. QUICK VIEW MODAL
  // ==========================================================
  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const overlay = document.getElementById('quickViewOverlay');
    const content = document.getElementById('quickViewContent');
    if (!overlay || !content) return;

    content.innerHTML = `
      <div class="qv-grid">
        <div class="qv-image-box">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="qv-info">
          <span class="qv-badge">${product.categoryName}</span>
          <h2 class="qv-title">${product.title}</h2>
          
          <div class="qv-price-row">
            <span class="qv-current-price">${formatSum(product.price)}</span>
            ${product.oldPrice ? `<span class="qv-old-price">${formatSum(product.oldPrice)}</span>` : ''}
          </div>

          <p class="qv-desc">${product.description}</p>

          <ul class="qv-specs-list">
            ${product.specs.map(s => `<li><i class="fa-solid fa-check"></i> ${s}</li>`).join('')}
          </ul>

          <div class="qv-actions">
            <button class="btn btn-primary" onclick="window.marketApp.addToCart('${product.id}'); window.marketApp.closeQuickView();">
              <i class="fa-solid fa-cart-shopping"></i> Savatga qo'shish
            </button>
            <button class="btn btn-glass" onclick="window.marketApp.toggleWishlist('${product.id}');">
              <i class="fa-regular fa-heart"></i> Sevimlilar
            </button>
          </div>
        </div>
      </div>
    `;

    overlay.classList.add('active');
  }

  function closeQuickView() {
    const overlay = document.getElementById('quickViewOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  // ==========================================================
  // 10. CHECKOUT & ORDER COMPLETION
  // ==========================================================
  function openCheckout() {
    if (state.cart.length === 0) {
      showToast("Savat bo'sh! Avval tovar tanlang.", 'error', 'fa-triangle-exclamation');
      return;
    }

    // Close cart drawer
    closeDrawers();

    const overlay = document.getElementById('checkoutOverlay');
    const finalAmountEl = document.getElementById('checkoutFinalAmount');
    
    // Calculate total
    let subtotal = 0;
    state.cart.forEach(i => {
      const p = PRODUCTS.find(prod => prod.id === i.id);
      if (p) subtotal += p.price * i.quantity;
    });
    let discount = 0;
    if (state.appliedPromo) {
      if (state.appliedPromo.type === 'percent') discount = Math.round(subtotal * (state.appliedPromo.value / 100));
      else if (state.appliedPromo.type === 'fixed') discount = state.appliedPromo.value;
    }
    const finalTotal = Math.max(0, subtotal - discount);

    if (finalAmountEl) finalAmountEl.textContent = formatSum(finalTotal);
    if (overlay) overlay.classList.add('active');
  }

  function closeCheckout() {
    const overlay = document.getElementById('checkoutOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const region = document.getElementById('orderRegion').value;
    const address = document.getElementById('orderAddress').value.trim();
    const payment = document.querySelector('input[name="paymentMethod"]:checked').value;
    const note = document.getElementById('orderNote').value.trim();

    if (!name || !phone || !address) {
      showToast("Iltimos, barcha majburiy maydonlarni to'ldiring", 'error', 'fa-triangle-exclamation');
      return;
    }

    const orderNumber = 'ORD-' + Math.floor(10000 + Math.random() * 90000);
    const orderItems = [...state.cart];

    // Close checkout
    closeCheckout();

    // Trigger celebration
    sound.playSuccess();
    triggerConfetti();

    // Show Success Modal
    const successOverlay = document.getElementById('successOverlay');
    const orderNumEl = document.getElementById('successOrderNumber');
    const receiptEl = document.getElementById('successReceiptDetails');

    if (orderNumEl) orderNumEl.textContent = `#${orderNumber}`;

    let totalSum = 0;
    const itemsHtml = orderItems.map(item => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      if (!p) return '';
      const cost = p.price * item.quantity;
      totalSum += cost;
      return `<div>• ${p.title.slice(0, 30)}... x${item.quantity} = <strong>${formatSum(cost)}</strong></div>`;
    }).join('');

    if (receiptEl) {
      receiptEl.innerHTML = `
        <p><strong>Xaridor:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Manzil:</strong> ${region}, ${address}</p>
        <p><strong>To'lov usuli:</strong> ${payment}</p>
        ${note ? `<p><strong>Eslatma:</strong> ${note}</p>` : ''}
        <hr style="margin:8px 0; border:0; border-top:1px solid rgba(255,255,255,0.1);">
        <p><strong>Buyurtma tarkibi:</strong></p>
        ${itemsHtml}
        <hr style="margin:8px 0; border:0; border-top:1px solid rgba(255,255,255,0.1);">
        <p style="font-size:1rem;color:#10b981;"><strong>Jami summa:</strong> ${formatSum(totalSum)}</p>
      `;
    }

    if (successOverlay) successOverlay.classList.add('active');

    // Clear cart
    state.cart = [];
    state.appliedPromo = null;
    saveCart();
  }

  function triggerConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    container.innerHTML = '';

    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#38bdf8', '#a855f7'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.width = (Math.random() * 8 + 6) + 'px';
      confetti.style.height = (Math.random() * 8 + 6) + 'px';
      container.appendChild(confetti);
    }
  }

  // ==========================================================
  // 11. DRAWERS TOGGLING
  // ==========================================================
  function toggleCartDrawer(open = null) {
    sound.init();
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer || !overlay) return;

    const isActive = drawer.classList.contains('active');
    const shouldOpen = open !== null ? open : !isActive;

    if (shouldOpen) {
      closeDrawers();
      drawer.classList.add('active');
      overlay.classList.add('active');
    } else {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  }

  function toggleWishlistDrawer(open = null) {
    sound.init();
    const drawer = document.getElementById('wishlistDrawer');
    const overlay = document.getElementById('wishlistOverlay');
    if (!drawer || !overlay) return;

    const isActive = drawer.classList.contains('active');
    const shouldOpen = open !== null ? open : !isActive;

    if (shouldOpen) {
      closeDrawers();
      drawer.classList.add('active');
      overlay.classList.add('active');
    } else {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  }

  function closeDrawers() {
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const wishDrawer = document.getElementById('wishlistDrawer');
    const wishOverlay = document.getElementById('wishlistOverlay');

    if (cartDrawer) cartDrawer.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    if (wishDrawer) wishDrawer.classList.remove('active');
    if (wishOverlay) wishOverlay.classList.remove('active');
  }

  // ==========================================================
  // 12. HERO SLIDER LOGIC
  // ==========================================================
  function initHeroSlider() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.getElementById('nextSlideBtn');
    const prevBtn = document.getElementById('prevSlideBtn');
    if (!slides.length) return;

    function goToSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));

      state.heroSlideIndex = (index + slides.length) % slides.length;
      slides[state.heroSlideIndex].classList.add('active');
      if (dots[state.heroSlideIndex]) dots[state.heroSlideIndex].classList.add('active');
    }

    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(state.heroSlideIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(state.heroSlideIndex - 1));

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => goToSlide(idx));
    });

    // Auto rotate every 6 seconds
    setInterval(() => {
      goToSlide(state.heroSlideIndex + 1);
    }, 6000);
  }

  // ==========================================================
  // 13. FLASH DEAL COUNTDOWN TIMER
  // ==========================================================
  function initCountdownTimer() {
    const hoursEl = document.getElementById('timerHours');
    const minsEl = document.getElementById('timerMinutes');
    const secsEl = document.getElementById('timerSeconds');
    if (!hoursEl || !minsEl || !secsEl) return;

    let totalSeconds = 8 * 3600 + 42 * 60 + 19;

    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        totalSeconds = 12 * 3600; // Reset
      }

      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      hoursEl.textContent = String(h).padStart(2, '0');
      minsEl.textContent = String(m).padStart(2, '0');
      secsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
  }

  // ==========================================================
  // 14. SEARCH & AUTOCOMPLETE
  // ==========================================================
  function initSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const autocomplete = document.getElementById('searchAutocomplete');
    if (!input) return;

    input.addEventListener('input', (e) => {
      const query = e.target.value;
      state.filter.search = query;

      if (clearBtn) {
        clearBtn.style.display = query ? 'block' : 'none';
      }

      // Autocomplete list
      if (query.trim().length >= 2) {
        const matches = PRODUCTS.filter(p => 
          p.title.toLowerCase().includes(query.toLowerCase()) || 
          p.categoryName.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);

        if (matches.length > 0) {
          autocomplete.style.display = 'block';
          autocomplete.innerHTML = matches.map(p => `
            <div class="search-item-row" onclick="window.marketApp.openQuickView('${p.id}')">
              <img src="${p.image}" class="search-item-img">
              <div class="search-item-info">
                <div class="search-item-name">${p.title}</div>
                <div class="search-item-price">${formatSum(p.price)}</div>
              </div>
            </div>
          `).join('');
        } else {
          autocomplete.style.display = 'none';
        }
      } else {
        autocomplete.style.display = 'none';
      }

      renderProducts();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        state.filter.search = '';
        clearBtn.style.display = 'none';
        autocomplete.style.display = 'none';
        renderProducts();
      });
    }

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !autocomplete.contains(e.target)) {
        autocomplete.style.display = 'none';
      }
    });
  }

  // ==========================================================
  // 15. FILTERS & SORTING EVENTS
  // ==========================================================
  function initFilters() {
    // Quick Category Pills
    const pills = document.querySelectorAll('.cat-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const cat = pill.dataset.category;
        state.filter.category = cat;

        const titleEl = document.getElementById('currentSectionTitle');
        if (titleEl) {
          titleEl.textContent = cat === 'all' ? 'Barcha Mahsulotlar' : pill.textContent.trim();
        }

        renderProducts();
      });
    });

    // Catalog Mega Menu Items
    const menuItems = document.querySelectorAll('.cat-menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = item.dataset.category;
        state.filter.category = cat;

        pills.forEach(p => {
          if (p.dataset.category === cat) p.classList.add('active');
          else p.classList.remove('active');
        });

        const titleEl = document.getElementById('currentSectionTitle');
        if (titleEl) titleEl.textContent = item.textContent.trim();

        // Close mega menu
        const menu = document.getElementById('catalogMegaMenu');
        if (menu) menu.classList.remove('active');

        renderProducts();
      });
    });

    // Catalog Dropdown Toggle
    const catalogBtn = document.getElementById('catalogDropdownBtn');
    const catalogMenu = document.getElementById('catalogMegaMenu');
    if (catalogBtn && catalogMenu) {
      catalogBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        catalogMenu.classList.toggle('active');
      });
      document.addEventListener('click', () => catalogMenu.classList.remove('active'));
    }

    // Filter Toggle Button
    const filterBtn = document.getElementById('filterToggleBtn');
    const filterPanel = document.getElementById('filterPanel');
    if (filterBtn && filterPanel) {
      filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterPanel.classList.toggle('active');
      });
      document.addEventListener('click', (e) => {
        if (!filterPanel.contains(e.target)) {
          filterPanel.classList.remove('active');
        }
      });
    }

    // Price Range Slider
    const priceRange = document.getElementById('priceRange');
    const priceDisplay = document.getElementById('priceDisplay');
    if (priceRange && priceDisplay) {
      priceRange.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        state.filter.maxPrice = val;
        priceDisplay.textContent = new Intl.NumberFormat('uz-UZ').format(val);
        renderProducts();
      });
    }

    // Only Discount Checkbox
    const discCheck = document.getElementById('onlyDiscountCheckbox');
    if (discCheck) {
      discCheck.addEventListener('change', (e) => {
        state.filter.onlyDiscount = e.target.checked;
        renderProducts();
      });
    }

    // In Stock Checkbox
    const stockCheck = document.getElementById('inStockCheckbox');
    if (stockCheck) {
      stockCheck.addEventListener('change', (e) => {
        state.filter.inStock = e.target.checked;
        renderProducts();
      });
    }

    // Sort Select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.filter.sortBy = e.target.value;
        renderProducts();
      });
    }

    // Reset Filters Button
    const resetBtn = document.getElementById('resetFiltersBtn');
    const emptyResetBtn = document.getElementById('emptyResetBtn');
    function resetAllFilters() {
      state.filter.category = 'all';
      state.filter.maxPrice = 35000000;
      state.filter.onlyDiscount = false;
      state.filter.inStock = true;
      state.filter.search = '';
      state.filter.sortBy = 'popular';

      if (priceRange) priceRange.value = 35000000;
      if (priceDisplay) priceDisplay.textContent = '35 000 000';
      if (discCheck) discCheck.checked = false;
      if (stockCheck) stockCheck.checked = true;
      if (sortSelect) sortSelect.value = 'popular';

      const input = document.getElementById('searchInput');
      if (input) input.value = '';

      pills.forEach(p => {
        if (p.dataset.category === 'all') p.classList.add('active');
        else p.classList.remove('active');
      });

      renderProducts();
      showToast("Filtrlar tozalandi", 'info', 'fa-rotate-left');
    }

    if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);
  }

  // ==========================================================
  // 16. THEME TOGGLE
  // ==========================================================
  function initTheme() {
    const root = document.documentElement;
    const btn = document.getElementById('themeToggleBtn');
    
    // Apply initial
    root.setAttribute('data-theme', state.theme);
    if (btn) {
      btn.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun" style="color:#f59e0b;"></i>';
      btn.addEventListener('click', () => {
        const next = state.theme === 'dark' ? 'light' : 'dark';
        state.theme = next;
        root.setAttribute('data-theme', next);
        localStorage.setItem('bm_theme', next);
        btn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun" style="color:#f59e0b;"></i>';
        showToast(next === 'dark' ? "Tungi mavzu yoqildi" : "Kunduzgi mavzu yoqildi", 'info', 'fa-palette');
      });
    }
  }

  // ==========================================================
  // 17. GLOBAL EVENT LISTENERS & INITIALIZATION
  // ==========================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeroSlider();
    initCountdownTimer();
    initSearch();
    initFilters();
    renderProducts();
    updateCartUI();
    updateWishlistUI();

    // Cart Trigger Buttons
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => toggleCartDrawer(true));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
    if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCartDrawer(false));

    // Wishlist Trigger Buttons
    const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
    const closeWishlistBtn = document.getElementById('closeWishlistBtn');
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    if (wishlistToggleBtn) wishlistToggleBtn.addEventListener('click', () => toggleWishlistDrawer(true));
    if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', () => toggleWishlistDrawer(false));
    if (wishlistOverlay) wishlistOverlay.addEventListener('click', () => toggleWishlistDrawer(false));

    // Promo Code Button
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    if (applyPromoBtn) applyPromoBtn.addEventListener('click', applyPromoCode);

    // Clear Cart Button
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

    // Quick View Modal Close
    const closeQvBtn = document.getElementById('closeQuickViewBtn');
    const qvOverlay = document.getElementById('quickViewOverlay');
    if (closeQvBtn) closeQvBtn.addEventListener('click', closeQuickView);
    if (qvOverlay) qvOverlay.addEventListener('click', (e) => {
      if (e.target === qvOverlay) closeQuickView();
    });

    // Checkout Flow
    const checkoutBtn = document.getElementById('proceedToCheckoutBtn');
    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', (e) => {
      if (e.target === checkoutOverlay) closeCheckout();
    });
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Success Modal Close
    const successOverlay = document.getElementById('successOverlay');
    const continueBtn = document.getElementById('continueShoppingBtn');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        if (successOverlay) successOverlay.classList.remove('active');
      });
    }

    // Phone input mask
    const phoneInput = document.getElementById('orderPhone');
    if (phoneInput) {
      phoneInput.addEventListener('focus', () => {
        if (!phoneInput.value) phoneInput.value = '+998 ';
      });
    }
  });

  // ==========================================================
  // 18. EXPOSE TO WINDOW FOR INLINE HANDLERS
  // ==========================================================
  window.marketApp = {
    addToCart,
    quickAddToCart: function (id) {
      addToCart(id);
      toggleCartDrawer(true);
    },
    changeCartQty,
    removeFromCart,
    toggleWishlist,
    openQuickView,
    closeQuickView,
    filterByCategory: function (category) {
      const pill = document.querySelector(`.cat-pill[data-category="${category}"]`);
      if (pill) {
        pill.click();
      } else {
        state.filter.category = category;
        renderProducts();
      }
      const section = document.getElementById('productsSection');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

})();
